import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Wind, Layers, Camera } from "lucide-react";
import solarImg from "@/assets/service-solar.jpg";
import windImg from "@/assets/service-wind.jpg";
import hybridImg from "@/assets/service-hybrid.jpg";
import droneImg from "@/assets/service-drone.jpg";

const services = [
  {
    icon: Sun,
    title: "Solar Plant Consulting",
    description:
      "End-to-end advisory for utility-scale solar projects—from site assessment and feasibility studies to performance optimization and asset management.",
    image: solarImg,
    stats: "200+ MW Solar",
    color: "text-primary",
  },
  {
    icon: Wind,
    title: "Wind Energy Solutions",
    description:
      "Comprehensive wind resource assessment, turbine layout optimization, and operational consulting for onshore and offshore wind farms.",
    image: windImg,
    stats: "150+ MW Wind",
    color: "text-accent",
  },
  {
    icon: Layers,
    title: "Hybrid Plant Design",
    description:
      "Integrated solar-wind-storage hybrid plant engineering that maximizes grid reliability and minimizes levelized cost of energy.",
    image: hybridImg,
    stats: "50+ Hybrid Sites",
    color: "text-primary",
  },
  {
    icon: Camera,
    title: "Drone Thermography",
    description:
      "Precision aerial thermal inspections using FLIR-equipped drones to detect hotspots, microcracks, and performance anomalies across your solar fleet.",
    image: droneImg,
    stats: "98% Detection Rate",
    color: "text-accent",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.2, 0, 0, 1],
      }}
      className="group card-surface overflow-hidden hover-glow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border">
            <Icon size={20} className={service.color} />
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="text-xs font-semibold text-foreground/80 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
            {service.stats}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tighter text-foreground text-balance">
            Precision Services for{" "}
            <span className="gradient-text">Renewable Assets</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[55ch]">
            From feasibility studies to operational optimization, we deliver
            data-driven solutions across the renewable energy lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
