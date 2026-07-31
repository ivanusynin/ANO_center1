"use client";

import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { NAV } from "../_data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDarkHero = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
        <a
          href="#top"
          aria-label="На главную"
          className={cn(
            "flex items-center gap-3 transition-colors",
            onDarkHero ? "text-white" : "text-foreground"
          )}
        >
          <Logo />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold">
              Центр медицинских компетенций
            </span>
            <span
              className={cn(
                "text-xs transition-colors",
                onDarkHero ? "text-white/70" : "text-muted-foreground"
              )}
            >
              АНО · Екатеринбург
            </span>
          </div>
        </a>

        <nav className="hidden lg:block" aria-label="Основная навигация">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    onDarkHero
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              "hidden transition-colors sm:inline-flex",
              onDarkHero
                ? "bg-white text-primary hover:bg-white/90"
                : ""
            )}
          >
            <a href="#contacts">
              <Phone className="size-4" />
              Связаться
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              onDarkHero
                ? "text-white hover:bg-white/10 hover:text-white"
                : ""
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container py-4" aria-label="Мобильная навигация">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-3 w-full">
              <a href="#contacts" onClick={() => setOpen(false)}>
                <Phone className="size-4" />
                Связаться
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
