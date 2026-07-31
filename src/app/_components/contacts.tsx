import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";
import { CONTACTS } from "../_data/content";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, string> = {
  ВКонтакте: "VK",
  Telegram: "TG",
  YouTube: "YT",
  Дзен: "Я",
};

export function Contacts() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="relative bg-background py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Контакты"
          title={
            <span id="contacts-title">Свяжитесь с нами</span>
          }
          description={
            <>
              Готовы ответить на ваши вопросы, помочь с регистрацией на
              мероприятие или обсудить партнёрство. Используйте удобный канал.
            </>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[5fr_6fr] lg:gap-12">
          <div className="space-y-6">
            <ContactCard
              icon={Phone}
              label="Телефон"
              value={CONTACTS.phone}
              href={CONTACTS.phoneHref}
              accent="primary"
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={CONTACTS.email}
              href={CONTACTS.emailHref}
              accent="secondary"
            />
            <ContactCard
              icon={MapPin}
              label="Адрес"
              value={CONTACTS.address}
              accent="primary"
            />
            <ContactCard
              icon={Clock}
              label="Часы работы"
              value={CONTACTS.hours}
              accent="secondary"
            />

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Мы в соцсетях
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CONTACTS.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex h-full flex-col items-start gap-2 rounded-xl border border-border bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                    >
                      <span
                        className="flex size-9 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
                        aria-hidden
                      >
                        {SOCIAL_ICONS[s.name] ?? s.name.slice(0, 2)}
                      </span>
                      <span className="text-sm font-semibold">{s.name}</span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Send className="size-4" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">
                  Форма обратной связи
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ответим в течение одного рабочего дня
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  accent: "primary" | "secondary";
}) {
  const content = (
    <div
      className={cn(
        "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors",
        href && "hover:border-primary/40 hover:shadow-md"
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground",
          accent === "primary" ? "bg-primary" : "bg-secondary"
        )}
      >
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
          {label}
        </p>
        <p className="mt-0.5 truncate font-display text-base font-semibold sm:text-lg">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}
