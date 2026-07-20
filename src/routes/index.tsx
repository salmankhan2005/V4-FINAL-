import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Brain,
  Palette,
  Megaphone,
  Workflow,
  Cloud,
  BarChart3,
  Sparkles,
  Smartphone,
  Search,
  Users,
  CheckCircle2,
  Download,
  Play,
  Target,
  Rocket,
  Globe,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

import heroMockup from "@/assets/hero-mockup-new.png";
import office from "@/assets/office.jpg";
const storyVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Placeholder video

export const Route = createFileRoute("/")({
  component: Landing,
});

const EXPERTISE = [
  { icon: Code2, label: "Software Development" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Workflow, label: "Automation Solutions" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: Sparkles, label: "Branding & Identity" },
];

const SERVICES = [
  { icon: Code2, title: "Web Development", desc: "Modern, responsive, and high-performance websites." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Powerful mobile apps for iOS and Android." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent solutions driven by data and automation." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, user-centric designs that drive engagement." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Strategies that grow your brand and reach." },
  { icon: Search, title: "SEO & Analytics", desc: "Improve visibility and maximize performance." },
  { icon: Workflow, title: "Automation Solutions", desc: "Streamline workflows and boost productivity." },
  { icon: Sparkles, title: "Branding & Identity", desc: "Create a strong identity that represents your brand." },
];

const MISSIONS = [
  {
    icon: Rocket,
    title: "Accelerate Careers with AI",
    desc: "We build AI-powered career tools — resume builders, interview coaches, and career advisors — that give every job seeker an unfair advantage in a competitive market.",
    tag: "AI • Career Tech",
  },
  {
    icon: Lightbulb,
    title: "Democratize Education",
    desc: "From AI course generators to adaptive learning platforms, we create EdTech products that make quality education accessible, personalized, and scalable for learners worldwide.",
    tag: "AI • EdTech",
  },
  {
    icon: Globe,
    title: "Empower Local Businesses Digitally",
    desc: "We bring traditional businesses — food brands, manufacturers, and local enterprises — into the digital era with modern websites, SEO, and brand identities that drive real growth.",
    tag: "Brand • B2B",
  },
  {
    icon: Brain,
    title: "Make AI Accessible for Everyone",
    desc: "We integrate cutting-edge AI and machine learning into everyday products so that startups and SMEs can compete with enterprise-level intelligence without enterprise-level budgets.",
    tag: "AI • Automation",
  },
  {
    icon: ShieldCheck,
    title: "Build with Quality & Integrity",
    desc: "Every product we ship is built with clean, scalable code, rigorous testing, and a commitment to performance — because our clients deserve solutions that last and grow with them.",
    tag: "Engineering • Quality",
  },
  {
    icon: HeartHandshake,
    title: "Be a Long-Term Growth Partner",
    desc: "We don't just deliver and disappear. We stay invested in our clients' success — providing ongoing support, iteration, and strategic guidance as their businesses evolve.",
    tag: "Partnership • Support",
  },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "We understand your needs and goals." },
  { n: "02", t: "Plan", d: "We create a strategy and project roadmap." },
  { n: "03", t: "Design", d: "We design intuitive and modern UI/UX." },
  { n: "04", t: "Develop", d: "We build with clean and scalable code." },
  { n: "05", t: "Launch", d: "We test, deploy and make it live." },
  { n: "06", t: "Support", d: "We provide ongoing support & growth." },
];



function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="overflow-hidden">
        <Reveal direction="up" delay={0.1}><Hero /></Reveal>
        <Reveal direction="up" delay={0.2}><ExpertiseRibbon /></Reveal>
        <Reveal direction="up" delay={0.2}><About /></Reveal>
        <Reveal direction="up" delay={0.2}><Services /></Reveal>
        <Reveal direction="up" delay={0.2}><Mission /></Reveal>
        <Reveal direction="up" delay={0.2}><Process /></Reveal>
      </main>
    </div>
  );
}


function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-150 w-150 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-12 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            WE BUILD. YOU GROW.
          </p>
          <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-[3.5rem]">
            Building Smart
            <br />
            <span className="text-primary">Digital</span>
            <br />
            Experiences.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            We help startups, businesses, and brands turn ideas into powerful
            digital solutions that drive growth and make an impact.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow) transition-all hover:bg-primary/90"
            >
              Start Your Project <ArrowRight className="size-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Explore Services <ArrowRight className="size-4" />
            </a>
          </div>


        </div>

        <div className="relative flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative w-full sm:w-full lg:w-[125%] xl:w-[135%]">
            {/* Background Purple Circle Effect */}
            <div className="absolute left-1/2 top-[45%] z-0 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-purple-500/5 via-purple-500/10 to-purple-400/20 opacity-80 blur-2xl sm:w-[75%] lg:w-[70%]" />
            <div className="absolute left-1/2 top-[45%] z-0 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/50 bg-linear-to-br from-purple-100/40 to-transparent sm:w-[75%] lg:w-[70%]" />
            
            <img
              src={heroMockup}
              alt="Digital product mockups showing dashboard analytics"
              className="relative z-10 w-full"
              width={1408}
              height={1200}
            />
            <div className="absolute left-[2%] top-[5%] z-0 flex w-35 items-center justify-between rounded-xl bg-white p-2 shadow-2xl sm:left-[2%] sm:top-[10%] sm:w-45 sm:rounded-[20px] sm:p-3 lg:top-[12%] lg:w-55 lg:p-4 origin-top-left transition-transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="flex flex-col gap-0.5">
                <div className="text-[8px] font-bold text-slate-800 sm:text-[10px] lg:text-[12px]">
                  Projects Delivered
                </div>
                <div className="text-lg font-black leading-none text-slate-900 sm:text-xl lg:text-3xl">7+</div>
              </div>
              <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#8b5cf6] text-white shadow-md sm:size-8 sm:rounded-2xl lg:size-12">
                <BarChart3 className="size-3.5 sm:size-4 lg:size-6" />
              </div>
            </div>
            
            <div className="absolute left-[2%] top-[40%] z-20 flex w-30 items-center justify-between rounded-xl bg-white p-2 shadow-2xl sm:left-[2%] sm:top-[42%] sm:w-37.5 sm:rounded-[20px] sm:p-2.5 lg:left-[-12%] lg:top-[45%] lg:w-45 lg:p-3 origin-top-left transition-transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="flex flex-col gap-0.5">
                <div className="text-[7px] font-bold text-slate-800 sm:text-[9px] lg:text-[10px]">
                  Client Satisfaction
                </div>
                <div className="text-base font-black leading-none text-slate-900 sm:text-lg lg:text-2xl">96%</div>
              </div>
              <div className="grid size-6 shrink-0 place-items-center rounded-full bg-[#8b5cf6] text-white shadow-md sm:size-7 lg:size-10">
                <Sparkles className="size-3 sm:size-3.5 lg:size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseRibbon() {
  return (
    <section className="container-page pb-12">
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) sm:grid-cols-4 lg:grid-cols-8 lg:gap-2">
        {EXPERTISE.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 px-2 py-2">
            <Icon className="size-5 shrink-0 text-primary" />
            <span className="text-xs font-semibold leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stats = [
    { icon: Download, n: "7+", t: "Projects Delivered" },
    { icon: Sparkles, n: "7", t: "Happy Clients" },
    { icon: Users, n: "6", t: "Experts" },
    { icon: CheckCircle2, n: "100%", t: "Client Satisfaction" },
  ];
  return (
    <section id="about" className="container-page py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            ABOUT V4 NEXUS
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Your Trusted Partner in Digital Innovation
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            V4 Nexus is a team of passionate innovators, developers, designers,
            and marketers dedicated to building intelligent solutions that help
            businesses grow in the digital era.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
            {stats.map(({ icon: Icon, n, t }) => (
              <div
                key={t}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-(--shadow-card)"
              >
                <div className="mx-auto grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="mt-3 text-2xl font-black">{n}</div>
                <div className="text-xs text-muted-foreground">{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl group flex bg-black aspect-video w-full self-center shadow-(--shadow-card)">
          <video
            ref={videoRef}
            src={storyVideo}
            poster={office}
            controls={isPlaying}
            onPause={() => setIsPlaying(false)}
            className="h-full w-full object-cover"
            preload="none"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button 
                onClick={handlePlay}
                className="group/btn flex items-center gap-3 rounded-full bg-primary/90 py-2 pl-2 pr-4 text-primary-foreground backdrop-blur-sm transition-transform hover:scale-105"
              >
                <span className="grid size-10 place-items-center rounded-full bg-primary-foreground text-primary">
                  <Play className="size-4 fill-current ml-1" />
                </span>
                <span className="text-sm font-semibold">Watch Our Story</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-20">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_2.5fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              WHAT WE DO
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Services That
              <br />
              We Provide
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-border p-[1.5px] shadow-(--shadow-card) transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -inset-full animate-border-spin bg-border-laser opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full w-full flex-col rounded-[15px] bg-card p-5">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="bg-secondary/40 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">OUR MISSION</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            What Drives Us Forward
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every product we build is rooted in a deeper purpose — to create meaningful digital impact for people, businesses, and communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MISSIONS.map(({ icon: Icon, title, desc, tag }, i) => (
            <Reveal key={title} direction="up" delay={0.08 * i}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <span className="mt-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {tag}
                  </span>
                </div>
                <h3 className="relative z-10 mt-5 text-base font-bold leading-snug">{title}</h3>
                <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="relative z-10 mt-5 h-px w-full bg-linear-to-r from-primary/30 via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Target className="size-5 shrink-0" />
                <span className="text-xs font-bold tracking-[0.2em] opacity-80">THE BIG PICTURE</span>
              </div>
              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                To become the most trusted digital growth partner for startups and brands across India and beyond.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-80">
                We envision a world where every ambitious idea — no matter the size of the team or budget — has access to world-class technology, design, and AI to make it real.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary-foreground/90"
            >
              Join Our Mission <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  return (
    <section id="process" className="container-page py-16">
      <p className="text-xs font-bold tracking-[0.2em] text-primary">
        OUR PROCESS
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
        How We Work
      </h2>

      <div className="relative mt-10">
        {/* Horizontal Line for Desktop */}
        <div className="pointer-events-none absolute left-0 top-1/2 z-0 hidden h-1.5 w-full -translate-y-1/2 overflow-hidden rounded-full bg-primary/10 lg:block">
          <div className="h-full w-1/3 animate-chain bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Vertical Line for Mobile */}
        <div className="pointer-events-none absolute left-8 top-0 z-0 h-full w-1.5 overflow-hidden rounded-full bg-primary/10 sm:left-1/2 sm:-translate-x-1/2 lg:hidden">
          <div className="w-full h-1/3 animate-chain-vertical bg-linear-to-b from-transparent via-primary to-transparent" />
        </div>

        <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map((s, i) => {
            const isLast = i === PROCESS.length - 1;
            const clip = isLast
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%)"
              : "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%, 8% 50%)";
            const firstClip = "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)";
            const isActive = activeIdx === i;
            
            return (
              <Reveal key={s.n} direction="up" delay={0.1 * i}>
                <div
                  tabIndex={0}
                  onPointerDown={() => setActiveIdx(i)}
                  onPointerUp={() => setActiveIdx(null)}
                  onPointerCancel={() => setActiveIdx(null)}
                  style={{ clipPath: i === 0 ? firstClip : clip }}
                  className={`group relative h-full py-8 pl-10 pr-12 sm:pl-12 sm:pr-14 lg:pl-10 lg:pr-12 cursor-pointer outline-none [-webkit-tap-highlight-color:transparent] transition-colors hover:bg-primary ${isActive ? "bg-primary" : "bg-card"}`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 transition-opacity group-hover:opacity-0 ${isActive ? "opacity-0" : ""}`} />
                  <div className={`relative z-10 text-2xl font-black transition-colors group-hover:text-primary-foreground/80 ${isActive ? "text-primary-foreground/80" : "text-primary/70"}`}>{s.n}</div>
                  <h3 className={`relative z-10 mt-1.5 text-base font-bold transition-colors group-hover:text-primary-foreground ${isActive ? "text-primary-foreground" : "text-foreground"}`}>{s.t}</h3>
                  <p className={`relative z-10 mt-1.5 text-sm leading-snug transition-colors group-hover:text-primary-foreground/90 ${isActive ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}




