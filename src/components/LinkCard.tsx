import { socialLabels, type ProfileLink } from "../data/profile";
import { ExternalIcon, PlatformIcon } from "./icons";

type LinkCardProps = {
  link: ProfileLink;
  ageLabel: string;
};

export function LinkCard({ link, ageLabel }: LinkCardProps) {
  const featured = Boolean(link.featured);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.accessibleName}
      className={`group relative block overflow-hidden rounded-[1.5rem] shadow-[0_14px_30px_rgba(0,0,0,0.35)] ring-1 transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        featured
          ? "col-span-2 aspect-[4/5] w-full max-w-none ring-white/20"
          : "aspect-[3/4] w-full max-w-[220px] justify-self-center ring-white/15"
      }`}
    >
      <img
        src={link.image}
        alt={link.imageAlt}
        width={featured ? 1000 : 750}
        height={featured ? 1250 : 1000}
        decoding="async"
        className={`absolute inset-0 z-0 h-full w-full object-cover transition duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-[1.03] ${link.imagePosition}`}
      />
      <span
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/25 to-transparent"
        aria-hidden="true"
      />
      <span className="relative z-[2] flex h-full flex-col justify-between p-3.5 sm:p-4">
        <span className="flex items-start justify-between gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-white/95 shadow-sm">
            <PlatformIcon platform={link.platform} className="size-4" />
            <span className="sr-only">{socialLabels[link.platform]}</span>
          </span>
          {link.showAgeLabel ? (
            <span className="rounded-full border border-white/35 bg-black/45 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md">
              {ageLabel}
            </span>
          ) : (
            <ExternalIcon className="size-4 text-white/85 transition motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          )}
        </span>
        <span className="text-left">
          <span
            className={`block leading-snug font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] ${
              featured ? "text-[1.15rem] sm:text-[1.3rem]" : "text-[0.9rem] sm:text-[0.95rem]"
            }`}
          >
            {link.title}
          </span>
        </span>
      </span>
    </a>
  );
}
