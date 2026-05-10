import Image from "next/image";
import hero1Img from "../../../public/Hero 1.png";
import hero2Img from "../../../public/Hero 2.png";
import { SectionBadge } from "@/components/SectionBadge";
import {
  BlobBlue,
  BlobCoral,
  SmileDoodle,
  SparkleAccent,
} from "@/components/layout/ui/Decorations";

export function HeroSection() {
  /*
   * BlobBlue viewBox: 151 x 153 -> rendered: 155 x 157
   * BlobCoral viewBox: 200 x 200 -> rendered: 180 x 180
   */
  return (
    <section className="relative w-full bg-bg-cream min-h-[90svh] flex items-center justify-center overflow-hidden px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:py-0">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="clip-hero-left" clipPathUnits="userSpaceOnUse">
            <path
              transform="scale(1.026, 1.026)"
              d="M91.2.2a7 7 0 0 1 6.2 6.5q.3 9 .2 18.1c0 4.5.3 10-.3 14.4 9-5.3 18.6-10 28-14.7 4.7-2.5 8.5 0 10.8 4.3q6.9 13 13.5 26.4a8 8 0 0 1 0 5.2c-2 4-9 6.8-12.7 8.7-4.7 2.4-9.5 5.2-14 7.1 7.7 4.4 16.4 8.3 24 13.1.8.6 2.3 2.3 2.6 3.3.5 1.5.6 4-.2 5.4q-4 8.3-8.6 16.4c-1.9 3.3-4.7 9.4-7 12.2q-1 1.4-2.6 2c-4.3 1.6-9.5-2-13.3-4.1l-12.1-6.5q-4.1-2.4-8.4-4.5.3 2 .2 4c0 9.4.3 19-.2 28.3-.2 3.4-3.4 6-6.6 6.1-4.6.3-9.6.1-14.2.1H59.4c-3-.3-6-2.5-6.5-5.7-.5-4-.3-8.4-.3-12.4V113l-.4.3c-.8.5-2.2 1-3 1.6l-9.6 5-9 4.7q-3 1.8-6.4 3.2a7 7 0 0 1-9.3-3.2q-5.4-10.1-10.6-20.1C3 102 1.2 99 .3 96.3a7 7 0 0 1 0-3.8c1-4.3 7.5-6.5 11-8.5 5-2.8 10.7-5.2 15.7-8v-.3c-1.2-.8-4-2.1-5.3-2.9l-11.3-6c-2.6-1.3-5.2-2.4-7.5-4.3C.8 61-.5 57.4.6 55c1.7-4.3 4.2-8.4 6.4-12.5l4.8-9.1c1.9-3.5 4.1-9.2 8.3-10.1 3.6-.8 6.1 1.1 9 2.7l9.7 5.2 6.8 3.7c2.2 1.2 5 2.5 7 3.9.2-2.3.1-5.4.1-7.8V7.5c.6-9 9-7.4 15.2-7.4h11.6q5.8-.2 11.7.1"
            />
          </clipPath>

          <clipPath id="clip-hero-right" clipPathUnits="userSpaceOnUse">
            <path
              transform="scale(0.9, 0.9)"
              d="M116.2.6a48.4 48.4 0 0 0-55.5 40 4 4 0 0 1-4.5 3.2 48.4 48.4 0 1 0-15.6 95.5 4 4 0 0 1 3.2 4.5 48.4 48.4 0 1 0 95.5 15.6 4 4 0 0 1 4.5-3.2 48.4 48.4 0 0 0 15.6-95.5 4 4 0 0 1-3.2-4.5 48.4 48.4 0 0 0-40-55.6"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center max-w-[700px] w-full gap-8">
        <div className="hero-load-media hero-delay-280 hidden lg:block absolute pointer-events-none -z-10 left-[-210px] top-[40%] rotate-[-8deg]">
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

        <div className="hero-load-media hero-delay-360 hidden lg:block absolute pointer-events-none -z-10 right-[-240px] top-[30%] rotate-[6deg]">
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

        <SmileDoodle
          className="hero-load-fade hero-delay-220 block absolute pointer-events-none -z-10"
          style={{
            left: "clamp(-18px, -8vw, -80px)",
            top: "2%",
            width: "clamp(62px, 11vw, 85px)",
            opacity: 0.65,
            transform: "rotate(-2deg)",
          }}
        />
        <SparkleAccent
          className="hero-load-fade hero-delay-260 block absolute pointer-events-none -z-10"
          style={{
            right: "clamp(-10px, -3vw, -24px)",
            top: "4%",
            width: "clamp(58px, 10vw, 85px)",
            opacity: 0.65,
          }}
        />

        <div className="hero-load-reveal">
          <SectionBadge>Hamarosan indulunk</SectionBadge>
        </div>

        <div className="hero-load-reveal hero-delay-80 w-full">
          <h1 className="mx-auto max-w-[350px] font-parkinsans font-semibold text-text-main text-[34px] leading-[1.12] tracking-[-0.64px] sm:max-w-[700px] sm:text-[40px] md:text-[56px] lg:text-[64px] lg:tracking-[-1.24px]">
            Prémium babaruhák, amik együtt nőnek a gyermekeddel.
          </h1>
        </div>

        <div className="hero-load-reveal hero-delay-150 w-full">
          <p className="mx-auto max-w-[340px] font-source-sans font-normal text-text-desc text-base leading-[26px] md:max-w-2xl md:text-lg md:leading-[26px]">
            Felejtsd el a ruha-vadászatot és a kinőtt zsákok hegyét. Havi
            előfizetésünkkel mindig a pontos méretű, patyolattiszta babaruhák
            várnak - stressz és aggodalom nélkül.
          </p>
        </div>

        <div className="hero-load-reveal hero-delay-220 flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            id="hero-cta-primary"
            className="font-source-sans font-medium text-lg leading-6 text-text-main bg-brand-coral rounded-[100px] border border-border-default px-8 py-4 transition-colors duration-200 hover:bg-brand-coral-dark whitespace-nowrap"
          >
            Csatlakozom a várólistához
          </button>

          <div className="relative rounded-[100px]">
            <button
              id="hero-cta-secondary"
              className="font-source-sans font-medium text-lg leading-6 text-text-main bg-transparent rounded-[100px] px-8 py-4 transition-colors duration-200 hover:bg-text-main/5 whitespace-nowrap"
            >
              Hogyan működik?
            </button>
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[100px] border border-border-default pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
