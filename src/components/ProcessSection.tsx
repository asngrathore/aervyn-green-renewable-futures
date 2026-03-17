import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileText, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Assessment",
    desc: "We conduct thorough site analysis, resource assessment, and feasibility studies to understand your project's unique requirements.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Technical Design",
    desc: "Our engineers develop optimized plant layouts, equipment specifications, and performance models tailored to maximize ROI.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Execution Support",
    desc: "We provide owner's engineering services, construction oversight, and quality assurance throughout the build phase.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Optimization & Monitoring",
    desc: "Post-commissioning, we deliver ongoing performance monitoring, drone inspections, and asset management consulting.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              How We Work
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tighter text-foreground text-balance">
            From Concept to{" "}
            <span className="gradient-text">Commissioning</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[55ch] mx-auto">
            A proven four-phase methodology that ensures precision at every
            stage of your renewable energy project.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.15,
                    ease: [0.2, 0, 0, 1],
                  }}
                  className="relative text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-primary/30 mb-6 relative z-10">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="text-accent/60 font-display font-bold text-sm mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
