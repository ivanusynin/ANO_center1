"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { ACTIVITIES } from "../_data/content";
import { cn } from "@/lib/utils";

export function Activities() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section
      id="activities"
      aria-labelledby="activities-title"
      className="relative overflow-hidden bg-card py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Деятельность"
            title={
              <span id="activities-title">
                Чем занимается центр
              </span>
            }
            description={
              <>
                Шесть ключевых направлений работы: от клинических исследований
                до методических материалов для врачей. Листайте, чтобы увидеть все.
              </>
            }
          />

          <div className="flex shrink-0 items-center gap-2 lg:pb-2">
            <Button
              variant="outline"
              size="icon"
              className="size-12 rounded-full border-border bg-background shadow-sm [&_svg]:size-5"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Предыдущий слайд"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-12 rounded-full border-border bg-background shadow-sm [&_svg]:size-5"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              aria-label="Следующий слайд"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          setApi={setApi}
          className="mt-10"
        >
          <CarouselContent className="-ml-4">
            {ACTIVITIES.map((activity, idx) => {
              const Icon = activity.icon;
              const accent = idx % 3;
              return (
                <CarouselItem
                  key={activity.title}
                  className={cn("pl-4", "basis-full", "sm:basis-1/2", "lg:basis-1/3")}
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div
                      aria-hidden
                      className={cn(
                        "flex h-32 items-end p-6 text-white",
                        accent === 0 && "bg-brand",
                        accent === 1 && "bg-primary",
                        accent === 2 &&
                          "bg-brand-gradient-ink ring-1 ring-inset ring-accent/40"
                      )}
                    >
                      <Icon
                        className={cn(
                          "size-12 transition-transform group-hover:scale-110",
                          accent === 2 && "text-accent-on-ink"
                        )}
                      />
                      <span
                        className={cn(
                          "ml-auto font-mono text-[10px] uppercase tracking-widest",
                          accent === 2 ? "text-accent-on-ink opacity-80" : "opacity-80"
                        )}
                      >
                        0{idx + 1} / 0{ACTIVITIES.length}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                        {activity.tag}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-brand sm:text-2xl">
                        {activity.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                        {activity.description}
                      </p>
                      <ul className="mt-6 space-y-2 border-t border-border pt-4">
                        {activity.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <span
                              aria-hidden
                              className={cn(
                                "size-1.5 rounded-full",
                                accent === 0 && "bg-brand",
                                accent === 1 && "bg-primary",
                                accent === 2 && "bg-accent-on-ink"
                              )}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contacts"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-brand"
                      >
                        Узнать подробнее
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <p className="mt-6 text-center text-sm text-muted-foreground lg:text-left">
          <span className="font-mono uppercase tracking-wider text-foreground/60">
            Подсказка:
          </span>{" "}
          используйте стрелки на клавиатуре ← → для перелистывания
        </p>
      </div>
    </section>
  );
}
