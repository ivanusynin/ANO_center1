import Image from "next/image";
import { CalendarDays, MapPin, Sparkles, ArrowUpRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { EVENTS } from "../_data/content";
import { cn } from "@/lib/utils";

export function Events() {
  const [featured, ...rest] = EVENTS;

  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="relative bg-brand-gradient-soft py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="События"
          title={
            <span id="events-title">Ближайшие мероприятия</span>
          }
          description={
            <>
              Конференции, школы пациентов, клинические разборы и мастер-классы.
              Следите за обновлениями и присоединяйтесь к сообществу.
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {featured && (
            <article className="relative overflow-hidden rounded-3xl bg-primary text-white shadow-2xl ring-1 ring-inset ring-white/10">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/25" />
                <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent-on-ink px-3 py-1.5 text-xs font-semibold text-brand shadow-md">
                    <Sparkles className="size-3.5" />
                    {featured.tag}
                  </div>
                  {featured.earlySale && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-energy px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                      <Flame className="size-3.5" />
                      Ранняя запись
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-on-ink">
                    {featured.date} · {featured.weekday}
                  </p>
                  <h3 className="mt-2 max-w-xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-6 p-6 sm:p-8">
                <p className="text-base text-white/85 sm:text-lg">
                  {featured.description}
                </p>
                <dl className="grid gap-3 border-y border-white/15 py-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent-on-ink" />
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                        Место
                      </dt>
                      <dd className="text-sm font-medium">{featured.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 size-4 shrink-0 text-accent-on-ink" />
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                        Формат
                      </dt>
                      <dd className="text-sm font-medium">{featured.format}</dd>
                    </div>
                  </div>
                </dl>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent-on-ink text-brand hover:bg-accent-on-ink/90 sm:w-auto"
                >
                  <a href="#contacts">
                    Зарегистрироваться
                    <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </article>
          )}

          <ol className="relative space-y-6 border-l-2 border-primary/20 pl-6 sm:pl-8">
            {rest.map((event) => (
              <li key={event.isoDate} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[33px] top-1 flex size-4 items-center justify-center rounded-full bg-background ring-4 ring-primary/20"
                >
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <div
                  className={cn(
                    "rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                    event.earlySale ? "border-energy/60" : "border-border"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-display text-2xl font-bold leading-none text-primary sm:text-3xl">
                      {event.date}
                    </p>
                    <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-secondary">
                      {event.tag}
                    </span>
                    {event.earlySale && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-energy/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-energy">
                        <Flame className="size-3" />
                        Ранняя запись
                      </span>
                    )}
                    <span className="ml-auto font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {event.weekday}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-tight text-brand sm:text-xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5" />
                      {event.format}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
