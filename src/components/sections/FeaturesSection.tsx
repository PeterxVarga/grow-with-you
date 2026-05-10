import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionBadge } from "@/components/SectionBadge";

const FEATURES = [
  {
    id: "feature-size",
    title: "Mindig a pontos méret",
    desc: "Kinőtte? Visszaküldöd, mi pedig hozzuk a következőt.",
  },
  {
    id: "feature-organic",
    title: "100% organikus pamut",
    desc: "GOTS minősített - a legérzékenyebb bababőrre is.",
  },
  {
    id: "feature-stains",
    title: "Foltok? Semmi gond.",
    desc: "Használjátok bátran - a foltok a mi gondunk.",
  },
  {
    id: "feature-packaging",
    title: "Műanyagmentes csomagolás",
    desc: "Körforgásos modell, tiszta lelkiismerettel.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="bg-[#F6F3F0]">
      <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center gap-16 md:gap-20">
        <MotionReveal variant="soft" className="flex flex-col items-center gap-6 max-w-[900px]">
          <SectionBadge>Tudatos szülőknek. Boldog babáknak.</SectionBadge>

          <h2 className="font-parkinsans font-semibold text-text-main text-[28px] leading-[1.2] tracking-[-0.64px] md:text-[40px] md:leading-[44px]">
            Egy ruhacsomag, ami leveszi a terhet a válladról. Élvezzétek a
            tiszta, puha pamut érintését, miközben mi gondoskodunk a méretekről
            és a mosásról.
          </h2>
        </MotionReveal>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {FEATURES.map((feature, index) => (
            <MotionReveal
              key={feature.id}
              id={feature.id}
              variant="cards"
              delay={index * 70}
              className="flex flex-col items-center gap-4"
            >
              <div
                aria-hidden="true"
                className="w-16 h-16 rounded-full bg-black/[0.06] flex-shrink-0"
              />

              <h3 className="font-source-sans font-medium text-text-main text-[18px] md:text-[20px] leading-6">
                {feature.title}
              </h3>

              <p className="font-source-sans font-normal text-text-desc text-base md:text-lg leading-[26px]">
                {feature.desc}
              </p>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal variant="soft" delay={120}>
          <button
            id="features-cta-primary"
            className="font-source-sans font-medium text-lg leading-6 text-text-main bg-brand-coral rounded-[100px] px-8 py-4 transition-colors duration-200 hover:bg-brand-coral-dark whitespace-nowrap"
          >
            Csatlakozom a várólistához
          </button>
        </MotionReveal>
      </div>
    </section>
  );
}
