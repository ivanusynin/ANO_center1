import { BRAND } from "../_data/content";

export function BrandStrip() {
  return (
    <section
      aria-label="Фирменный стиль центра"
      className="border-b border-white/10 bg-ink text-white"
    >
      <div className="container grid gap-6 py-5 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-on-ink">
            Фирменный стиль · {BRAND.shortName}
          </p>
          <h2 className="mt-1 font-display text-base font-semibold text-white sm:text-lg">
            Палитра и типографика
          </h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {BRAND.colors.map((c) => (
              <li
                key={c.hex}
                className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-3"
              >
                <span
                  aria-hidden
                  className="size-7 rounded-full ring-2 ring-accent-on-ink/60"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="flex flex-col leading-tight">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-wide text-white">
                    {c.name}
                  </span>
                  <span className="font-mono text-[10px] text-white/60">
                    {c.hex}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {BRAND.fonts.map((f) => (
            <div
              key={f.role}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent-on-ink/80">
                {f.role}
              </p>
              <p
                className="mt-1 text-xl font-bold leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Аа Бб
              </p>
              <p className="font-mono text-[11px] text-white/70">{f.family}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
