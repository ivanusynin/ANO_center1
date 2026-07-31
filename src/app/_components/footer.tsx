import { NAV } from "../_data/content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand text-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 max-w-md text-sm text-white/75">
              АНО «Центр медицинских компетенций» — образовательная и
              экспертная площадка для врачей. Развиваем доказательную
              медицину и объединяем специалистов.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-on-ink">
              Навигация
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-on-ink">
              Правовая информация
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Устав центра
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Кодекс этики
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Отчётность
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} АНО «Центр медицинских компетенций».
            Все права защищены.
          </p>
          <p className="font-mono uppercase tracking-wider text-accent-on-ink">
            Сделано с заботой о пациентах
          </p>
        </div>
      </div>
    </footer>
  );
}
