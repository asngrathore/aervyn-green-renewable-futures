import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tighter text-foreground text-balance">
              Ready to Power Your{" "}
              <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-[50ch]">
              Whether you're planning a new solar farm, optimizing an existing
              wind asset, or need advanced drone inspection services—let's talk.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: "Headquarters", value: "Dubai, UAE" },
                { icon: Mail, label: "Email", value: "hello@aervyngreen.com" },
                { icon: Phone, label: "Phone", value: "+971 4 000 0000" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-surface p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-foreground mb-2">
                  System Ready
                </h3>
                <p className="text-muted-foreground">
                  We've received your request. Our team will respond within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-surface p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full h-11 px-4 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-11 px-4 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Service Interest
                  </label>
                  <select className="w-full h-11 px-4 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none">
                    <option value="">Select a service</option>
                    <option>Solar Plant Consulting</option>
                    <option>Wind Energy Solutions</option>
                    <option>Hybrid Plant Design</option>
                    <option>Drone Thermography</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover-glow hover:scale-[1.01] active:scale-[0.98] transition-transform"
                >
                  Request Consultation
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
