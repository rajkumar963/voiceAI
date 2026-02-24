import { ArrowRight, Mic } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-8 animate-float">
            <Mic className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-white">Start Building</span>
            <br />
            <span className="text-gradient">Your Voice Agent</span>
            <br />
            <span className="text-gradient-white">Today</span>
          </h2>

          <p className="text-muted-foreground text-xl mb-10 leading-relaxed max-w-xl mx-auto">
            Join 500,000+ developers already building the future of voice interfaces.
            Free to start, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all animate-pulse-glow">
              <span>Get Started — It's Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 rounded-full border border-border bg-muted/10 text-foreground font-medium text-base hover:border-primary/30 transition-all">
              Talk to Sales
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            10,000 free characters per month · No credit card needed · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
