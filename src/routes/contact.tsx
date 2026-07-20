import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ClientOnly } from "@/components/ClientOnly";
const Lottie = React.lazy(() => import("lottie-react").then(m => ({ default: m.default || (m as any) })));
import supportAnime from "../assets/Support anime.json";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <div className="container-page py-20 overflow-hidden">
      <Reveal direction="up" delay={0.1}>
        <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind? Let's build something extraordinary together. Fill out the form below or reach out to us directly.
        </p>
        <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-secondary p-8 shadow-inner min-h-[300px]">
          <ClientOnly>
            <React.Suspense fallback={null}>
              <Lottie 
                animationData={supportAnime} 
                loop={true} 
                className="w-full mix-blend-multiply dark:mix-blend-screen"
              />
            </React.Suspense>
          </ClientOnly>
        </div>
      </div>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        {/* Contact Info & Animation */}
        <Reveal direction="up" delay={0.2}>
        <div className="flex flex-col">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-(--shadow-card)">
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'd love to hear from you. Our team is always ready to answer your questions.
            </p>
            
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Office Location</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pallipalayam, Namakkal<br />
                    Tamil Nadu, India - 638008
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone Number</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +91 84286 87001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Address</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    v4nexustech@gmail.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal direction="up" delay={0.3}>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-(--shadow-card) lg:p-12">
          <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
          <form 
            className="mt-8 space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const firstName = formData.get("firstName") as string;
              const lastName = formData.get("lastName") as string;
              const email = formData.get("email") as string;
              const message = formData.get("message") as string;

              const subject = encodeURIComponent(`New Inquiry from ${firstName} ${lastName}`);
              const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
              
              // Open Gmail compose window directly
              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=v4nexustech@gmail.com&su=${subject}&body=${body}`;
              window.open(gmailUrl, '_blank');
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full rounded-lg border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  className="w-full rounded-lg border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="john@example.com" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Tell us about your project..." 
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow) transition-all hover:bg-primary/90"
            >
              Send Message <Send className="size-4" />
            </button>
          </form>
        </div>
        </Reveal>
      </div>
    </div>
  );
}
