import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "mark";
}) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10 w-10", className)}
        aria-label="АНО «Центр медицинских компетенций»"
      >
        <rect width="48" height="48" rx="12" fill="hsl(var(--brand))" />
        <path
          d="M24 12v24M14 22h20M18 32l6-6 6 6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="36" r="3" fill="hsl(var(--accent))" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      aria-label="АНО «Центр медицинских компетенций»"
    >
      <rect width="48" height="48" rx="12" fill="hsl(var(--brand))" />
      <path
        d="M24 12v24M14 22h20M18 32l6-6 6 6"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="36" r="3" fill="hsl(var(--accent))" />
      <text
        x="58"
        y="22"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="0.5"
      >
        ЦМК
      </text>
      <text
        x="58"
        y="36"
        fontFamily="var(--font-display)"
        fontSize="9"
        fontWeight="500"
        fill="currentColor"
        opacity="0.7"
        letterSpacing="0.3"
      >
        МЕДИЦИНСКИЕ КОМПЕТЕНЦИИ
      </text>
    </svg>
  );
}
