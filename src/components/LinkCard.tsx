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
      className={`group relative block overflow-hidden rounded-[22px] shadow-[0_16px_40px_rgba(0,0,0,0.38)] ring-1 transition motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        link.featured
          ? "h-[180px] ring-rose/50 sm:h-[196px]"
          : "h-[142px] ring-white/10 sm:h-[150px]"
      }`}
    >
      <img
        src={link.image}
        alt={link.imageAlt}
        width={1000}
        height={1778}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-[1.04] ${link.imagePosition}`}
      />
      <span
        className={`absolute inset-0 ${
          link.featured
            ? "bg-gradient-to-t from-black/80 via-black/35 to-black/10"
            : "bg-gradient-to-t from-black/82 via-black/38 to-black/12"
        }`}
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"
        aria-hidden="true"
      />
      <span className="relative flex h-full flex-col justify-end p-4 sm:p-5">
        <span className="mb-3 flex size-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm">
          <PlatformIcon platform={link.platform} className="size-[18px]" />
          <span className="sr-only">{socialLabels[link.platform]}</span>
        </span>
        <span className="flex items-end justify-between gap-3">
          <span className="text-[1.28rem] leading-tight font-medium text-white drop-shadow-sm sm:text-[1.4rem]">
            {link.title}
            {link.showAgeLabel ? (
              <span className="ms-2 inline-flex translate-y-[-2px] items-center rounded-full border border-white/30 bg-black/45 px-1.5 py-0.5 align-middle text-[11px] font-semibold tracking-wide text-cream">
                {ageLabel}
              </span>
            ) : null}
          </span>
          <ExternalIcon className="mb-1 size-5 shrink-0 text-white/80 transition motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        </span>
      </span>
    </a>
  );
}
