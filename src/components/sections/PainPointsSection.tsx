import PainPointsCardsClient from "@/components/PainPointsCardsClient";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionBadge } from "@/components/SectionBadge";

export function PainPointsSection() {
  return (
    <section className="bg-bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-32 flex flex-col items-center gap-16 md:gap-20">
        <MotionReveal
          variant="soft"
          className="flex flex-col items-center gap-4 text-center max-w-[846px]"
        >
          <SectionBadge>Ismerős valamelyik?</SectionBadge>

          <h2 className="font-parkinsans font-semibold text-text-main text-[32px] leading-[44px] tracking-[-0.64px] md:text-[40px]">
            Te is így érzed?
          </h2>

          <p className="font-source-sans font-normal text-text-desc text-lg leading-[26px]">
            Nem vagy egyedül.
          </p>
        </MotionReveal>

        <MotionReveal variant="cards" className="w-full" delay={100}>
          <PainPointsCardsClient />
        </MotionReveal>
      </div>
    </section>
  );
}
