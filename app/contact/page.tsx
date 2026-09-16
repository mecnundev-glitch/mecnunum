import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { STUDIO_STATUS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Start a Project // Contact Mecnun",
  description: "Initiate your digital project inquiry, discuss architecture, or schedule a creative technology consultation.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <MecnunCatIcon size={18} />
            <span>{"PROJECT INTAKE // CONTACT"}</span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono">
            START A <span className="text-studio-cyan">PROJECT</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Have an ambitious concept or engineering challenge? Tell us about your project timeline, goals, and scope.
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            {/* Contact Form Placeholder */}
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-studio-lime" />
                <span>Project Inquiry Form</span>
              </h2>

              <form className="mt-6 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-zinc-500 focus:border-studio-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-zinc-500 focus:border-studio-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    PROJECT TYPE
                  </label>
                  <select className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-foreground focus:border-studio-cyan focus:outline-none transition-colors">
                    <option>3D WebGL / Spatial Experience</option>
                    <option>Next.js Full-Stack Web Development</option>
                    <option>Editorial Web Design & Identity</option>
                    <option>Corporate Digital Flagship</option>
                    <option>E-Commerce Platform</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    PROJECT DETAILS & TIMELINE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the project goals, deliverables, and estimated launch window..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-zinc-500 focus:border-studio-cyan focus:outline-none transition-colors"
                  />
                </div>

                <Button variant="accent" size="lg" className="w-full gap-2 font-bold text-black">
                  <Send className="h-4 w-4" />
                  <span>Send Project Transmission</span>
                </Button>
              </form>
            </div>

            {/* Direct Studio Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
              <div>
                <h3 className="text-xl font-bold">Direct Channels</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer direct correspondence or exploratory discussions?
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3.5">
                    <Mail className="h-5 w-5 text-studio-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-zinc-400">EMAIL INQUIRIES</div>
                      <a
                        href="mailto:contact@mecnunum.com"
                        className="text-sm font-semibold text-foreground hover:text-studio-cyan transition-colors"
                      >
                        contact@mecnunum.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="h-5 w-5 text-studio-lime shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-zinc-400">LOCATION</div>
                      <div className="text-sm font-semibold text-foreground">
                        {STUDIO_STATUS.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-studio-lime/20 bg-studio-lime/5">
                <div className="flex items-center gap-2 text-xs font-mono text-studio-lime font-bold">
                  <span className="h-2 w-2 rounded-full bg-studio-lime animate-ping" />
                  <span>{STUDIO_STATUS.badgeText}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Typical response window: within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
