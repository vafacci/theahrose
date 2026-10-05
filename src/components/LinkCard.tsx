import { socialLabels, type ProfileLink } from "../data/profile";
import { ExternalIcon, PlatformIcon } from "./icons";

type LinkCardProps = {
  link: ProfileLink;
  ageLabel: string;
};

export function LinkCard({ link, ageLabel }: LinkCardProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.accessibleName}
      className={`group relative mx-auto block w-full max-w-[220px] aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-[0_14px_30px_rgba(120,40,70,0.28)] ring-1 transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_36px_rgba(239,154,171,0.35)] motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        link.featured ? "ring-rose/60" : "ring-soft/25"
      }`}
    >
      <img
        src={link.image}
        alt={link.imageAlt}
        width={750}
        height={1000}
        decoding="async"
        className={`absolute inset-0 z-0 h-full w-full object-cover transition duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-[1.05] ${link.imagePosition}`}
      />
      <span
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1520]/80 via-[#2a1520]/15 to-rose/15"
        aria-hidden="true"
      />
      <span className="relative z-[2] flex h-full flex-col justify-between p-3">
        <span className="flex items-start justify-between gap-2">
          <span className="flex size-7 items-center justify-center rounded-full border border-soft/40 bg-ink/35 text-soft backdrop-blur-md">
            <PlatformIcon platform={link.platform} className="size-3.5" />
            <span className="sr-only">{socialLabels[link.platform]}</span>
          </span>
          {link.showAgeLabel ? (
            <span className="rounded-full border border-soft/40 bg-ink/40 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-soft backdrop-blur-md">
              {ageLabel}
            </span>
          ) : (
            <ExternalIcon className="size-3.5 text-soft/85 transition motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          )}
        </span>
        <span className="text-left">
          <span className="block text-[0.88rem] leading-snug font-semibold text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-[0.95rem]">
            {link.title}
          </span>
        </span>
      </span>
    </a>
  );
}
