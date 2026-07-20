import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import logo from "@/assets/v4-logo-transparent.png";
import { ClientOnly } from "@/components/ClientOnly";
const Lottie = React.lazy(() => import("lottie-react").then(m => ({ default: m.default || (m as any) })));
import businessTeamAnim from "@/assets/business-team.json";

export const NAV = [
  { label: "Home", to: "/", hash: "home" },
  { label: "About Us", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Mission", to: "/", hash: "mission" },
  { label: "Process", to: "/", hash: "process" },
  { label: "Contact", to: "/contact" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt="V4 Nexus"
        className="size-8 shrink-0 object-contain sm:size-9"
      />
      <span className="text-xl font-black tracking-tight text-foreground sm:text-2xl">
        V4 Nexus
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouterState();
  
  // For simplicity we just match pathname for active nav
  const activeNavLabel = NAV.find(n => n.to === router.location.pathname && (!n.hash || n.hash === router.location.hash))?.label || "Home";

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex items-center justify-between gap-4 py-4 lg:grid lg:grid-cols-[auto_1fr_auto]">
        <Logo className="shrink-0" />
        <nav className="relative hidden justify-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {NAV.map((n) => {
            const isActive = activeNavLabel === n.label;
            return (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                className={`transition-colors hover:text-foreground ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-accent lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <span className="hidden sm:inline">Book a Call</span>
            <span className="sm:hidden">Book</span>
            <ArrowRight className="size-4 shrink-0" />
          </Link>
        </div>
      </div>
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm lg:hidden">
          <nav className="container-page flex flex-col gap-2 py-4 text-sm font-medium text-muted-foreground">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground ${
                  activeNavLabel === n.label ? "text-primary" : ""
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="mt-10 bg-[oklch(0.15_0.02_265)] text-white/80 dark:bg-zinc-950 dark:border-t dark:border-white/10">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="V4 Nexus"
                className="size-9 shrink-0 object-contain brightness-0 invert"
              />
              <span className="text-lg font-black tracking-tight text-white">
                V4 Nexus
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              We build digital solutions that empower businesses, engage users,
              and create lasting impact.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/v4nexus-tech?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { Icon: Instagram, href: "https://www.instagram.com/v4nexus_tech" },
                { Icon: Twitter, href: "https://x.com/V4nexustech" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-lg bg-white/5 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} hash={l.hash} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {["Web Development", "App Development", "AI & ML Solutions", "Digital Marketing"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Pallipalayam, Namakkal - 638008</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+91 84286 87001</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>v4nexustech@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center self-start">
            <ClientOnly>
              <React.Suspense fallback={null}>
                <Lottie
                  animationData={businessTeamAnim}
                  loop
                  autoplay
                  className="w-full max-w-[200px] lg:max-w-[220px]"
                />
              </React.Suspense>
            </ClientOnly>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© 2025 V4 Nexus. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
