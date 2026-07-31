"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 700);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-secondary/30 bg-secondary/5 p-8 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-secondary/15 text-secondary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold">Спасибо!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Ваше сообщение отправлено. Мы свяжемся с вами в течение рабочего дня.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Отправить ещё одно
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" htmlFor="name">
          <Input id="name" name="name" required placeholder="Иван Петров" autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
      </div>
      <Field label="Тема" htmlFor="subject">
        <Input
          id="subject"
          name="subject"
          required
          placeholder="Регистрация на событие / партнёрство / консультация"
        />
      </Field>
      <Field label="Сообщение" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Кратко опишите ваш вопрос или запрос"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          required
          className="mt-1 size-4 rounded border-border text-primary accent-primary"
        />
        <span className="text-muted-foreground">
          Согласен на обработку персональных данных в соответствии с политикой
          конфиденциальности центра.
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className={cn("w-full sm:w-auto", status === "submitting" && "opacity-70")}
      >
        {status === "submitting" ? "Отправляем..." : "Отправить сообщение"}
        <Send />
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label}
      </label>
      {children}
    </div>
  );
}
