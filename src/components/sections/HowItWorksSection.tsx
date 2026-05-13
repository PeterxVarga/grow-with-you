import Image from "next/image";
import step1Img from "../../../public/Step 1.jpg";
import step2Img from "../../../public/Step 2.jpg";
import step3Img from "../../../public/Step 3.jpg";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { WaitlistButton } from "@/components/waitlist/WaitlistButton";
import {
  ArrowDoodle,
  ArrowDoodleBlue,
  BlobLargeBlue,
  BlobLargeCoral,
  BlobLargeYellow,
} from "@/components/layout/ui/Decorations";

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

export function HowItWorksSection() {
  return (
    <section id="hogyan-mukodik" className="bg-bg-cream scroll-mt-10 md:scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <MotionReveal
          variant="soft"
          className="flex flex-col items-center text-center gap-6 mb-20 md:mb-24"
        >
          <SectionBadge>Egyszerűbb, mint gondolnád</SectionBadge>

          <h2 className="font-parkinsans font-semibold text-text-main text-[32px] leading-[1.2] tracking-[-0.64px] md:text-[48px]">
            3 lépés a stresszmentes ruhatárig
          </h2>
        </MotionReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <MotionReveal
              key={step.id}
              variant="media"
              delay={index * 90}
              className="flex flex-col"
            >
              <div className="pr-[20px] relative">
                <div className="relative z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center -z-20 pointer-events-none">
                    {index === 0 && <BlobLargeCoral className="absolute w-[110%] h-[110%] object-cover" />}
                    {index === 1 && <BlobLargeBlue className="absolute w-[110%] h-[110%] object-cover" />}
                    {index === 2 && <BlobLargeYellow className="absolute w-[110%] h-[110%] object-cover" />}
                  </div>

                  {index === 0 && (
                    <ArrowDoodle className="hidden md:block absolute -z-10 w-[80px] lg:w-[116px] -right-[40px] lg:-right-[60px] bottom-[20px] lg:bottom-[30px] motion-safe:md:transition-opacity motion-safe:md:duration-700" />
                  )}
                  {index === 1 && (
                    <ArrowDoodleBlue className="hidden md:block absolute -z-10 w-[80px] lg:w-[116px] -right-[40px] lg:-right-[60px] top-[10px] lg:top-[15px] motion-safe:md:transition-opacity motion-safe:md:duration-700" />
                  )}

                  <div className="relative w-full aspect-[4/3] max-h-[232px] rounded-[24px] overflow-hidden md:transition-transform md:duration-300 md:ease-out md:hover:-translate-y-1">
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

              <h3 className="font-parkinsans font-semibold text-text-main text-[24px] leading-[1.2] mt-8">
                {step.stepNum} {step.title}
              </h3>

              <p className="font-source-sans font-normal text-text-desc text-[18px] leading-[26px] mt-4">
                {step.desc}
              </p>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal variant="soft" delay={120}>
          <WaitlistButton
            id="how-it-works-cta"
            className="font-source-sans font-medium text-lg leading-6 text-text-main bg-brand-coral rounded-[100px] px-8 py-4 mt-20 md:mt-24 transition-colors duration-200 hover:bg-brand-coral-dark whitespace-nowrap cursor-pointer"
          >
            Csatlakozom a várólistához
          </WaitlistButton>
        </MotionReveal>
      </div>
    </section>
  );
}
