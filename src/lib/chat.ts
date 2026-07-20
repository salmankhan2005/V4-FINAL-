import { createServerFn } from "@tanstack/react-start";

export const chatWithBotFn = createServerFn({ method: "POST" })
  .validator((d: string) => d)
  .handler(async ({ data: message }) => {
    // Basic Data Guardrails (Scrub PII before sending to Groq)
    let scrubbedMessage = message
      // Scrub emails
      .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[EMAIL_REDACTED]")
      // Scrub basic 10-12 digit phone numbers
      .replace(/\+?\d{10,12}\b/g, "[PHONE_REDACTED]")
      // Specific sensitive project redactions (example)
      .replace(/V4 Nexus internal/gi, "[REDACTED]");

    const groqApiKey = process.env.GROQ_API_KEY;
    
    if (!groqApiKey) {
      console.error("Missing GROQ_API_KEY environment variable");
      return "I'm currently undergoing maintenance and don't have access to my brain. Please check back later or contact us directly!";
    }

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: process.env.GROQ_MODEL || "llama-3.1-8b-instant", 
          messages: [
            {
              role: "system",
              content: "You are a dedicated Support Agent for V4 Nexus, a digital product agency. Your role is to help users resolve issues, guide them through technical inquiries, and provide friendly, professional support regarding web, app, and AI solutions. Do NOT ask for or store any personal data. If asked about specific internal projects or client info, say you do not have access to that information for security reasons. If users ask for contact details, provide the following: Email: v4nexustech@gmail.com, Phone: +91 84286 87001, Office: Pallipalayam, Namakkal, Tamil Nadu, India - 638008."
            },
            {
              role: "user",
              content: scrubbedMessage
            }
          ]
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Groq API error:", errText.replace(/[\r\n]/g, " ").slice(0, 200));
        return "Sorry, I'm having trouble connecting right now.";
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "I couldn't generate a response.";
    } catch (error) {
      const message = error instanceof Error ? error.message.replace(/[\r\n]/g, " ") : "Unknown error";
      console.error("Chat error:", message);
      return "Sorry, something went wrong on my end.";
    }
  });
