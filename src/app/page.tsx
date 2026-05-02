import Image from "next/image";
import step1Img from "../../public/Step 1.jpg";
import step2Img from "../../public/Step 2.jpg";
import step3Img from "../../public/Step 3.jpg";
import hero1Img from "../../public/Hero 1.png";
import hero2Img from "../../public/Hero 2.png";
import {
  BlobBlue,
  BlobCoral,
  SmileDoodle,
  SparkleAccent,
  MagicSparkle,
  BlobLargeCoral,
  BlobLargeBlue,
  BlobLargeYellow,
} from "@/components/layout/ui/Decorations";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  /*
   * BlobBlue viewBox: 151 × 153  → rendered: 170 × 172
   *   scaleX = 170/151 ≈ 1.125   scaleY = 172/153 ≈ 1.125
   * BlobCoral viewBox: 200 × 200 → rendered: 180 × 180
   *   scale = 180/200 = 0.9
   */
  return (
    <section className="relative w-full bg-bg-cream min-h-[90svh] flex items-center justify-center overflow-hidden px-4 py-24 md:py-0">

      {/* ─── Hidden SVG clip-path definitions ─── */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          {/* BlobBlue path scaled from 151×153 viewBox to 155×157 px */}
          <clipPath id="clip-hero-left" clipPathUnits="userSpaceOnUse">
            <path
              transform="scale(1.026, 1.026)"
              d="M91.2.2a7 7 0 0 1 6.2 6.5q.3 9 .2 18.1c0 4.5.3 10-.3 14.4 9-5.3 18.6-10 28-14.7 4.7-2.5 8.5 0 10.8 4.3q6.9 13 13.5 26.4a8 8 0 0 1 0 5.2c-2 4-9 6.8-12.7 8.7-4.7 2.4-9.5 5.2-14 7.1 7.7 4.4 16.4 8.3 24 13.1.8.6 2.3 2.3 2.6 3.3.5 1.5.6 4-.2 5.4q-4 8.3-8.6 16.4c-1.9 3.3-4.7 9.4-7 12.2q-1 1.4-2.6 2c-4.3 1.6-9.5-2-13.3-4.1l-12.1-6.5q-4.1-2.4-8.4-4.5.3 2 .2 4c0 9.4.3 19-.2 28.3-.2 3.4-3.4 6-6.6 6.1-4.6.3-9.6.1-14.2.1H59.4c-3-.3-6-2.5-6.5-5.7-.5-4-.3-8.4-.3-12.4V113l-.4.3c-.8.5-2.2 1-3 1.6l-9.6 5-9 4.7q-3 1.8-6.4 3.2a7 7 0 0 1-9.3-3.2q-5.4-10.1-10.6-20.1C3 102 1.2 99 .3 96.3a7 7 0 0 1 0-3.8c1-4.3 7.5-6.5 11-8.5 5-2.8 10.7-5.2 15.7-8v-.3c-1.2-.8-4-2.1-5.3-2.9l-11.3-6c-2.6-1.3-5.2-2.4-7.5-4.3C.8 61-.5 57.4.6 55c1.7-4.3 4.2-8.4 6.4-12.5l4.8-9.1c1.9-3.5 4.1-9.2 8.3-10.1 3.6-.8 6.1 1.1 9 2.7l9.7 5.2 6.8 3.7c2.2 1.2 5 2.5 7 3.9.2-2.3.1-5.4.1-7.8V7.5c.6-9 9-7.4 15.2-7.4h11.6q5.8-.2 11.7.1"
            />
          </clipPath>

          {/* BlobCoral path scaled from 200×200 viewBox to 180×180 px */}
          <clipPath id="clip-hero-right" clipPathUnits="userSpaceOnUse">
            <path
              transform="scale(0.9, 0.9)"
              d="M116.2.6a48.4 48.4 0 0 0-55.5 40 4 4 0 0 1-4.5 3.2 48.4 48.4 0 1 0-15.6 95.5 4 4 0 0 1 3.2 4.5 48.4 48.4 0 1 0 95.5 15.6 4 4 0 0 1 4.5-3.2 48.4 48.4 0 0 0 15.6-95.5 4 4 0 0 1-3.2-4.5 48.4 48.4 0 0 0-40-55.6"
            />
          </clipPath>
        </defs>
      </svg>

      {/* ── Center content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[700px] w-full gap-8">

        {/* ─── Illustrations aligned to this wrapper ─── */}

        {/* Left group: Blob background + Clipped Image */}
        <div
          className="hidden md:block absolute pointer-events-none -z-10"
          style={{
            left: "-210px",
            top: "40%",
            transform: "rotate(-8deg)",
          }}
        >
          <BlobBlue
            className="absolute"
            style={{ width: 155, height: 157, left: "-4px", top: "-2px", zIndex: 0 }}
          />
          <div
            className="relative z-10"
            style={{
              width: 155,
              height: 157,
              clipPath: "url(#clip-hero-left)",
            }}
          >
            <Image
              src={hero1Img}
              alt="Boldog baba játszik"
              fill
              sizes="155px"
              className="object-cover"
              placeholder="blur"
              quality={85}
            />
          </div>
        </div>

        {/* Right group: Blob background + Clipped Image */}
        <div
          className="hidden md:block absolute pointer-events-none -z-10"
          style={{
            right: "-240px",
            top: "30%",
            transform: "rotate(6deg)",
          }}
        >
          <BlobCoral
            className="absolute"
            style={{ width: 180, height: 180, left: "-4px", bottom: "-2px", zIndex: 0 }}
          />
          <div
            className="relative z-10"
            style={{
              width: 180,
              height: 180,
              clipPath: "url(#clip-hero-right)",
            }}
          >
            <Image
              src={hero2Img}
              alt="Kisgyerek játszik a fán"
              fill
              sizes="180px"
              className="object-cover"
              placeholder="blur"
              quality={85}
            />
          </div>
        </div>

        {/* SmileDoodle — bal felső */}
        <SmileDoodle
          className="hidden md:block absolute pointer-events-none -z-10"
          style={{
            left: "-80px",
            top: "6%",
            width: 85,
            opacity: 0.9,
            transform: "rotate(-2deg)",
          }}
        />
        {/* SparkleAccent — jobb */}
        <SparkleAccent
          className="hidden md:block absolute pointer-events-none -z-10"
          style={{
            right: "-24px",
            top: "8%",
            width: 85,
            opacity: 0.9,
          }}
        />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-badge bg-white/70 backdrop-blur-sm">
          <div style={{ filter: "drop-shadow(0px 3.52px 7.04px rgba(222, 160, 157, 0.8))" }} className="flex items-center justify-center">
            <MagicSparkle className="w-[18px] h-[18px] overflow-visible" />
          </div>
          <span className="font-caveat text-base tracking-[-0.32px] leading-6 text-text-main/80 uppercase">
            Hamarosan indulunk
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-parkinsans font-semibold text-text-main
                        text-[40px] leading-[1.1] tracking-[-0.64px]
                        md:text-[56px]
                        lg:text-[64px] lg:tracking-[-1.24px]">
          Prémium babaruhák, amik együtt nőnek a gyermekeddel.
        </h1>

        {/* Description */}
        <p className="font-source-sans font-normal text-text-desc
                      text-base leading-[26px]
                      md:text-lg md:leading-[26px]
                      max-w-2xl">
          Felejtsd el a ruha-vadászatot és a kinőtt zsákok hegyét. Havi előfizetésünkkel
          mindig a pontos méretű, patyolattiszta babaruhák várnak – stressz és aggodalom nélkül.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          {/* Primary button */}
          <button
            id="hero-cta-primary"
            className="font-source-sans font-medium text-lg leading-6 text-text-main
                       bg-brand-coral rounded-[100px]
                       border border-border-default
                       px-8 py-4
                       transition-colors duration-200
                       hover:bg-brand-coral-dark
                       whitespace-nowrap"
          >
            Csatlakozom a várólistához
          </button>

          {/* Outline button */}
          <div className="relative rounded-[100px]">
            <button
              id="hero-cta-secondary"
              className="font-source-sans font-medium text-lg leading-6 text-text-main
                         bg-transparent rounded-[100px]
                         px-8 py-4
                         transition-colors duration-200
                         hover:bg-text-main/5
                         whitespace-nowrap"
            >
              Hogyan működik?
            </button>
            {/* Border overlay pattern from design system */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[100px] border border-border-default pointer-events-none"
            />
          </div>
        </div>

        {/* Mobile: images below text in a row */}
        <div className="flex md:hidden gap-4 mt-4 w-full justify-center">
          {/* Left mobile image (circular crop) */}
          <div className="relative w-36 h-36 rounded-full overflow-hidden">
            <Image
              src={hero1Img}
              alt="Boldog baba játszik"
              fill
              sizes="144px"
              className="object-cover"
              placeholder="blur"
            />
          </div>
          {/* Right mobile image (circular crop) */}
          <div className="relative w-36 h-36 rounded-full overflow-hidden">
            <Image
              src={hero2Img}
              alt="Kisgyerek játszik a fán"
              fill
              sizes="144px"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAIN POINTS / TESTIMONIALS SECTION
───────────────────────────────────────────── */

/** Shared inner content for each testimonial card */
function CardInner({ quote, desc }: { quote: string; desc: string }) {
  return (
    <>
      {/* Large quotation mark */}
      <span
        aria-hidden="true"
        className="font-parkinsans font-medium text-text-quote-mark
                   text-[72px] md:text-[96px]
                   leading-none tracking-[-1.6px]
                   select-none"
      >
        &#8220;
      </span>

      {/* Quote text */}
      <blockquote
        className="font-parkinsans font-medium text-text-quote
                   text-[18px] md:text-[22px]
                   leading-[1.6] tracking-[-1.6px]
                   -mt-6"
      >
        {quote}
      </blockquote>

      {/* Description */}
      <p
        className="font-source-sans font-medium text-text-desc
                   text-base md:text-lg
                   leading-[25.2px] tracking-[-0.36px]
                   mt-auto"
      >
        {desc}
      </p>
    </>
  );
}

/** Shared wrapper classes — defined once to avoid repetition */
const cardBase =
  "relative rounded-[24px] w-full md:w-[360px] md:min-h-[440px] md:flex-shrink-0 p-8 pb-16 flex flex-col gap-4 transition-transform duration-300";

/** Reusable border overlay div — design system pattern */
function CardBorder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-[24px] border border-border-default pointer-events-none"
    />
  );
}

function PainPointsSection() {
  return (
    <section className="bg-bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-32 flex flex-col items-center gap-16 md:gap-20">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[846px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-badge bg-white/70 backdrop-blur-sm">
            <div style={{ filter: "drop-shadow(0px 3.52px 7.04px rgba(222, 160, 157, 0.8))" }} className="flex items-center justify-center">
              <MagicSparkle className="w-[18px] h-[18px] overflow-visible" />
            </div>
            <span className="font-caveat text-base tracking-[-0.32px] leading-6 text-text-main/80 uppercase">
              Ismerős valamelyik?
            </span>
          </div>

          {/* h2 Title */}
          <h2 className="font-parkinsans font-semibold text-text-main
                         text-[32px] leading-[44px] tracking-[-0.64px]
                         md:text-[40px]">
            Te is így érzed?
          </h2>

          {/* Subtitle */}
          <p className="font-source-sans font-normal text-text-desc text-lg leading-[26px]">
            Nem vagy egyedül.
          </p>
        </div>

        {/* ── Cards grid ── */}
        {/*
          Desktop: flex-row, each card has a static rotation + translateY.
          Mobile:  flex-col, no rotation (rotations only applied via md: prefix).
          Cards use border overlay pattern from design_system.md.
        */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-0">

          {/* Card 1 — Yellow, -4deg, pushed down */}
          <div
            id="pain-card-yellow"
            className={`${cardBase} bg-card-yellow z-10 md:-rotate-[4deg] md:translate-y-8`}
          >
            <CardInner
              quote={`„Megint kinőtte. A következő méret még nincs meg, az előző meg már szűk.”`}
              desc="Ismerős a folyamatos méretkövetés stressze? Nálunk ez a mi gondunk."
            />
            <CardBorder />
          </div>

          {/* Card 2 — Blue, 0deg, centered (highest z) */}
          <div
            id="pain-card-blue"
            className={`${cardBase} bg-card-blue z-20`}
          >
            <CardInner
              quote={`„A Vinted-csomag egy hete ott van a sarokban. Még fel sem adtam.”`}
              desc="A kinőtt ruhák logisztikája véget ért. Mi visszavesszük, te csak élj."
            />
            <CardBorder />
          </div>

          {/* Card 3 — Pink, +4deg, pushed down */}
          <div
            id="pain-card-pink"
            className={`${cardBase} bg-card-pink z-10 md:rotate-[4deg] md:translate-y-8`}
          >
            <CardInner
              quote={`„Drága volt, kétszer vette fel, már szűk. Mégis mit csináljak vele?”`}
              desc="Prémium minőség, ami nem vész el – körforgásos modellünkkel minden ruha megtalálja a helyét."
            />
            <CardBorder />
          </div>

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES / VALUE PROP SECTION
───────────────────────────────────────────── */
const FEATURES = [
  {
    id: "feature-size",
    title: "Mindig a pontos méret",
    desc: "Kinőtte? Visszaküldöd, mi pedig hozzuk a következőt.",
  },
  {
    id: "feature-organic",
    title: "100% organikus pamut",
    desc: "GOTS minősített – a legérzékenyebb bababőrre is.",
  },
  {
    id: "feature-stains",
    title: "Foltok? Semmi gond.",
    desc: "Használjátok bátran – a foltok a mi gondunk.",
  },
  {
    id: "feature-packaging",
    title: "Műanyagmentes csomagolás",
    desc: "Körforgásos modell, tiszta lelkiismerettel.",
  },
] as const;

function FeaturesSection() {
  return (
    <section className="bg-bg-beige">
      <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center gap-16 md:gap-20">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center gap-6 max-w-[900px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-badge bg-white/70 backdrop-blur-sm">
            <div style={{ filter: "drop-shadow(0px 3.52px 7.04px rgba(222, 160, 157, 0.8))" }} className="flex items-center justify-center">
              <MagicSparkle className="w-[18px] h-[18px] overflow-visible" />
            </div>
            <span className="font-caveat text-base tracking-[-0.32px] leading-6 text-text-main/80 uppercase">
              Tudatos szülőknek. Boldog babáknak.
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-parkinsans font-semibold text-text-main
                         text-[28px] leading-[1.2] tracking-[-0.64px]
                         md:text-[40px] md:leading-[44px]">
            Egy ruhacsomag, ami leveszi a terhet a válladról. Élvezzétek a tiszta, puha pamut érintését, miközben mi gondoskodunk a méretekről és a mosásról.
          </h2>
        </div>

        {/* ── Features Grid ── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {FEATURES.map((feature) => (
            <div key={feature.id} id={feature.id} className="flex flex-col items-center gap-4">
              {/* Icon placeholder — 64×64, circular */}
              <div
                aria-hidden="true"
                className="w-16 h-16 rounded-full bg-black/[0.06] flex-shrink-0"
              />

              {/* Feature title */}
              <h3 className="font-source-sans font-medium text-text-main
                             text-[18px] md:text-[20px] leading-6">
                {feature.title}
              </h3>

              {/* Feature description */}
              <p className="font-source-sans font-normal text-text-desc
                            text-base md:text-lg leading-[26px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Primary CTA ── */}
        <button
          id="features-cta-primary"
          className="font-source-sans font-medium text-lg leading-6 text-text-main
                     bg-brand-coral rounded-[100px]
                     px-8 py-4
                     transition-colors duration-200
                     hover:bg-brand-coral-dark
                     whitespace-nowrap"
        >
          Csatlakozom a várólistához
        </button>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS SECTION
───────────────────────────────────────────── */
const HOW_IT_WORKS_STEPS = [
  {
    id: "step-1",
    stepNum: "1. Lépés:",
    title: "Válassz csomagot",
    desc: "Válaszd ki a megfelelő méretet és stílust. Mi összeállítjuk és egyenesen az ajtódig visszük a 100% organikus, patyolattiszta babaruhákat.",
    src: step1Img,
    alt: "Első lépés: Válassz csomagot",
  },
  {
    id: "step-2",
    stepNum: "2. Lépés:",
    title: "Hordjátok bátran",
    desc: "Élvezd a közös pillanatokat és játékot teljesen gondtalanul! A foltok miatt ne aggódj: a tisztítást mi intézzük, extra költségek nélkül.",
    src: step2Img,
    alt: "Második lépés: Hordjátok bátran",
  },
  {
    id: "step-3",
    stepNum: "3. Lépés:",
    title: "Cserélj nagyobbra",
    desc: "Kinőtte a baba? Mi már küldjük is a következő méretet, a korábbi darabokat pedig ingyen elhozza a futár.",
    src: step3Img,
    alt: "Harmadik lépés: Cserélj nagyobbra",
  },
] as const;

function HowItWorksSection() {
  return (
    <section className="bg-bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-32 flex flex-col items-center">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 md:mb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-badge bg-white/70 backdrop-blur-sm">
            <div style={{ filter: "drop-shadow(0px 3.52px 7.04px rgba(222, 160, 157, 0.8))" }} className="flex items-center justify-center">
              <MagicSparkle className="w-[18px] h-[18px] overflow-visible" />
            </div>
            <span className="font-caveat text-base tracking-[-0.32px] leading-6 text-text-main/80 uppercase">
              Egyszerűbb, mint gondolnád
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-parkinsans font-semibold text-text-main
                         text-[32px] leading-[1.2] tracking-[-0.64px]
                         md:text-[48px]">
            3 lépés a stresszmentes ruhatárig
          </h2>
        </div>

        {/* ── Steps Grid ── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col">
              {/* Responsive image — fill inside aspect-ratio wrapper */}
              <div className="pr-[20px]">
                <div className="relative z-0">
                  {/* Blob Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center -z-10 pointer-events-none">
                    {index === 0 && <BlobLargeCoral className="absolute w-[110%] h-[110%] object-cover" />}
                    {index === 1 && <BlobLargeBlue className="absolute w-[110%] h-[110%] object-cover" />}
                    {index === 2 && <BlobLargeYellow className="absolute w-[110%] h-[110%] object-cover" />}
                  </div>

                  <div className="relative w-full aspect-[4/3] max-h-[232px] rounded-[24px] overflow-hidden">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      placeholder="blur"
                      quality={85}
                    />
                  </div>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="font-parkinsans font-semibold text-text-main text-[24px] leading-[1.2] mt-8">
                {step.stepNum} {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-source-sans font-normal text-text-desc text-[18px] leading-[26px] mt-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <button
          id="how-it-works-cta"
          className="font-source-sans font-medium text-lg leading-6 text-text-main
                     bg-brand-coral rounded-[100px]
                     px-8 py-4 mt-20 md:mt-24
                     transition-colors duration-200
                     hover:bg-brand-coral-dark
                     whitespace-nowrap"
        >
          Csatlakozom a várólistához
        </button>

      </div>
    </section>
  );
}
