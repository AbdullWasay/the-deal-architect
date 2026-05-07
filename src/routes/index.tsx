import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import worldMap from "@/assets/world-map.jpg";
import portrait from "@/assets/eddie-portrait.jpg";
import speaking from "@/assets/eddie-speaking.jpg";
import event from "@/assets/eddie-event.jpg";
import radio from "@/assets/eddie-radio.jpg";
import pointing from "@/assets/eddie-pointing.jpg";
import {
  Handshake, Network, Globe2, Crown, Target, TrendingUp,
  Lightbulb, GraduationCap, Briefcase, Eye, BookOpen, Plane,
  Linkedin, Instagram, Facebook, Twitter, Mail, MapPin, ArrowRight, Play,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Eddie Mutale — The Deal Closer | Global Business Strategist" },
      { name: "description", content: "Dr. Eddie Mutale, The Deal Closer — closing strategic deals across 60+ nations globally. Visionary, negotiator, author, and strategist." },
      { property: "og:title", content: "Dr. Eddie Mutale — The Deal Closer" },
      { property: "og:description", content: "Closing strategic deals across 60+ nations globally. Visionary. Negotiator. Author. Strategist." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dr. Eddie Mutale",
          jobTitle: "Business Strategist, Negotiator, Author",
          description: "The Deal Closer — closing strategic deals across 60+ nations globally.",
          url: "https://www.dreddiemutale.com",
          address: { "@type": "PostalAddress", addressLocality: "Lusaka", addressCountry: "Zambia" },
          email: "info@dreddiemutale.com",
        }),
      },
    ],
  }),
  component: Home,
});

const knownFor = [
  { icon: Handshake, label: "High-Level Negotiations" },
  { icon: Network, label: "Strategic Partnerships" },
  { icon: Globe2, label: "Global Deal Structuring" },
  { icon: Crown, label: "Executive Leadership" },
  { icon: Target, label: "Business Positioning" },
  { icon: TrendingUp, label: "Investor Engagement" },
  { icon: Lightbulb, label: "Opportunity Creation" },
  { icon: GraduationCap, label: "Entrepreneurial Mentorship" },
  { icon: Briefcase, label: "Corporate Strategy" },
  { icon: Eye, label: "Visionary Thinking" },
  { icon: BookOpen, label: "Thought Leadership" },
  { icon: Plane, label: "International Networking" },
];

const services = [
  "Strategic Advisory", "Executive Consulting", "Leadership Platforms",
  "Business Development Strategy", "Entrepreneurial Coaching", "Corporate Strategy Sessions",
  "Investment Discussions", "International Collaborations", "Thought Leadership Platforms",
  "Global Business Conversations", "Mentorship Sessions", "Strategic Partnerships",
];

function Monogram() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center border border-gold/40">
        <span className="font-display text-lg text-gold">EM</span>
      </div>
      <div className="leading-tight">
        <div className="text-[10px] tracking-luxury text-gold uppercase">Dr. Eddie Mutale</div>
        <div className="text-[9px] tracking-executive text-muted-foreground uppercase">The Deal Closer</div>
      </div>
    </div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"], ["Expertise", "#expertise"], ["Author", "#author"],
    ["Global", "#global"], ["Connect", "#contact"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Monogram />
        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-xs tracking-executive uppercase text-muted-foreground transition-colors hover:text-gold">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[10px] tracking-luxury uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground">
          Book Session <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </header>
  );
}

function SectionLabel({ children, num }: { children: React.ReactNode; num: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-xs text-gold/60">{num}</span>
      <span className="h-px w-12 bg-gold/40" />
      <span className="text-[10px] tracking-luxury uppercase text-gold">{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden grain">
      <div className="absolute inset-0 animate-ken-burns">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-60" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-radial-gold" />

      <Nav />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-12">
        <div className="animate-fade-up">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-16 bg-gold" />
            <span className="text-[10px] tracking-luxury uppercase text-gold">Global Business Strategist</span>
          </div>
        </div>

        <h1 className="animate-fade-up delay-100 font-display text-[clamp(3rem,9vw,8.5rem)] font-light leading-[0.95] text-foreground">
          Dr. Eddie<br />
          <span className="text-gradient-gold italic">Mutale</span>
        </h1>

        <div className="animate-fade-up delay-200 mt-8 max-w-3xl">
          <p className="font-display text-2xl font-light italic text-gold/90 md:text-4xl">
            The Deal Closer
          </p>
          <p className="mt-4 text-sm tracking-executive uppercase text-muted-foreground md:text-base">
            Closing Strategic Deals Across 60+ Nations Globally
          </p>
        </div>

        <div className="animate-fade-up delay-300 mt-10 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Visionary. Negotiator. Author. Strategist. Builder of Possibilities.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground/90 md:text-base">
            An internationally minded African businessman known for structuring opportunities,
            building strategic relationships, inspiring entrepreneurs, and closing transformational
            deals across global markets.
          </p>
        </div>

        <div className="animate-fade-up delay-500 mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs tracking-luxury uppercase text-primary-foreground transition-all hover:bg-gold-bright shadow-gold">
            Book a Strategic Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#about" className="inline-flex items-center justify-center gap-3 border border-gold/60 px-8 py-4 text-xs tracking-luxury uppercase text-gold transition-all hover:bg-gold/10">
            Explore My Journey
          </a>
        </div>

        <div className="animate-fade-in delay-700 mt-20 grid grid-cols-3 gap-8 border-t border-gold/20 pt-8 max-w-2xl">
          {[["60+", "Nations"], ["∞", "Possibilities"], ["1", "Vision"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-gold md:text-4xl">{n}</div>
              <div className="mt-1 text-[10px] tracking-luxury uppercase text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortraitBand() {
  return (
    <section className="relative w-full overflow-hidden bg-onyx">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <img src={portrait} alt="Dr. Eddie Mutale portrait" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/30" />
        <div className="absolute inset-0 bg-radial-gold opacity-30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-16 bg-gold" />
              <span className="text-[10px] tracking-luxury uppercase text-gold">The Man Behind The Deals</span>
            </div>
            <h2 className="font-display text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl">
              Presence.<br />
              <span className="text-gradient-gold italic">Precision.</span><br />
              Power.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              An executive presence cultivated through decades of strategic engagement —
              where every word, every gesture, every silence carries intent.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="glass-dark px-6 py-4 max-w-sm">
            <p className="font-display text-base italic text-gold">"Opportunities do not change lives. Executed strategies do."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-gradient-dark py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative overflow-hidden">
                <img src={speaking} alt="Dr. Eddie Mutale" className="w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="mt-6 hairline-border p-6">
                <p className="font-display text-xl italic text-gold leading-snug">
                  "Opportunities do not change lives. Executed strategies do."
                </p>
                <p className="mt-3 text-[10px] tracking-luxury uppercase text-muted-foreground">— Dr. Eddie Mutale</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionLabel num="01">About</SectionLabel>
            <h2 className="font-display text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
              A globally minded <span className="text-gradient-gold italic">opportunity architect.</span>
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Dr. Eddie Mutale is a globally minded African businessman, strategist, author,
                negotiator, and opportunity architect recognized for his ability to transform
                ambitious ideas into structured opportunities and meaningful results.
              </p>
              <p>
                Widely known as <span className="text-gold">"The Deal Closer,"</span> he has built
                a reputation around strategic thinking, business positioning, negotiation,
                leadership, and opportunity creation across multiple industries and international markets.
              </p>
              <p>
                His growing influence, collaborations, strategic engagements, and networks
                spanning more than <span className="text-gold">60 nations globally</span> continue
                to position him as a modern voice in African entrepreneurship, executive leadership,
                and global business strategy.
              </p>
              <p>
                Beyond business, Dr. Mutale is a passionate author and thought leader who has
                written extensively on entrepreneurship, leadership, strategic thinking, wealth
                creation, execution, innovation, and business transformation.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px bg-gold/20 sm:grid-cols-4">
              {["Vision", "Strategy", "Execution", "Leadership", "Influence", "Capital", "Global", "Impact"].map((p) => (
                <div key={p} className="bg-background px-4 py-5 text-center">
                  <div className="text-xs tracking-executive uppercase text-gold">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 lg:py-32 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] tracking-luxury uppercase text-gold">In Motion</span>
            <span className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
            The Deal Closer <span className="text-gradient-gold italic">in Motion</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Strategic engagements, keynote moments, and negotiation rooms — captured.
          </p>
        </div>
      </div>

      <div className="relative mt-16 w-full px-6 lg:px-12">
        <div className="relative mx-auto aspect-video w-full max-w-7xl overflow-hidden hairline-border">
          <img src={event} alt="Dr. Eddie Mutale showreel" className="h-full w-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
          <div className="absolute inset-0 bg-radial-gold opacity-30" />

          <button type="button" aria-label="Play showreel" className="group absolute inset-0 flex items-center justify-center">
            <span className="absolute h-32 w-32 rounded-full border border-gold/40 animate-pulse-glow" />
            <span className="absolute h-44 w-44 rounded-full border border-gold/20" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-gold transition-transform duration-500 group-hover:scale-110">
              <Play className="h-7 w-7 fill-current" strokeWidth={0} />
            </span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-gold">Featured Showreel</div>
              <div className="mt-2 font-display text-xl italic text-foreground md:text-3xl">Moments. Movements. Mastery.</div>
            </div>
            <div className="hidden md:block text-right">
              <div className="font-mono text-xs text-gold/70">04:32</div>
              <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">Runtime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative py-32 lg:py-48 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel num="02"><span className="mx-auto">Expertise</span></SectionLabel>
          <h2 className="font-display text-5xl font-light leading-tight md:text-6xl">
            What He Is <span className="text-gradient-gold italic">Known For</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            A spectrum of mastery refined across decades of strategic engagement.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {knownFor.map(({ icon: Icon, label }) => (
            <div key={label} className="group bg-background p-10 transition-all duration-500 hover:bg-card">
              <Icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
              <div className="mt-6 font-display text-2xl text-foreground">{label}</div>
              <div className="mt-3 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section id="author" className="relative bg-card py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <SectionLabel num="03">Author</SectionLabel>
            <h2 className="font-display text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
              Author <span className="text-gold">·</span> Thinker <span className="text-gold">·</span>{" "}
              <span className="text-gradient-gold italic">Visionary</span>
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Dr. Eddie Mutale has written extensively on business, entrepreneurship, leadership,
                strategic thinking, wealth creation, execution, opportunity development, and
                transformational African enterprise.
              </p>
              <p>
                His writings empower individuals, entrepreneurs, and organizations to think bigger,
                execute smarter, negotiate better, and build scalable impact.
              </p>
              <p>
                His thought leadership continues to inspire ambitious thinkers seeking growth,
                innovation, influence, and transformation in a rapidly evolving global economy.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Entrepreneurship", "Leadership", "Strategy", "Wealth Creation", "Execution"].map((t) => (
                <span key={t} className="border border-gold/30 px-4 py-2 text-[10px] tracking-luxury uppercase text-gold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={speaking} alt="Dr. Eddie Mutale speaking" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block">
              <div className="glass-dark p-6 max-w-xs">
                <BookOpen className="h-6 w-6 text-gold" strokeWidth={1} />
                <p className="mt-3 font-display text-lg italic text-foreground">
                  "Think bigger. Execute smarter. Negotiate better."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const dealPillars = [
  { n: "01", title: "Psychology", desc: "Reading rooms before words are spoken." },
  { n: "02", title: "Leverage", desc: "Knowing where the real power sits." },
  { n: "03", title: "Timing", desc: "Acting precisely when momentum aligns." },
  { n: "04", title: "Communication", desc: "Strategic clarity. Executive precision." },
  { n: "05", title: "Confidence", desc: "Earned through repetition and mastery." },
  { n: "06", title: "Execution", desc: "Where vision becomes signed reality." },
];

function Philosophy() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 grain">
      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel num="04"><span className="mx-auto">The Philosophy</span></SectionLabel>
          <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-[11px] tracking-luxury uppercase text-gold">Closing Deals Is Not Luck</p>
          <h2 className="mt-10 font-display text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
            The Six Pillars of <span className="text-gradient-gold italic">The Deal Closer</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-px bg-gold/15 border border-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {dealPillars.map(({ n, title, desc }) => (
            <div key={n} className="group relative bg-background p-10 lg:p-14 transition-all duration-500 hover:bg-card">
              <span className="font-mono text-xs tracking-luxury text-gold/60">{n}</span>
              <h3 className="mt-8 font-display text-4xl italic text-gradient-gold md:text-5xl">{title}</h3>
              <div className="mt-4 h-px w-12 bg-gold/60 transition-all duration-500 group-hover:w-24" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-display text-3xl font-light text-foreground md:text-5xl">
            This philosophy defines <span className="text-gradient-gold italic">Dr. Eddie Mutale.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Global() {
  return (
    <section id="global" className="relative overflow-hidden bg-onyx py-32 lg:py-48">
      <div className="absolute inset-0 opacity-50">
        <img src={worldMap} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/40 to-onyx" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel num="05"><span className="mx-auto">Global Reach</span></SectionLabel>
          <h2 className="font-display text-5xl font-light leading-tight md:text-7xl">
            Building Connections<br />
            <span className="text-gradient-gold italic">Without Borders</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Dr. Eddie Mutale believes that modern business is no longer local. The future
              belongs to globally connected thinkers capable of building relationships, partnerships,
              investments, opportunities, and transformational ecosystems beyond geographical limitations.
            </p>
            <p>
              Through strategic engagements, collaborations, business conversations, leadership
              platforms, and international networking across more than{" "}
              <span className="text-gold">60 countries globally</span>, he continues to position
              himself as an emerging African voice in global entrepreneurship and executive strategy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-gold/15">
            {[
              ["60+", "Nations"], ["6", "Continents"],
              ["∞", "Connections"], ["1", "Vision"],
            ].map(([n, l]) => (
              <div key={l} className="bg-onyx p-10 text-center">
                <div className="font-display text-5xl text-gradient-gold md:text-6xl">{n}</div>
                <div className="mt-3 text-[10px] tracking-luxury uppercase text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel num="06">Engage</SectionLabel>
            <h2 className="font-display text-5xl font-light leading-tight md:text-6xl">
              Speaking, Consulting <span className="text-gradient-gold italic">& Collaborations</span>
            </h2>
            <p className="mt-8 text-muted-foreground md:text-lg">
              Available for select strategic engagements where vision meets execution.
            </p>
            <div className="mt-10 relative aspect-[4/3] overflow-hidden">
              <img src={event} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-gold/15 border-y border-gold/15">
              {services.map((s, i) => (
                <li key={s} className="group flex items-center justify-between py-6 transition-all hover:pl-4">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-gold/50">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-2xl text-foreground transition-colors group-hover:text-gold md:text-3xl">{s}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gold/40 transition-all group-hover:text-gold group-hover:translate-x-2" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 grain">
      <div className="absolute inset-0">
        <img src={pointing} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <SectionLabel num="07"><span className="mx-auto">Manifesto</span></SectionLabel>

        <blockquote className="mt-8">
          <span className="font-display text-7xl text-gold/40 leading-none">"</span>
          <p className="font-display text-3xl font-light italic leading-snug text-foreground md:text-5xl lg:text-6xl">
            I believe Africa does not lack intelligence or opportunity.
          </p>
          <p className="mt-8 font-display text-3xl font-light italic leading-snug text-gradient-gold md:text-5xl lg:text-6xl">
            What we lack is bold execution, strategic thinking, strong positioning, and leaders
            willing to think globally.
          </p>
        </blockquote>

        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gold" />
          <span className="text-[10px] tracking-luxury uppercase text-gold">Dr. Eddie Mutale</span>
          <span className="h-px w-16 bg-gold" />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-card py-32 lg:py-48">
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <SectionLabel num="08"><span className="mx-auto">Connect</span></SectionLabel>
        <h2 className="font-display text-5xl font-light leading-tight md:text-7xl lg:text-8xl">
          Let's Build Something<br />
          <span className="text-gradient-gold italic">Extraordinary.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-muted-foreground md:text-lg">
          Whether you are an entrepreneur, investor, executive, institution, organization, or
          visionary seeking growth, transformation, collaboration, or strategic direction —
          this is where meaningful conversations begin.
        </p>

        <div className="mt-10 flex justify-center gap-x-10 gap-y-2 flex-wrap">
          {["Connect.", "Collaborate.", "Execute."].map((w) => (
            <span key={w} className="font-display text-2xl italic text-gold md:text-3xl">{w}</span>
          ))}
        </div>

        <a href="#contact" className="mt-14 inline-flex items-center gap-3 bg-gold px-12 py-5 text-xs tracking-luxury uppercase text-primary-foreground transition-all hover:bg-gold-bright shadow-gold">
          Let's Connect <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const socials = [
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "X (Twitter)" },
  ];
  return (
    <footer id="contact" className="relative bg-onyx py-24 lg:py-32 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="text-[10px] tracking-luxury uppercase text-gold">Contact</div>
            <h3 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">
              Dr. Eddie<br /><span className="text-gradient-gold italic">Mutale</span>
            </h3>
            <p className="mt-3 font-display text-xl italic text-gold/80">The Deal Closer</p>

            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <a href="mailto:info@dreddiemutale.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                info@dreddiemutale.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
                Lusaka, Zambia
              </div>
              <a href="https://www.dreddiemutale.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Globe2 className="h-4 w-4 text-gold" strokeWidth={1.5} />
                www.dreddiemutale.com
              </a>
            </div>

            <div className="mt-10 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                   className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="hairline-border p-8 lg:p-10">
              <div className="text-[10px] tracking-luxury uppercase text-gold">Strategic Inquiries</div>
              <p className="mt-4 font-display text-2xl text-foreground italic">
                Begin a conversation that creates leverage, structures opportunity, and closes the deal.
              </p>
              <a href="mailto:info@dreddiemutale.com"
                 className="mt-8 inline-flex items-center gap-3 border border-gold px-8 py-4 text-xs tracking-luxury uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground">
                Send a Message <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 relative aspect-video overflow-hidden">
              <img src={radio} alt="" className="h-full w-full object-cover opacity-70" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 md:flex-row">
          <Monogram />
          <p className="text-[10px] tracking-luxury uppercase text-muted-foreground">
            © {new Date().getFullYear()} Dr. Eddie Mutale · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Expertise />
      <Author />
      <Philosophy />
      <Global />
      <Services />
      <Manifesto />
      <CTA />
      <Contact />
    </main>
  );
}
