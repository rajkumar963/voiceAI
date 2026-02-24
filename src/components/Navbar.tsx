import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Voices", href: "#voices" },
  { label: "Pricing", href: "#pricing" },
  { label: "API Docs", href: "#api" },
  { label: "Enterprise", href: "#enterprise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
            <Zap className="w-4 h-4 text-primary" />
            <div className="absolute inset-0 rounded-lg bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display font-700 text-xl text-foreground tracking-tight">
            Voice<span className="text-gradient">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="relative text-sm font-semibold px-5 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all group overflow-hidden">
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 text-sm font-medium border border-border rounded-lg py-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
              Sign In
            </button>
            <button className="flex-1 text-sm font-semibold py-2 rounded-lg bg-primary text-primary-foreground">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
