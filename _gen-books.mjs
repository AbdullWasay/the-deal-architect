/** One-off generator: node _gen-books.mjs > _books-fragment.html — paste fragment into index or delete after */
const books = [
  ["THE POWER TO INFLUENCE", "Why Some People Walk Into Rooms and Change Everything", "A powerful book exploring the psychology of influence, leadership, confidence, communication, and strategic presence. It teaches readers how to become unforgettable voices in business, leadership, and society."],
  ["BEFORE YOU SPEAK, YOU LEAD", "The Silent Psychology of Influence", "This book teaches how body language, confidence, emotional intelligence, timing, and perception shape leadership before a single word is spoken."],
  ["THE ROOM DOESN'T IGNORE POWER", "How to Command Respect Without Begging for Attention", "A bold leadership guide showing readers how to command environments, negotiations, meetings, and opportunities through authority, confidence, and emotional control."],
  ["THE ART OF BEING TAKEN SERIOUSLY", "Influence, Perception and Executive Presence", "This book explains how perception shapes opportunity and teaches readers how to position themselves to be respected, trusted, and valued in business and leadership."],
  ["SPEAK LIKE A MAN WHO HAS ALREADY WON", "The Psychology of Conviction and Influence", "A transformational communication book teaching how certainty, conviction, and confidence influence negotiations, leadership, opportunities, and success."],
  ["THE AFRICAN ADVANTAGE", "Why the Next Billion-Dollar Opportunities Will Rise From Africa", "A visionary book positioning Africa as the world's next economic frontier while exploring entrepreneurship, innovation, agriculture, real estate, technology, and leadership."],
  ["THINK LIKE A DEAL MAKER", "The Hidden Psychology Behind Big Opportunities", "A strategic business and negotiation book revealing how successful people identify opportunities, structure partnerships, negotiate deals, and build influence."],
  ["THE BUSINESS OF BEING BELIEVED", "Why Trust Is the New Currency", "This book explores branding, credibility, trust-building, and reputation management in business, leadership, and entrepreneurship."],
  ["FROM SURVIVAL TO SIGNIFICANCE", "The African Entrepreneur's Journey to Wealth and Legacy", "A deeply motivational book helping Africans transition from survival thinking into wealth creation, legacy building, and strategic entrepreneurship."],
  ["THE WEALTH MINDSET OF NATIONS", "Why Some Countries Prosper and Others Stay Dependent", "A thought-provoking exploration of leadership, culture, productivity, systems, economics, and the mindset behind national prosperity."],
  ["LEADERS EAT PRESSURE", "Why Responsibility Creates Greatness", "A leadership philosophy book teaching resilience, emotional endurance, accountability, and how pressure shapes extraordinary leaders."],
  ["THE BURDEN OF GREATNESS", "What It Really Costs to Lead", "This book explores sacrifice, criticism, loneliness, discipline, and the hidden emotional realities behind leadership and success."],
  ["CLARITY BUILDS EMPIRES", "How Great Leaders Think, Decide and Execute", "A strategic leadership guide focused on decision-making, execution, communication, focus, and organizational growth."],
  ["PEOPLE FOLLOW VISION", "The Leadership Psychology Behind Movements", "A transformational leadership book showing why people follow conviction, mission, purpose, and emotionally compelling leadership."],
  ["THE DISCIPLINE TO WIN", "Why Talent Alone Never Changes Lives", "A practical guide on consistency, systems, focus, discipline, and the habits required for sustainable success."],
  ["GOD BUILDS THROUGH PEOPLE", "Faith, Business and the Assignment of Leadership", "A faith-driven leadership book showing how business, influence, and leadership can become tools for national transformation and kingdom impact."],
  ["THE JOSEPH PRINCIPLE", "From Rejection to National Influence", "Inspired by the story of Joseph, this book teaches resilience, preparation, wisdom, leadership, and rising through adversity."],
  ["THE MARKETPLACE ANOINTING", "Why God Needs Leaders Outside the Church", "A powerful book challenging Christians to view business, government, entrepreneurship, and leadership as platforms for ministry and transformation."],
  ["PRAYERS OF A BUSINESS LEADER", "Spiritual Wisdom for Building Vision, Wealth and Legacy", "A spiritual and practical guide combining leadership insights, prayers, biblical wisdom, and entrepreneurial principles."],
  ["KINGDOM THINKING FOR AFRICAN LEADERS", "Faith-Driven Principles for National Transformation", "A blueprint connecting leadership, governance, entrepreneurship, integrity, and faith-based nation-building principles."],
  ["THE AFRICAN WHO THINKS DIFFERENTLY", "Why Visionaries Are Misunderstood Before They Are Celebrated", "A deeply philosophical and inspirational book about innovation, courage, criticism, vision, and transformational thinking in African environments."],
  ["BUILT FOR MORE", "The Psychology of Vision, Growth and Expansion", "A motivational and transformational book helping readers break mental limitations and embrace bigger visions for their lives and futures."],
  ["THE FUTURE BELONGS TO THE BOLD", "Leadership Lessons for the Next Generation of Africans", "An empowering leadership book designed to inspire African youth toward ownership, innovation, courage, leadership, and global competitiveness."],
  ["THE EDDIE MUTALE PRINCIPLES", "Timeless Lessons on Influence, Wealth, Leadership and Legacy", "The signature legacy book consolidating Dr. Eddie Mutale's philosophies, leadership frameworks, negotiation principles, business strategies, faith insights, and transformational lessons for generations to come."],
];

const pad = (i) => String(i).padStart(2, "0");
let out = "";
for (let i = 0; i < books.length; i++) {
  const [title, tag, desc] = books[i];
  out += `
        <article class="book-card group relative flex flex-col overflow-hidden hairline-border bg-background/90 p-8 backdrop-blur-md transition-[transform,box-shadow,border-color,background-color,backdrop-filter] duration-700 ease-out hover:-translate-y-1 hover:border-gold/35 hover:bg-card hover:shadow-[0_28px_80px_-24px_rgba(212,175,55,0.22)] md:p-10">
          <div class="absolute inset-y-3 left-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true"></div>
          <div class="flex flex-col gap-5 sm:flex-row sm:gap-8 lg:items-start">
            <span class="shrink-0 font-mono text-xs tabular-nums text-gold/50 transition-colors duration-500 group-hover:text-gold/80">${pad(i + 1)}</span>
            <div class="min-w-0 flex-1">
              <h3 class="font-display text-xl font-light leading-tight tracking-tight text-foreground sm:text-2xl md:text-[1.35rem] lg:text-[1.5rem]">${title}</h3>
              <p class="mt-2 font-display text-base italic leading-snug text-gold/85 md:text-lg">${tag}</p>
              <p class="mt-4 text-[10px] tracking-luxury uppercase text-muted-foreground">Written by Dr. Eddie Mutale</p>
              <p class="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">${desc}</p>
            </div>
          </div>
        </article>`;
}
console.log(out);
