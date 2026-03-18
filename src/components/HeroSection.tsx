import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Aerial view of industrial solar panel farm at dusk"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 grid-line"
            style={{ left: `${(i + 1) * (100 / 13)}%` }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Zap size={14} /> Renewable Energy Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-foreground text-balance leading-[1.05]"
          >
            Engineering the Future of{" "}
            <span className="gradient-text">Clean Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0, 0, 1] }}
            className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-[55ch]"
          >
            Aervyn Green delivers precision consulting for solar, wind, and
            hybrid renewable energy projects—backed by advanced drone
            thermography and data-driven insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0, 0, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover-glow hover:scale-[1.02] active:scale-95 transition-transform"
            >
              Start a Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="h-12 px-8 rounded-full border border-foreground/10 text-foreground font-semibold text-sm flex items-center hover:bg-foreground/5 transition-colors"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap gap-12"
          >
            {[
              { value: "500+", label: "MW Managed" },
              { value: "98%", label: "Accuracy Rate" },
              { value: "150+", label: "Projects Delivered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
