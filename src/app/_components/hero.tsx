"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "../_data/content";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-doctors.webp)" }}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/85"
      />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <h1
          id="hero-title"
          className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          АНО «Центр
          <br />
          медицинских компетенций»
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 sm:text-xl md:text-2xl">
          {HERO.description}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-h-12 rounded-md border border-primary/30 bg-white px-8 text-lg text-primary hover:bg-white/90"
          >
            <a href={HERO.primaryCta.href} data-testid="button-join">
              {HERO.primaryCta.label}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="min-h-12 rounded-md border-2 border-white bg-transparent px-8 text-lg text-white hover:bg-white/10"
          >
            <a href={HERO.secondaryCta.href} data-testid="button-research">
              {HERO.secondaryCta.label}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="min-h-12 rounded-md border border-transparent bg-transparent px-8 text-lg text-white hover:bg-white/10"
          >
            <a href={HERO.tertiaryCta.href} data-testid="button-contacts-hero">
              {HERO.tertiaryCta.label}
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown className="size-6" strokeWidth={2} />
      </a>
    </section>
  );
}
