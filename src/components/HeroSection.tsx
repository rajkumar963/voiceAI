import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const BARS = Array.from({ length: 40 }, (_, i) => i);
const BAR_CLASSES = ["bar-1", "bar-2", "bar-3", "bar-4", "bar-5", "bar-6", "bar-7", "bar-8"];

const STATS = [
  { value: "300M+", label: "Calls Processed" },
  { value: "10K+", label: "Voices Available" },
  { value: "70+", label: "Languages" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(174 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(174 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wider uppercase">
            Next-gen Voice AI Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-gradient-white block">The Voice API</span>
          <span className="text-gradient block">That Thinks,</span>
          <span className="text-gradient-white block">Speaks & Scales</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Build production-ready voice AI agents with ultra-low latency, 10,000+ expressive voices, 
          multilingual support across 70+ languages — all through a single, powerful API.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all animate-pulse-glow">
            <span>Start Building Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-muted/20 text-foreground font-medium text-base hover:border-primary/40 hover:bg-muted/40 transition-all backdrop-blur-sm">
            <Play className="w-4 h-4 text-primary fill-primary" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Equalizer Visualizer */}
        <div className="relative mx-auto max-w-4xl h-32 flex items-end justify-center gap-[3px] mb-16">
          {BARS.map((i) => (
            <div
              key={i}
              className={`w-2 rounded-t-sm origin-bottom ${BAR_CLASSES[i % BAR_CLASSES.length]}`}
              style={{
                height: `${Math.random() * 60 + 30}%`,
                background: `hsl(${174 - (i / BARS.length) * 32} 100% ${50 + (i % 3) * 5}%)`,
                opacity: 0.7 + (i % 4) * 0.07,
                animationDelay: `${(i * 0.05) % 1.5}s`,
              }}
            />
          ))}
          {/* Center glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-primary/20 blur-2xl rounded-full" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
