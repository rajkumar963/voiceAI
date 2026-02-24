import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

const voices = [
  {
    id: 1,
    name: "Aria",
    tag: "Conversational",
    desc: "Warm and engaging, perfect for customer service",
    gender: "Female",
    color: "hsl(174 100% 50%)",
    bars: [60, 40, 80, 30, 70, 50, 90, 35, 65, 45, 75, 55],
  },
  {
    id: 2,
    name: "Marcus",
    tag: "Professional",
    desc: "Deep, authoritative voice for corporate content",
    gender: "Male",
    color: "hsl(142 76% 52%)",
    bars: [40, 70, 35, 85, 50, 65, 30, 90, 45, 60, 80, 40],
  },
  {
    id: 3,
    name: "Zara",
    tag: "Storytelling",
    desc: "Expressive and dynamic for narratives & media",
    gender: "Female",
    color: "hsl(217 91% 60%)",
    bars: [80, 45, 65, 30, 90, 40, 70, 55, 85, 35, 60, 75],
  },
  {
    id: 4,
    name: "Kai",
    tag: "Energetic",
    desc: "High-energy voice for ads and entertainment",
    gender: "Male",
    color: "hsl(35 100% 55%)",
    bars: [50, 90, 40, 75, 30, 85, 55, 70, 45, 95, 35, 65],
  },
  {
    id: 5,
    name: "Priya",
    tag: "Multilingual",
    desc: "Natural South Asian accent, multilingual pro",
    gender: "Female",
    color: "hsl(280 80% 65%)",
    bars: [70, 35, 85, 50, 60, 40, 80, 30, 75, 55, 90, 45],
  },
  {
    id: 6,
    name: "Ethan",
    tag: "News & Media",
    desc: "Clear, measured tone for broadcasts and reports",
    gender: "Male",
    color: "hsl(0 80% 60%)",
    bars: [45, 60, 30, 80, 55, 70, 35, 75, 50, 85, 40, 65],
  },
];

function WaveformBars({ bars, color, active }: { bars: number[]; color: string; active: boolean }) {
  return (
    <div className="flex items-center gap-[2px] h-8">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full transition-all duration-300"
          style={{
            height: `${active ? h : 30}%`,
            background: active ? color : "hsl(215 20% 35%)",
            animation: active ? `wave-bar ${0.4 + (i % 4) * 0.15}s ease-in-out infinite alternate` : "none",
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function VoicesSection() {
  const [activeVoice, setActiveVoice] = useState<number | null>(null);

  const toggle = (id: number) => setActiveVoice(activeVoice === id ? null : id);

  return (
    <section id="voices" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
            <Volume2 className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-medium text-secondary tracking-wider uppercase">10,000+ Voices</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-white">Voices That Feel</span>{" "}
            <span className="text-gradient">Undeniably Real</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From whispers to broadcasts — choose from thousands of ultra-realistic AI voices 
            or clone your own in seconds.
          </p>
        </div>

        {/* Voice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {voices.map((voice) => {
            const isActive = activeVoice === voice.id;
            return (
              <div
                key={voice.id}
                className={`group surface-card rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-opacity-60 ${
                  isActive ? "border-glow" : "hover:border-muted-foreground/20"
                }`}
                style={isActive ? { borderColor: voice.color + "60" } : {}}
                onClick={() => toggle(voice.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display"
                      style={{
                        background: voice.color + "20",
                        border: `1px solid ${voice.color}40`,
                        color: voice.color,
                      }}
                    >
                      {voice.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{voice.name}</div>
                      <div className="text-xs text-muted-foreground">{voice.gender}</div>
                    </div>
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: voice.color + "15",
                      color: voice.color,
                      border: `1px solid ${voice.color}30`,
                    }}
                  >
                    {voice.tag}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{voice.desc}</p>

                <div className="flex items-center justify-between">
                  <WaveformBars bars={voice.bars} color={voice.color} active={isActive} />
                  <button
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: isActive ? voice.color : voice.color + "15",
                      color: isActive ? "hsl(220 20% 4%)" : voice.color,
                    }}
                  >
                    {isActive ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 px-6 py-3 rounded-full hover:border-primary/60">
            Explore All 10,000+ Voices →
          </button>
        </div>
      </div>
    </section>
  );
}
