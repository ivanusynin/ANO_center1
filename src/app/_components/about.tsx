"use client";

import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "./section-heading";
import { ABOUT_TABS } from "../_data/content";

export function About() {
  const first = ABOUT_TABS[0];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-background py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="О центре"
          title={
            <span id="about-title">
              Кто мы и зачем объединились
            </span>
          }
          description={
            <>
              АНО «Центр медицинских компетенций» — образовательная и
              экспертная площадка для врачей, которая с 2015 года развивает
              доказательную медицину и непрерывное профессиональное
              образование. Узнайте больше в разделах ниже.
            </>
          }
        />

        <Tabs
          defaultValue={first.id}
          className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12"
        >
          <TabsList
            aria-label="Разделы о центре"
            className="flex h-auto w-full flex-col items-stretch gap-1 rounded-2xl border border-border bg-card p-2 shadow-sm lg:sticky lg:top-28"
          >
            {ABOUT_TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="w-full justify-start gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                <span className="font-mono text-xs opacity-70 data-[state=active]:opacity-100">
                  0{ABOUT_TABS.indexOf(tab) + 1}
                </span>
                <span className="flex-1">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            {ABOUT_TABS.map((tab) => (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="mt-0 focus-visible:outline-none"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {tab.label}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  {tab.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                  {tab.body}
                </p>

                {tab.stats && (
                  <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {tab.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl bg-muted/60 p-4"
                      >
                        <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </dt>
                        <dd className="mt-1 font-display text-3xl font-bold text-primary">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {tab.bullets && (
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {tab.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 rounded-lg border border-border bg-background p-3"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium sm:text-base">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
