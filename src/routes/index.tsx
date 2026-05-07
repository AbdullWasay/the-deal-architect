import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import worldMap from "@/assets/world-map.jpg";
import portrait from "@/assets/eddie-portrait.jpg";
import speaking from "@/assets/eddie-speaking.jpg";
import event from "@/assets/eddie-event.jpg";
import pointing from "@/assets/eddie-pointing.jpg";
import footerPortraitOne from "@/assets/1983.jpg";
import footerPortraitTwo from "@/assets/6641.jpg";
import showreelVideo from "@/assets/5077.mp4";
import {
  Handshake, Network, Globe2, Crown, Target, TrendingUp,
  Lightbulb, GraduationCap, Briefcase, Eye, BookOpen, Plane,
  Linkedin, Instagram, Facebook, Twitter, Mail, MapPin, ArrowRight,
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

const knownForRows = [
  knownFor.slice(0, 3),
  knownFor.slice(3, 6),
  knownFor.slice(6, 9),
  knownFor.slice(9, 12),
];

const philosophyCards = [
  { n: "01", title: "Psychology", desc: "Reading rooms before words are spoken." },
  { n: "02", title: "Leverage", desc: "Knowing where the real power sits." },
  { n: "03", title: "Timing", desc: "Acting precisely when momentum aligns." },
  { n: "04", title: "Communication", desc: "Strategic clarity. Executive precision." },
  { n: "05", title: "Confidence", desc: "Earned through repetition and mastery." },
  { n: "06", title: "Execution", desc: "Where vision becomes signed reality." },
];

const globalNodes = [
  { city: "New York", x: 16, y: 38 },
  { city: "Sao Paulo", x: 23, y: 70 },
  { city: "London", x: 50, y: 28 },
  { city: "Lagos", x: 50, y: 52 },
  { city: "Lusaka", x: 56, y: 64 },
  { city: "Dubai", x: 62, y: 42 },
  { city: "Singapore", x: 76, y: 54 },
  { city: "Hong Kong", x: 79, y: 43 },
  { city: "Tokyo", x: 86, y: 37 },
] as const;

const globalConnections: Array<[number, number]> = [
  [0, 2], [0, 3], [1, 3], [2, 4], [2, 5], [4, 6], [5, 6], [6, 7], [7, 8], [3, 4],
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
        <div className="pointer-events-none absolute right-6 top-32 hidden w-[24rem] overflow-hidden hairline-border lg:block">
          <img
            src={footerPortraitOne}
            alt="Dr. Eddie Mutale at a strategic event"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
        </div>

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
            Dr. Eddie Mutale is an internationally minded African businessman, strategist, author,
            negotiator, and visionary known for structuring opportunities, building strategic
            relationships, inspiring entrepreneurs, and closing transformational deals across global markets.
          </p>
        </div>

        <div className="animate-fade-up delay-500 mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="group inline-flex items-center justify-center gap-3 bg-gold-gradient px-8 py-4 text-xs tracking-luxury uppercase text-primary-foreground transition-all shadow-gold">
            Book a Strategic Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#about" className="inline-flex items-center justify-center gap-3 border border-gold/60 px-8 py-4 text-xs tracking-luxury uppercase text-gold transition-all hover:bg-gold/10">
            Explore My Journey
          </a>
        </div>

        <div className="animate-fade-in delay-700 mt-20 w-full border-t border-gold/20 pt-8">
          <div className="grid w-full grid-cols-2 gap-px bg-gold/15 md:grid-cols-4">
            {[["60+", "Nations"], ["∞", "Possibilities"], ["1", "Vision"], ["0", "Limits"]].map(([n, l]) => (
              <div key={l} className="bg-background px-6 py-7 text-center">
                <div className="font-display text-4xl text-gold md:text-5xl">{n}</div>
                <div className="mt-2 text-[10px] tracking-luxury uppercase text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
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
          <div className="glass-dark max-w-2xl px-8 py-6">
            <p className="font-display text-2xl italic leading-snug text-gold md:text-3xl">
              "Opportunities do not change lives. Executed strategies do."
            </p>
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
        <div className="relative mx-auto aspect-video w-full max-w-7xl overflow-hidden bg-black hairline-border">
          <video
            src={showreelVideo}
            className="h-full w-full object-contain"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={event}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/30" />
          <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-20" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-gold">Featured Showreel</div>
              <div className="mt-2 font-display text-xl italic text-foreground md:text-3xl">Moments. Movements. Mastery.</div>
            </div>
            <div className="hidden md:block text-right">
              <div className="font-mono text-xs text-gold/70">Live Reel</div>
              <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">Now Playing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("expertise-row-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

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

        <div className="mt-20 space-y-px">
          {knownForRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
              className="expertise-row grid gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-3"
              style={{ transitionDelay: `${rowIndex * 0.16}s` }}
            >
              {row.map(({ icon: Icon, label }) => (
                <div key={label} className="group bg-background p-10 transition-all duration-500 hover:bg-card">
                  <Icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
                  <div className="mt-6 font-display text-2xl text-foreground">{label}</div>
                  <div className="mt-3 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </div>
              ))}
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

function Philosophy() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 grain">
      <div className="absolute inset-0 bg-radial-gold opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel num="04"><span className="mx-auto">The Philosophy</span></SectionLabel>
          <h2 className="mt-8 font-display text-5xl font-light leading-tight md:text-7xl">
            The Deal Closer <span className="text-gradient-gold italic">Philosophy</span>
          </h2>
          <p className="mt-10 font-display text-3xl italic leading-snug text-foreground/90 md:text-5xl">
            Most people do not fail because opportunities do not exist.
          </p>
          <div className="mx-auto mt-14 h-px w-32 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <p className="mt-10 text-[11px] tracking-luxury uppercase text-gold">They fail because</p>
          <div className="mt-10 grid gap-x-16 gap-y-5 text-left sm:grid-cols-2">
            {[
              "They cannot position properly",
              "They cannot negotiate effectively",
              "They cannot structure opportunities",
              "They cannot build the right relationships",
              "They cannot execute consistently",
              "They lack strategic patience",
            ].map((item) => (
              <p key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground md:text-xl">
                <span className="mt-4 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <p className="mt-10 text-center text-[11px] tracking-luxury uppercase text-gold">Closing Deals Is Not Luck</p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-px border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyCards.map(({ n, title, desc }) => (
            <div
              key={n}
              className="group bg-background px-6 py-7 transition-all duration-500 hover:bg-card hover:shadow-[0_0_45px_rgba(212,175,55,0.18)] md:px-7 md:py-8"
            >
              <span className="font-mono text-[11px] tracking-luxury text-gold/60">{n}</span>
              <h3 className="mt-4 pb-1 font-display text-[2rem] italic leading-[1.08] text-gradient-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:drop-shadow-[0_0_16px_rgba(212,175,55,0.45)] md:text-[2.3rem]">
                {title}
              </h3>
              <div className="mt-3 h-px w-12 bg-gold/60" />
              <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-muted-foreground md:text-base">{desc}</p>
            </div>
          ))}
          </div>
        <div className="mt-14 text-center">
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

          <div className="relative aspect-[16/10] overflow-hidden bg-black/70">
            <img src={worldMap} alt="Global strategic network map" className="world-map-pan h-full w-full object-cover opacity-35" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70" />
            <div className="absolute inset-0 bg-radial-gold opacity-35" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {globalConnections.map(([a, b], idx) => {
                const from = globalNodes[a];
                const to = globalNodes[b];
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    className="world-map-line"
                    style={{ animationDelay: `${idx * 0.18}s` }}
                  />
                );
              })}
            </svg>

            {globalNodes.map((node, idx) => (
              <div
                key={node.city}
                className="world-map-node"
                style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${idx * 0.2}s` }}
              >
                <span className="world-map-dot" />
                <span className="world-map-label">{node.city}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <img
              src={footerPortraitOne}
              alt="Dr. Eddie Mutale networking event"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <img
              src={footerPortraitTwo}
              alt="Dr. Eddie Mutale strategic conversation"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const serviceRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-item-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    serviceRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div>
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
          </div>

          <div className="lg:col-span-7">
            <ul className="relative divide-y divide-gold/15 border-y border-gold/15">
              {services.map((s, i) => (
                <li
                  key={s}
                  ref={(el) => {
                    serviceRefs.current[i] = el;
                  }}
                  className="service-item group flex items-center bg-background py-6 transition-all hover:pl-4 lg:sticky lg:top-28"
                  style={{ transitionDelay: `${i * 0.06}s`, zIndex: i + 1 }}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-gold/50">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-2xl text-foreground transition-colors group-hover:text-gold md:text-3xl">{s}</span>
                  </div>
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
    <section className="relative overflow-hidden py-20 lg:py-32 grain">
      <div className="absolute inset-0">
        <img src={pointing} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
        <blockquote className="mx-auto mt-0 max-w-6xl">
          <span className="font-display text-6xl text-gold/60 leading-none">"</span>
          <p className="mt-2 font-display text-[1.7rem] font-light italic leading-[1.22] text-foreground md:text-[2.3rem] lg:text-[2.55rem]">
            I believe Africa does not lack intelligence or opportunity. What we lack is bold execution, strategic thinking, strong positioning, and leaders willing to{" "}
            <span className="text-gradient-gold">think globally.</span>
          </p>
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4">
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

        <a href="#contact" className="mt-14 inline-flex items-center gap-3 bg-gold-gradient px-12 py-5 text-xs tracking-luxury uppercase text-primary-foreground transition-all shadow-gold">
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
    <footer id="contact" className="relative overflow-hidden border-t border-gold/20 bg-onyx py-24 lg:py-32">
      <div className="absolute inset-0 opacity-20">
        <img src={footerPortraitTwo} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/95 via-onyx/90 to-onyx" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-[10px] tracking-luxury uppercase text-gold">Contact</div>
            <h3 className="mt-6 font-display text-5xl font-light leading-tight md:text-7xl">
              Let’s Close the <span className="text-gradient-gold italic">Next Big Deal.</span>
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              For strategic advisory, executive consulting, leadership engagements, or high-level collaborations,
              begin with a direct conversation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <a
              href="mailto:info@dreddiemutale.com"
              className="group hairline-border bg-background/50 p-7 transition-all hover:bg-card/80"
            >
              <Mail className="h-5 w-5 text-gold" strokeWidth={1.6} />
              <p className="mt-5 text-[10px] tracking-luxury uppercase text-gold">Email</p>
              <p className="mt-2 text-base text-foreground transition-colors group-hover:text-gold">info@dreddiemutale.com</p>
            </a>

            <div className="hairline-border bg-background/50 p-7">
              <MapPin className="h-5 w-5 text-gold" strokeWidth={1.6} />
              <p className="mt-5 text-[10px] tracking-luxury uppercase text-gold">Location</p>
              <p className="mt-2 text-base text-foreground">Lusaka, Zambia</p>
            </div>

            <a
              href="https://www.dreddiemutale.com"
              className="group hairline-border bg-background/50 p-7 transition-all hover:bg-card/80"
            >
              <Globe2 className="h-5 w-5 text-gold" strokeWidth={1.6} />
              <p className="mt-5 text-[10px] tracking-luxury uppercase text-gold">Website</p>
              <p className="mt-2 text-base text-foreground transition-colors group-hover:text-gold">www.dreddiemutale.com</p>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:info@dreddiemutale.com"
              className="inline-flex items-center gap-3 bg-gold-gradient px-10 py-4 text-xs tracking-luxury uppercase text-primary-foreground transition-all shadow-gold"
            >
              Start a Strategic Conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 md:flex-row">
            <Monogram />
            <p className="text-[10px] tracking-luxury uppercase text-muted-foreground">
              © {new Date().getFullYear()} Dr. Eddie Mutale · All Rights Reserved
            </p>
          </div>
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
      <PortraitBand />
      <Expertise />
      <Showreel />
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
