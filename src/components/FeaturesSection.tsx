import { Mic, Zap, Globe, Code2, Phone, Brain, Lock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Ultra-Realistic TTS",
    desc: "Generate speech indistinguishable from human voices with sub-500ms latency for real-time applications.",
    color: "hsl(174 100% 50%)",
    tag: "Core",
  },
  {
    icon: Globe,
    title: "70+ Languages",
    desc: "Native-quality speech synthesis across 70 languages including regional dialects and accents.",
    color: "hsl(142 76% 52%)",
    tag: "Global",
  },
  {
    icon: Phone,
    title: "Voice Agents API",
    desc: "Deploy autonomous voice AI agents for phone calls, IVR systems, and customer service automation.",
    color: "hsl(217 91% 60%)",
    tag: "Agents",
  },
  {
    icon: Zap,
    title: "< 200ms Latency",
    desc: "Stream audio in real-time with our WebSocket API — imperceptibly fast for live conversations.",
    color: "hsl(35 100% 55%)",
    tag: "Performance",
  },
  {
    icon: Brain,
    title: "Voice Cloning",
    desc: "Clone any voice in under 60 seconds from a short audio sample with state-of-the-art fidelity.",
    color: "hsl(280 80% 65%)",
    tag: "AI",
  },
  {
    icon: Code2,
    title: "Developer-First API",
    desc: "REST & WebSocket APIs with SDKs for Python, TypeScript, React, and more. Ship in minutes.",
    color: "hsl(0 80% 60%)",
    tag: "Dev",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    desc: "SOC 2 Type II, HIPAA compliant with end-to-end encryption and private cloud deployment options.",
    color: "hsl(174 100% 50%)",
    tag: "Security",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Monitor usage, performance, and costs in real-time with granular insights and alerting.",
    color: "hsl(142 76% 52%)",
    tag: "Insights",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Platform Features</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-white">Everything You Need</span>
            <br />
            <span className="text-gradient">to Build Voice AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete voice AI infrastructure — from synthesis to agents — 
            built for developers who ship at scale.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group surface-card rounded-2xl p-6 hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1"
                style={{
                  ["--hover-color" as string]: feature.color,
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    background: feature.color + "15",
                    border: `1px solid ${feature.color}30`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>

                {/* Tag */}
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{
                    background: feature.color + "10",
                    color: feature.color,
                    border: `1px solid ${feature.color}25`,
                  }}
                >
                  {feature.tag}
                </span>

                <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
