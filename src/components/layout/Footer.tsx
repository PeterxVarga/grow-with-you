import React from "react";
import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import {
  BlobPinkAccent,
  BlobBlue,
  BlobYellow,
  CircleDot,
  CloudDoodle,
  PaperPlaneDoodle,
  SunFlowerDoodle,
} from "./ui/Decorations";

/*
  FOOTER STRUCTURE:
  ┌─ <footer> bg-bg-cream ──────────────────────────┐
  │  pt-16 pb-16                                    │
  │  ┌─ beige card max-w-[1280px] bg-bg-footer ───┐ │
  │  │ rounded-[40px]                             │ │
  │  │  ┌─ dark CTA bg-bg-footer-cta ──────────┐  │ │
  │  │  │  rounded-[40px]                      │  │ │
  │  │  │  Left: h2 / text / button            │  │ │
  │  │  │  Right: photo blob placeholders      │  │ │
  │  │  └──────────────────────────────────────┘  │ │
  │  │                                            │ │
  │  │  Bottom bar (beige shows):                 │ │
  │  │    Left col ↓  Logo                        │ │
  │  │               Copyright                   │ │
  │  │    Right col ↓ Social icons                │ │
  │  │                Legal link                 │ │
  │  │  └────────────────────────────────────────────┘ │
  │  └─────────────────────────────────────────────────┘
*/

export function Footer() {
  return (
    <footer className="bg-bg-cream pt-16 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">

        {/* ── Footer Card Wrapper ── */}
        <div className="relative">
          {/* Beige background that reaches exactly half of the CTA banner */}
          <div className="absolute bottom-0 left-0 right-0 h-[calc(100%-180px)] md:h-[calc(100%-200px)] bg-[#F6F3F0] rounded-[40px] z-0"></div>

          {/* ── Dark CTA Banner ── */}
          <div className="relative z-10 px-0 sm:px-3 md:px-4 pt-0 w-full flex justify-center">
            <div
              className="
                w-full max-w-[70rem]
                bg-bg-footer-cta rounded-[40px]
                px-6 py-12 sm:px-8 md:px-10 md:py-14 lg:px-[60px] lg:min-h-[400px]
                flex flex-col lg:flex-row
                items-center justify-between
                gap-8 lg:gap-10 relative overflow-hidden
              "
            >
              <BlobBlue
                className="absolute -top-10 -left-10 w-[300px] h-[300px] text-[#3f2b56] opacity-30 pointer-events-none"
                fill="currentColor"
              />

              {/* Left: text + button */}
              <MotionReveal
                variant="footer"
                className="flex flex-col items-start z-10 shrink-0 max-w-[620px] relative"
              >
                <h2
                  className="
                    font-parkinsans font-bold text-white
                    text-[2.5rem] md:text-[3.1rem] lg:text-[3.5rem]
                    leading-[1.1] tracking-[-1px]
                  "
                >
                  Légy az elsők között.
                </h2>

                <p
                  className="
                    font-source-sans text-white/80
                    text-base md:text-[17px] leading-relaxed
                    max-w-[420px] mt-6 mb-10
                  "
                >
                  Korlátozott helyek a promóciós időszakban – iratkozz fel a várólistára,
                  és értesítünk, amint elindulunk.
                </p>

                <div className="relative">
                  <button
                    id="footer-cta-primary"
                    className="
                      font-source-sans font-semibold text-[17px] leading-6
                      text-text-main bg-brand-coral
                      rounded-[100px] px-8 py-4
                      transition-colors duration-200 hover:bg-brand-coral-dark
                      whitespace-nowrap relative z-10 shadow-sm
                    "
                  >
                    Csatlakozom a várólistához
                  </button>
                  {/* Paper plane doodle below the button */}
                  <PaperPlaneDoodle className="absolute -bottom-16 left-[60%] w-[100px] h-[75px] pointer-events-none z-0" />
                </div>
              </MotionReveal>

              {/* Right: photo collage & decorations */}
              <MotionReveal
                variant="media"
                delay={120}
                className="z-10 shrink-0 w-full max-w-[460px] lg:w-[460px] h-[300px] md:h-[330px] flex justify-center items-center relative mt-8 lg:mt-0"
              >
                <CloudDoodle className="absolute left-[46%] top-[32%] w-[235px] md:w-[285px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100" />
                <CloudDoodle className="absolute right-[6px] top-[48%] w-[190px] md:w-[235px] -translate-y-1/2 pointer-events-none opacity-85" />

                <BlobPinkAccent className="absolute -top-4 right-2 w-[106px] md:w-[128px] h-auto pointer-events-none" />
                <BlobYellow className="absolute bottom-6 left-[88px] w-[84px] md:w-[102px] h-auto pointer-events-none" />
                <CircleDot className="absolute bottom-[72px] left-[148px] w-3 h-3 text-[#fff0a9] pointer-events-none" fill="currentColor" />
                <CircleDot className="absolute bottom-[54px] right-[106px] w-[48px] md:w-[58px] h-auto text-[#c9e5ff] pointer-events-none" fill="currentColor" />
                <CircleDot className="absolute bottom-2 right-[52px] w-[36px] md:w-[46px] h-auto text-[#f3d3f0] pointer-events-none" fill="currentColor" />
                <CircleDot className="absolute bottom-8 right-[96px] w-3 h-3 text-white pointer-events-none" fill="currentColor" />

                <SunFlowerDoodle className="absolute top-[102px] left-[24px] w-[104px] md:w-[122px] h-auto text-[#a9daf8] pointer-events-none z-30" />

                <Image
                  src="/Footer main.png"
                  alt="Anya felemeli a babáját"
                  width={340}
                  height={340}
                  sizes="(max-width: 768px) 245px, 330px"
                  className="absolute top-[16px] right-[54px] md:right-[58px] z-20 w-[245px] md:w-[330px] h-auto object-contain"
                  priority={false}
                />

                <Image
                  src="/Footer left.png"
                  alt="Mosolygó kisgyerek játékkal"
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 96px, 124px"
                  className="absolute left-[60px] md:left-[66px] bottom-[98px] z-40 w-[96px] md:w-[124px] h-auto object-contain"
                />

                <Image
                  src="/Footer right.png"
                  alt="Baba építőjátékkal"
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 104px, 136px"
                  className="absolute right-[28px] md:right-[18px] bottom-[48px] z-40 w-[104px] md:w-[136px] h-auto object-contain"
                />
              </MotionReveal>
            </div>
          </div>

          {/* ── Bottom Bar (inside beige card) ── */}
          <div
            className="
              relative z-10
              px-6 sm:px-8 md:px-10 lg:px-20 py-8 md:py-10
              flex flex-col md:flex-row
              justify-between items-center md:items-end
              gap-8
            "
          >
            {/* Left column: logo stacked above copyright */}
            <MotionReveal variant="soft" className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center">
                <span className="font-parkinsans font-extrabold text-[#302244] text-[32px] tracking-tight flex items-center relative">
                  <span className="text-brand-coral-dark text-[40px] mr-1 leading-none mt-1">★</span>
                  Grow With You
                </span>
              </div>
              <span className="font-source-sans font-medium text-[15px] text-text-desc mt-1">
                © Grow With You. All rights reserved.
              </span>
            </MotionReveal>

            {/* Right column: social icons stacked above legal link */}
            <MotionReveal
              variant="soft"
              delay={80}
              className="flex flex-col items-center md:items-end gap-3"
            >
              <div className="flex items-center gap-5 text-[#a37989]">
                {/* Facebook icon */}
                <a href="#" aria-label="Facebook" className="hover:text-[#302244] transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                {/* Instagram icon */}
                <a href="#" aria-label="Instagram" className="hover:text-[#302244] transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                {/* X / Twitter icon */}
                <a href="#" aria-label="X (Twitter)" className="hover:text-[#302244] transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
              <a
                href="#"
                className="
                  font-source-sans font-medium text-[15px]
                  text-text-desc hover:text-[#302244] transition-colors
                "
              >
                Adatkezelési tájékoztató
              </a>
            </MotionReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
