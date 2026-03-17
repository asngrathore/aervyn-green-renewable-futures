const footerLinks = {
  Services: [
    "Solar Plant Consulting",
    "Wind Energy Solutions",
    "Hybrid Plant Design",
    "Drone Thermography",
    "Asset Management",
    "Performance Monitoring",
  ],
  Company: ["About Us", "Careers", "Case Studies", "News & Insights"],
  Resources: [
    "Technical Papers",
    "ROI Calculator",
    "Industry Reports",
    "FAQ",
  ],
};

const Footer = () => (
  <footer className="border-t border-border py-16 lg:py-20">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">
                A
              </span>
            </div>
            <span className="font-display font-semibold text-foreground text-lg">
              Aervyn <span className="text-primary">Green</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Independent renewable energy consulting & technical services for the
            global clean energy transition.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Aervyn Green. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground text-xs hover:text-foreground transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
