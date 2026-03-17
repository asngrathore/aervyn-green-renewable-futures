import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, BarChart3, Globe, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Technical Rigor",
    desc: "Every recommendation is grounded in engineering data, not assumptions.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    desc: "Advanced analytics and thermal imaging to quantify plant performance.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Projects spanning 15+ countries across diverse climate zones.",
  },
  {
    icon: Users,
    title: "Industry Veterans",
    desc: "Our team brings 100+ combined years in renewable energy engineering.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                About Aervyn Green
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tighter text-foreground text-balance">
              We Turn Complexity Into{" "}
              <span className="gradient-text">Clarity</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-[55ch]">
              Aervyn Green is an independent renewable energy consultancy
              specializing in technical due diligence, asset optimization, and
              unconventional inspection technologies. We help investors,
              developers, and operators maximize the performance and longevity of
              their clean energy assets.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="font-display font-bold text-4xl text-primary">
                  15+
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  Countries
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-accent">
                  $2B+
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  Assets Advised
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-foreground">
                  50+
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  Team Members
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: [0.2, 0, 0, 1],
                  }}
                  className="card-surface p-6 hover-glow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
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

export default AboutSection;
