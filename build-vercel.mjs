import { cpSync, mkdirSync, writeFileSync, rmSync, existsSync } from "fs";
import { resolve } from "path";

const root = process.cwd();
const vercelOut = resolve(root, ".vercel/output");

// Clean previous output
if (existsSync(vercelOut)) rmSync(vercelOut, { recursive: true });

// 1. Static files → .vercel/output/static
const staticOut = resolve(vercelOut, "static");
mkdirSync(staticOut, { recursive: true });
cpSync(resolve(root, "dist/client"), staticOut, { recursive: true });

// 2. Serverless function → .vercel/output/functions/index.func
const funcOut = resolve(vercelOut, "functions/index.func");
mkdirSync(funcOut, { recursive: true });
cpSync(resolve(root, "dist/server"), funcOut, { recursive: true });

// 3. Write the Node.js http adapter that bridges Vercel's (req,res) → fetch handler
writeFileSync(
  resolve(funcOut, "index.js"),
  `
import { createServer } from "node:http";
import { Readable } from "node:stream";

// Import the TanStack Start fetch-based handler
const { default: handler } = await import("./server.js");

export default async function vercelHandler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers["host"] || "localhost";
  const url = new URL(req.url, \`\${protocol}://\${host}\`);

  // Collect body
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = chunks.length > 0 ? Buffer.concat(chunks) : null;

  const hasBody = body && body.length > 0 && !["GET", "HEAD"].includes(req.method.toUpperCase());

  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: hasBody ? body : undefined,
    duplex: hasBody ? "half" : undefined,
  });

  const response = await handler.fetch(request, process.env, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
}
`
);

// 4. package.json inside function — declare ESM so Node.js handles top-level await
writeFileSync(
  resolve(funcOut, "package.json"),
  JSON.stringify({ type: "module" }, null, 2)
);

// 5. .vc-config.json — use the adapter as entry, Node.js launcher
//    Vercel Build Output API v3: "handler" is the required field for launcherType "Nodejs"
writeFileSync(
  resolve(funcOut, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
      shouldAddHelpers: true,
    },
    null,
    2
  )
);

// 6. config.json — static assets served directly, everything else → SSR function
writeFileSync(
  resolve(vercelOut, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        {
          src: "/assets/(.+)",
          headers: { "cache-control": "public, max-age=31536000, immutable" },
          continue: true,
        },
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2
  )
);

console.log("✅ .vercel/output built successfully");
