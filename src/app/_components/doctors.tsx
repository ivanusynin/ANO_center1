import Image from "next/image";
import { DOCTORS } from "../_data/content";

export function Doctors() {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-title"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="doctors-title"
          className="mb-16 text-center text-4xl font-bold text-foreground md:text-5xl"
        >
          Специалисты центра
        </h2>

        <ul
          role="list"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {DOCTORS.map((doctor, idx) => (
            <li
              key={doctor.name}
              data-testid={`doctor-card-${idx}`}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  width={600}
                  height={450}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-card-foreground">
                  {doctor.name}
                </h3>
                <p className="mb-1 text-sm font-medium text-primary">
                  {doctor.specialty}
                </p>
                <p className="mb-3 text-sm text-muted-foreground">
                  {doctor.category}
                </p>
                <div className="border-t border-accent/20 pt-3">
                  <p className="text-sm font-medium text-accent">
                    {doctor.committee}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
