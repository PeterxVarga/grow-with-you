import React from "react";

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
  │  └────────────────────────────────────────────┘ │
  └─────────────────────────────────────────────────┘
*/

export function Footer() {
  return (
    <footer className="bg-bg-cream pt-16 pb-16">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* ── Outer beige rounded card ── */}
        <div className="bg-bg-footer rounded-[40px] overflow-hidden">

          {/* ── Dark CTA Banner ── */}
          <div
            className="
              bg-bg-footer-cta rounded-[40px]
              px-10 py-14 md:px-20 md:py-16
              flex flex-col md:flex-row
              items-center justify-between
              gap-10 relative overflow-hidden
            "
          >
            {/* Left: text + button */}
            <div className="flex flex-col items-start z-10 shrink-0 max-w-[480px]">
              <h2
                className="
                  font-parkinsans font-bold text-white
                  text-4xl md:text-5xl
                  leading-[1.1] tracking-[-1px]
                "
              >
                Légy az elsők között.
              </h2>

              <p
                className="
                  font-source-sans text-white/80
                  text-base md:text-lg leading-relaxed
                  max-w-md mt-5 mb-8
                "
              >
                Korlátozott helyek az első körben – iratkozz fel a várólistára,
                és értesítünk, amint elindulunk.
              </p>

              <button
                id="footer-cta-primary"
                className="
                  font-source-sans font-medium text-lg leading-6
                  text-text-main bg-brand-coral
                  rounded-[100px] px-8 py-4
                  transition-colors duration-200 hover:bg-brand-coral-dark
                  whitespace-nowrap
                "
              >
                Csatlakozom a várólistához
              </button>
            </div>

            {/* Right: overlapping blob/circle photo placeholders */}
            <div className="z-10 shrink-0 flex justify-center md:justify-end w-full md:w-auto">
              <div className="relative w-[300px] h-[220px] md:w-[360px] md:h-[260px]">
                {/* Large central blob */}
                <div
                  aria-hidden="true"
                  className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    w-[180px] h-[180px] md:w-[210px] md:h-[210px]
                    bg-white/15 rounded-[50%_40%_55%_45%_/_45%_50%_55%_50%]
                  "
                />
                {/* Bottom-left circle */}
                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-6
                    w-[110px] h-[110px] md:w-[130px] md:h-[130px]
                    bg-white/10 rounded-full
                  "
                />
                {/* Bottom-right circle */}
                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-0 right-6
                    w-[110px] h-[110px] md:w-[130px] md:h-[130px]
                    bg-white/10 rounded-full
                  "
                />
              </div>
            </div>
          </div>

          {/* ── Bottom Bar (inside beige card) ── */}
          <div
            className="
              px-10 md:px-20 py-10 md:py-12
              flex flex-col md:flex-row
              justify-between items-start
              gap-10
            "
          >
            {/* Left column: logo stacked above copyright */}
            <div className="flex flex-col gap-4">
              {/* Logo placeholder — 64px tall, ~2.5:1 ratio → ~160px wide */}
              <div
                className="
                  h-16 w-40
                  bg-black/8 rounded-xl
                  flex items-center justify-center
                  font-parkinsans font-bold text-text-main text-sm
                "
              >
                LOGO
              </div>
              <span className="font-source-sans font-medium text-sm text-text-desc">
                © Grow with You. Minden jog fenntartva.
              </span>
            </div>

            {/* Right column: social icons stacked above legal link */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-3">
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-black/10" />
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-black/10" />
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-black/10" />
              </div>
              <a
                href="#"
                className="
                  font-source-sans font-medium text-sm
                  text-text-main hover:underline underline-offset-2
                "
              >
                Adatkezelési tájékoztató
              </a>
            </div>
          </div>

        </div>{/* end beige card */}
      </div>
    </footer>
  );
}
