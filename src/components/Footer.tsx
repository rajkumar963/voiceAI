import { Github, Twitter, Linkedin, Zap } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Text to Speech", "Speech to Text", "Voice Cloning", "Voice Agents", "Translation"],
  Developers: ["API Reference", "SDKs & Libraries", "Webhooks", "Changelog", "Status"],
  Company: ["About", "Blog", "Careers", "Press Kit", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR", "HIPAA"],
};

const LOGOS = ["Intuit", "Unity", "Delphi", "NY Life", "Housecall Pro", "Cherry", "OpenAI", "Stripe"];

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Logo marquee */}
      <div className="py-10 border-b border-border overflow-hidden">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Trusted by teams at
        </p>
        <div className="flex overflow-hidden">
          <div className="flex gap-12 animate-scroll-logos whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="text-muted-foreground/50 font-display font-semibold text-lg hover:text-muted-foreground transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Voice<span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              The most powerful voice AI platform for developers building the next generation of voice applications.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 VoiceAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
