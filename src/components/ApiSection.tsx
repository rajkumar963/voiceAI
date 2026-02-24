import { useState } from "react";

const CODE_TABS = ["TypeScript", "Python", "cURL"] as const;

const CODE_SNIPPETS: Record<string, string> = {
  TypeScript: `import { VoiceAI } from '@voiceai/sdk';

const client = new VoiceAI({
  apiKey: process.env.VOICEAI_API_KEY,
});

// Generate speech in real-time
const stream = await client.speech.stream({
  text: "Hello! I'm your AI voice assistant.",
  voice: "aria-conversational",
  language: "en",
  speed: 1.0,
});

// Stream to audio output
for await (const chunk of stream) {
  audioOutput.write(chunk);
}`,
  Python: `from voiceai import VoiceAI
import asyncio

client = VoiceAI(api_key="YOUR_API_KEY")

async def speak():
    # Stream voice synthesis
    async for chunk in client.speech.stream(
        text="Hello! I'm your AI voice assistant.",
        voice="aria-conversational",
        language="en",
    ):
        audio_output.write(chunk)

asyncio.run(speak())`,
  cURL: `curl -X POST https://api.voiceai.dev/v1/speech/stream \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello! I am your AI voice assistant.",
    "voice": "aria-conversational",
    "language": "en",
    "stream": true
  }' \\
  --output audio.mp3`,
};

export default function ApiSection() {
  const [activeTab, setActiveTab] = useState<string>("TypeScript");

  return (
    <section id="api" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
              <span className="text-xs font-medium text-secondary tracking-wider uppercase">Developer API</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-white">Ship Voice AI</span>
              <br />
              <span className="text-gradient">in Minutes</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our API is designed for developers who move fast. 
              Simple primitives, powerful defaults, and first-class streaming support.
            </p>

            <div className="space-y-4">
              {[
                { label: "REST & WebSocket APIs", desc: "Full streaming support with sub-200ms TTFB" },
                { label: "Official SDKs", desc: "TypeScript, Python, Go, and React web SDK" },
                { label: "Webhooks & Events", desc: "Real-time event streaming for call analytics" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground text-sm">{item.label}</div>
                    <div className="text-muted-foreground text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                View Docs
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/40 transition-colors">
                API Reference
              </button>
            </div>
          </div>

          {/* Right: Code block */}
          <div className="surface-card rounded-2xl overflow-hidden border border-border">
            {/* Tab bar */}
            <div className="flex items-center gap-1 px-4 py-3 bg-muted/30 border-b border-border">
              <div className="flex gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
              </div>
              {CODE_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
                    activeTab === tab
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code */}
            <pre className="p-6 text-xs leading-relaxed overflow-x-auto font-mono">
              <code>
                {CODE_SNIPPETS[activeTab].split("\n").map((line, i) => {
                  const highlighted = line
                    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    .replace(/('.*?'|".*?")/g, '<span class="text-secondary">$1</span>')
                    .replace(/\b(const|import|from|await|async|for|of|new)\b/g, '<span class="text-neon-blue">$1</span>')
                    .replace(/\b(true|false|null)\b/g, '<span class="text-yellow-400">$1</span>')
                    .replace(/(\/\/[^<]*)$/g, '<span class="text-muted-foreground">$1</span>');
                  return (
                    <div key={i} className="flex">
                      <span className="w-8 text-muted-foreground/40 select-none flex-shrink-0 text-right mr-4">
                        {i + 1}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: highlighted }} />
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
