"use client";

import React, {
  createContext,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type WaitlistContextValue = {
  openWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist() {
  const value = useContext(WaitlistContext);

  if (!value) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }

  return value;
}

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const openWaitlist = useCallback(() => {
    setIsSubmitted(false);
    setSubmitError(null);
    setIsOpen(true);
  }, []);

  const closeWaitlist = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstNameRef.current?.focus(), 80);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeWaitlist();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeWaitlist, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          email: formData.get("email"),
          privacy: formData.get("privacy") === "on",
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(body?.error ?? "Nem sikerult a feliratkozas.");
      }

      event.currentTarget.reset();
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Nem sikerult a feliratkozas.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#1a1917]/45 px-4 py-4 backdrop-blur-sm md:items-center md:px-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeWaitlist();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="relative w-full max-w-[560px] overflow-hidden rounded-[32px] border border-border-default bg-bg-cream shadow-[0_24px_80px_rgba(47,29,65,0.22)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-card-pink/70" />
            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-card-blue/80" />

            <button
              type="button"
              aria-label="Bezárás"
              onClick={closeWaitlist}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-default bg-white/80 text-text-main transition-colors hover:bg-white"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ×
              </span>
            </button>

            <div className="relative z-10 px-6 py-8 sm:px-8 md:px-10 md:py-10">
              {!isSubmitted ? (
                <>
                  <div className="mb-7 flex flex-col gap-3 pr-10">
                    <span className="font-caveat text-base uppercase tracking-[-0.32px] text-brand-coral-dark">
                      Várólista
                    </span>
                    <h2
                      id="waitlist-title"
                      className="font-parkinsans text-[32px] font-semibold leading-[1.1] tracking-[-0.64px] text-text-main md:text-[40px]"
                    >
                      Csatlakozz az elsők között.
                    </h2>
                    <p className="max-w-[430px] text-base leading-[26px] text-text-desc md:text-lg">
                      Írd be az adataid, és elsőként értesítünk az indulásról
                      és a promóciós helyekről.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="font-source-sans text-sm font-medium text-text-main">
                        Keresztnév
                      </span>
                      <input
                        ref={firstNameRef}
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        className="h-13 rounded-[18px] border border-border-default bg-white/80 px-4 text-base text-text-main outline-none transition-colors placeholder:text-text-desc/60 focus:border-brand-coral-dark"
                        placeholder="Pl. Anna"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-source-sans text-sm font-medium text-text-main">
                        Email cím
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="h-13 rounded-[18px] border border-border-default bg-white/80 px-4 text-base text-text-main outline-none transition-colors placeholder:text-text-desc/60 focus:border-brand-coral-dark"
                        placeholder="email@pelda.hu"
                      />
                    </label>

                    <label className="mt-1 flex items-start gap-3 text-sm leading-5 text-text-desc">
                      <input
                        name="privacy"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-border-default accent-brand-coral-dark"
                      />
                      <span>
                        Elfogadom, hogy a Grow With You az email címemre
                        értesítést küldjön az indulásról. Az{" "}
                        <a
                          href="/adatkezelesi-tajekoztato"
                          className="cursor-pointer font-medium text-text-main underline underline-offset-2 transition-colors hover:text-brand-coral-dark"
                        >
                          adatkezelési tájékoztatót
                        </a>{" "}
                        elolvastam.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-3 cursor-pointer rounded-[100px] border border-border-default bg-brand-coral px-8 py-4 font-source-sans text-lg font-semibold leading-6 text-text-main shadow-sm transition-colors hover:bg-brand-coral-dark disabled:cursor-not-allowed disabled:opacity-65"
                    >
                      {isSubmitting ? "Küldés..." : "Feliratkozom"}
                    </button>

                    {submitError && (
                      <p
                        role="alert"
                        className="rounded-[18px] border border-brand-coral-dark/30 bg-white/70 px-4 py-3 text-sm leading-5 text-text-main"
                      >
                        {submitError}
                      </p>
                    )}
                  </form>
                </>
              ) : (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-card-yellow text-[34px] text-text-main">
                    ✓
                  </div>
                  <h2
                    id="waitlist-title"
                    className="font-parkinsans text-[32px] font-semibold leading-[1.1] tracking-[-0.64px] text-text-main md:text-[40px]"
                  >
                    Köszönjük, felírtunk.
                  </h2>
                  <p className="mt-4 max-w-[390px] text-base leading-[26px] text-text-desc md:text-lg">
                    Elsőként értesítünk, amikor megnyílik a várólista következő
                    lépése.
                  </p>
                  <button
                    type="button"
                    onClick={closeWaitlist}
                    className="mt-8 cursor-pointer rounded-[100px] border border-border-default bg-brand-coral px-8 py-4 font-source-sans text-lg font-semibold leading-6 text-text-main transition-colors hover:bg-brand-coral-dark"
                  >
                    Rendben
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </WaitlistContext.Provider>
  );
}
