import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Search, Globe } from "lucide-react";
import logo from "@/assets/splash-logo.png";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"init" | "analyze" | "reveal" | "done">("init");
  const [scanText, setScanText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    // Check if splash screen has already been shown this session
    const hasPlayed = sessionStorage.getItem("v4_splash_played");
    if (hasPlayed) {
      setIsVisible(false);
      setPhase("done");
      return;
    }

    // Sequence timeline
    // 0ms: Init
    const t1 = setTimeout(() => {
      setPhase("analyze");
      setScanText("ANALYZING SOCIAL PLATFORMS...");
    }, 800);

    const t2 = setTimeout(() => {
      setScanText("ESTABLISHING DIGITAL PRESENCE...");
    }, 1800);

    const t3 = setTimeout(() => {
      setPhase("reveal");
    }, 2800);

    const t4 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("v4_splash_played", "true");
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!isVisible && phase === "done") return null;

  const socialIcons = [
    { Icon: Facebook, delay: 0.1 },
    { Icon: Twitter, delay: 0.3 },
    { Icon: Instagram, delay: 0.5 },
    { Icon: Linkedin, delay: 0.7 },
    { Icon: Globe, delay: 0.9 },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Phase 1 & 2: Scanning & Analyzing */}
          {(phase === "init" || phase === "analyze") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8"
            >
              <div className="flex gap-6">
                {socialIcons.map(({ Icon, delay }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      phase === "analyze"
                        ? {
                            opacity: [0.2, 1, 0.2],
                            y: 0,
                            scale: [1, 1.2, 1],
                            color: ["#ffffff", "#a855f7", "#ffffff"],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: phase === "analyze" ? Infinity : 0,
                      delay: delay,
                      ease: "easeInOut",
                    }}
                    className="text-white/20"
                  >
                    <Icon className="size-8" />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-primary font-mono text-sm tracking-widest">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <Search className="size-4" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {scanText}
                </motion.span>
              </div>
              
              {/* Data stream effect lines */}
              <div className="absolute inset-x-0 bottom-1/4 h-px w-full overflow-hidden opacity-30">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="h-full w-1/3 bg-linear-to-r from-transparent via-primary to-transparent"
                />
              </div>
            </motion.div>
          )}

          {/* Phase 3: Logo Reveal with Laser Shine */}
          {phase === "reveal" && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Purple Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.5, 0.8, 0], scale: [0.8, 1.5, 2, 3] }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 rounded-full bg-primary/30 blur-[100px]"
              />

              {/* Laser Sweep Effect Container */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src={logo}
                  alt="V4 Nexus Logo"
                  className="w-48 object-contain sm:w-64"
                />
                
                {/* The Laser Shine overlay */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-0 z-20 h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/80 to-transparent mix-blend-overlay"
                />
              </div>

              {/* Subtext reveal */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-12 text-center text-xs font-bold tracking-[0.3em] text-primary"
              >
                SMART DIGITAL EXPERIENCES
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
