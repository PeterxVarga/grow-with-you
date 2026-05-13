import Link from "next/link";
import { SectionBadge } from "@/components/SectionBadge";

const DATA_SECTIONS = [
  {
    title: "1. Ki kezeli az adataidat?",
    body: [
      "Az adatkezelő a Grow With You. Az oldal célja, hogy a várólistára jelentkező érdeklődőket értesíteni tudjuk az indulásról és a kapcsolódó promóciós lehetőségekről.",
      "Kapcsolat: hello@growwithyou.hu",
    ],
  },
  {
    title: "2. Milyen adatokat kérünk?",
    body: [
      "A várólista formban a keresztnevedet és az email címedet kérjük el.",
      "A keresztnevet arra használjuk, hogy személyesebb megszólítással tudjunk írni, az email címet pedig az indulással kapcsolatos értesítések küldésére.",
    ],
  },
  {
    title: "3. Mi az adatkezelés célja?",
    body: [
      "Az adatkezelés célja a várólista kezelése, az indulásról szóló értesítés elküldése, valamint a promóciós időszakhoz kapcsolódó információk megosztása.",
      "Az adataidat nem használjuk ettől eltérő célra, és nem adjuk el harmadik félnek.",
    ],
  },
  {
    title: "4. Mi az adatkezelés jogalapja?",
    body: [
      "Az adatkezelés jogalapja a hozzájárulásod, amelyet a várólista form elküldésekor adsz meg.",
      "A hozzájárulásodat bármikor visszavonhatod a kapcsolatfelvételi email címen.",
    ],
  },
  {
    title: "5. Meddig őrizzük meg az adatokat?",
    body: [
      "Az adatokat addig kezeljük, amíg a várólista és az induláshoz kapcsolódó értesítések célja fennáll, vagy amíg nem kéred az adataid törlését.",
      "Törlési kérés esetén az adataidat indokolatlan késedelem nélkül eltávolítjuk a várólistából.",
    ],
  },
  {
    title: "6. Kik férhetnek hozzá az adatokhoz?",
    body: [
      "Az adatokhoz kizárólag a Grow With You működtetésében részt vevő, erre jogosult személyek férhetnek hozzá.",
      "Technikai szolgáltatók, például emailküldő vagy tárhelyszolgáltató igénybevétele esetén az adatok feldolgozása a szolgáltatás működtetéséhez szükséges mértékben történhet.",
    ],
  },
  {
    title: "7. Milyen jogaid vannak?",
    body: [
      "Kérheted az adataidhoz való hozzáférést, azok helyesbítését, törlését, az adatkezelés korlátozását, valamint tiltakozhatsz az adatkezelés ellen.",
      "A hozzájárulásodat bármikor visszavonhatod. Ez nem érinti a visszavonás előtti adatkezelés jogszerűségét.",
    ],
  },
  {
    title: "8. Kapcsolat és panaszkezelés",
    body: [
      "Adatkezeléssel kapcsolatos kérdés vagy kérés esetén írj nekünk a hello@growwithyou.hu email címre.",
      "Ha úgy érzed, hogy az adatkezelés nem megfelelő, jogosult vagy panaszt tenni az illetékes adatvédelmi hatóságnál.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg-cream">
      <section className="px-5 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-[960px] flex-col gap-10">
          <div className="flex flex-col items-start gap-6">
            <SectionBadge>Adatkezelés</SectionBadge>

            <div className="flex max-w-[760px] flex-col gap-5">
              <h1 className="font-parkinsans text-[40px] font-semibold leading-[1.08] tracking-[-0.64px] text-text-main md:text-[56px]">
                Adatkezelési tájékoztató
              </h1>
              <p className="font-source-sans text-lg leading-[28px] text-text-desc">
                Ez a tájékoztató összefoglalja, hogyan kezeljük a várólistára
                jelentkezés során megadott adataidat.
              </p>
              <p className="font-source-sans text-sm leading-6 text-text-desc">
                Utolsó frissítés: 2026. május 11.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-border-default bg-white/55">
            {DATA_SECTIONS.map((section, index) => (
              <section
                key={section.title}
                className="border-b border-border-default px-6 py-7 last:border-b-0 md:px-10 md:py-9"
              >
                <h2 className="font-parkinsans text-[24px] font-semibold leading-[1.2] text-text-main">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-source-sans text-base leading-[26px] text-text-desc md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {index === 0 && (
                  <p className="mt-4 rounded-[18px] bg-bg-beige px-4 py-3 font-source-sans text-sm leading-6 text-text-desc">
                    Megjegyzés: ez az oldal induló tájékoztatóként készült. A
                    végleges jogi szöveget éles adatgyűjtés előtt érdemes
                    szakértővel ellenőriztetni.
                  </p>
                )}
              </section>
            ))}
          </div>

          <div className="flex flex-col gap-4 rounded-[28px] bg-bg-footer px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <h2 className="font-parkinsans text-[24px] font-semibold leading-[1.2] text-text-main">
                Vissza a főoldalra
              </h2>
              <p className="mt-2 font-source-sans text-base leading-[26px] text-text-desc">
                A várólistára a főoldalon található gombokkal tudsz
                jelentkezni.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex cursor-pointer justify-center rounded-[100px] border border-border-default bg-brand-coral px-8 py-4 font-source-sans text-lg font-semibold leading-6 text-text-main transition-colors hover:bg-brand-coral-dark"
            >
              Főoldal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
