'use client';

import React, { useEffect, useRef, useState } from 'react';

/** Shared inner content for each testimonial card */
function CardInner({ quote, desc }: { quote: string; desc: string }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="font-parkinsans font-medium text-text-quote-mark text-[72px] md:text-[96px] leading-none tracking-[-1.6px] select-none"
      >
        &#8220;
      </span>
      <blockquote className="font-parkinsans font-medium text-text-quote text-[18px] md:text-[22px] leading-[1.6] tracking-[-1.6px] -mt-6">
        {quote}
      </blockquote>
      <p className="font-source-sans font-medium text-text-desc text-base md:text-lg leading-[25.2px] tracking-[-0.36px] mt-auto">
        {desc}
      </p>
    </>
  );
}

const outerBase = "relative w-full max-w-[520px] lg:w-[360px] lg:max-w-none lg:flex-shrink-0";

const innerBase = "relative w-full lg:min-h-[440px] rounded-[24px] p-8 pb-16 flex flex-col gap-4 lg:transition-all lg:duration-300 lg:ease-out lg:hover:-translate-y-[4px] lg:hover:scale-[1.01] lg:hover:shadow-lg lg:will-change-transform cursor-default";

function CardBorder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-[24px] border border-border-default pointer-events-none"
    />
  );
}

export default function PainPointsCardsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const hasOpened = useRef(false);

  // Referenciák a smooth (lerp) animációhoz
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const checkLayout = () => setIsCompactLayout(mediaQuery.matches);
    checkLayout();
    mediaQuery.addEventListener('change', checkLayout);

    return () => {
      mediaQuery.removeEventListener('change', checkLayout);
    };
  }, []);

  useEffect(() => {
    if (isCompactLayout) {
      targetProgress.current = 1;
      currentProgress.current = 1;
      hasOpened.current = true;
      return;
    }

    const handleScroll = () => {
      if (hasOpened.current) {
        return;
      }

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Kiterjesztettük a görgetési tartományt, hogy lassabb legyen az animáció
        // Amikor a konténer teteje belép a képernyő alján (1.0) -> indul
        // Amikor felér a képernyő felső 20%-ába (0.2) -> véget ér
        const start = windowHeight * 1.0;
        const end = windowHeight * 0.2;

        let p = (start - rect.top) / (start - end);
        p = Math.max(0, Math.min(1, p));
        targetProgress.current = p;

        if (p >= 1) {
          hasOpened.current = true;
          targetProgress.current = 1;
        }
      }
    };

    let animationFrameId: number;
    const renderLoop = () => {
      // Lerp (Linear Interpolation) - ettől lesz "vajas" és smooth, nem darabos az egérgörgőtől
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.06;

      // Csak akkor frissítjük a state-et (újrarenderelünk), ha van látható mozgás
      if (Math.abs(targetProgress.current - currentProgress.current) > 0.001) {
        setProgress(currentProgress.current);
      } else if (currentProgress.current !== targetProgress.current) {
        currentProgress.current = targetProgress.current;
        setProgress(currentProgress.current);
      }

      if (hasOpened.current && currentProgress.current >= 0.999) {
        currentProgress.current = 1;
        targetProgress.current = 1;
        setProgress(1);
        return;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Kezdeti számítás
    renderLoop();   // Smooth render loop indítása

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isCompactLayout]);

  const easeInOut = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

  const willChange = (progress > 0 && progress < 1) ? 'transform' : 'auto';

  // Egyetlen sima interpoláció 0-tól 1-ig
  const p = easeInOut(progress);

  const getLeftStyle = (): React.CSSProperties => {
    if (isCompactLayout) {
      return {};
    }

    let transform = '';

    const xVal = 92 * (1 - p); 
    // Kis mélységváltozás, hogy a kártyák finoman nyíljanak szét.
    const yVal = 48 * (1 - p) + 24 * p; 
    const rot = -3 * (1 - p) + (-2) * p; 
    transform = `translateX(${xVal}%) translateY(${yVal}px) rotate(${rot}deg)`;

    return {
      opacity: 1, 
      transform,
      willChange,
    };
  };

  const getRightStyle = (): React.CSSProperties => {
    if (isCompactLayout) {
      return {};
    }

    let transform = '';

    const xVal = -92 * (1 - p); 
    // Kis mélységváltozás, hogy a kártyák finoman nyíljanak szét.
    const yVal = 48 * (1 - p) + 24 * p; 
    const rot = 3 * (1 - p) + 2 * p; 
    transform = `translateX(${xVal}%) translateY(${yVal}px) rotate(${rot}deg)`;

    return {
      opacity: 1, 
      transform,
      willChange,
    };
  };

  const getCenterStyle = (): React.CSSProperties => {
    if (isCompactLayout) {
      return {};
    }

    // A középső kártya csak finoman emelkedik, hogy a mozgás ne vigye el a fókuszt.
    const yVal = 48 * (1 - p);
    const rot = 0.25 * (1 - p);
    return {
      opacity: 1,
      transform: `translateY(${yVal}px) rotate(${rot}deg)`,
      willChange,
    };
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-6 lg:gap-0"
    >
      {/* Bal kártya (Sárga) - outer div kapja a JS animációt, inner div a hovert */}
      <div className={`${outerBase} z-10`} style={getLeftStyle()}>
        <div className={`${innerBase} bg-card-yellow lg:hover:rotate-[2deg]`}>
          <CardInner
            quote={`„Megint kinőtte. A következő méret még nincs meg, az előző meg már szűk.”`}
            desc="Ismerős a folyamatos méretkövetés stressze? Nálunk ez a mi gondunk."
          />
          <CardBorder />
        </div>
      </div>

      {/* Középső kártya (Kék) */}
      <div className={`${outerBase} z-20`} style={getCenterStyle()}>
        <div className={`${innerBase} bg-card-blue`}>
          <CardInner
            quote={`„A Vinted-csomag egy hete ott van a sarokban. Még fel sem adtam.”`}
            desc="A kinőtt ruhák logisztikája véget ért. Mi visszavesszük, te csak élj."
          />
          <CardBorder />
        </div>
      </div>

      {/* Jobb kártya (Rózsaszín) */}
      <div className={`${outerBase} z-10`} style={getRightStyle()}>
        <div className={`${innerBase} bg-card-pink lg:hover:-rotate-[2deg]`}>
          <CardInner
            quote={`„Drága volt, kétszer vette fel, már szűk. Mégis mit csináljak vele?”`}
            desc="Prémium minőség, ami nem vész el – körforgásos modellünkkel minden ruha megtalálja a helyés."
          />
          <CardBorder />
        </div>
      </div>
    </div>
  );
}
