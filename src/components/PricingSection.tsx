import { Check, Zap, Building2, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for prototyping and personal projects",
    icon: Zap,
    color: "hsl(174 100% 50%)",
    features: [
      "10,000 characters / month",
      "50+ standard voices",
      "3 languages",
      "REST API access",
      "Community support",
      "1 voice clone",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "For teams building production voice applications",
    icon: Crown,
    color: "hsl(142 76% 52%)",
    features: [
      "500,000 characters / month",
      "5,000+ premium voices",
      "70+ languages",
      "WebSocket streaming API",
      "Voice Agents (beta)",
      "10 voice clones",
      "Priority support",
      "Usage analytics",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    desc: "Custom infrastructure for high-volume applications",
    icon: Building2,
    color: "hsl(217 91% 60%)",
    features: [
      "Unlimited characters",
      "Full voice library (10K+)",
      "Private cloud deployment",
      "SLA 99.99% uptime",
      "HIPAA / SOC 2 compliance",
      "Unlimited voice clones",
      "Dedicated account manager",
      "Custom model fine-tuning",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px neon-line opacity-30" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Simple Pricing</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-white">Scale Without</span>{" "}
            <span className="text-gradient">Surprises</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Transparent pricing that grows with you. No hidden fees, no per-seat charges.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative surface-card rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? "border-glow" : ""
                }`}
                style={plan.popular ? { borderColor: plan.color + "50" } : {}}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                    style={{
                      background: plan.color,
                      color: "hsl(220 20% 4%)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: plan.color + "15", border: `1px solid ${plan.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: plan.color + "20" }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                  style={
                    plan.popular
                      ? { background: plan.color, color: "hsl(220 20% 4%)" }
                      : {
                          background: plan.color + "10",
                          color: plan.color,
                          border: `1px solid ${plan.color}30`,
                        }
                  }
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
