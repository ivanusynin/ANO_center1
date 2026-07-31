import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <span aria-hidden className="h-px w-6 bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
      {children}
    </div>
  );
}
