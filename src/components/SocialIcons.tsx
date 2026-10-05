import { socialLabels, type SocialPlatform } from "../data/profile";
import { PlatformIcon } from "./icons";

export type SocialItem = {
  id: SocialPlatform;
  href: string;
  showAgeLabel?: boolean;
  ageLabel?: string;
};

type SocialIconsProps = {
  items: readonly SocialItem[];
};

export function SocialIcons({ items }: SocialIconsProps) {
  return (
    <ul className="flex items-center justify-center gap-2.5 sm:gap-3" aria-label="Social links">
      {items.map((item) => {
        const name = socialLabels[item.id];
        const label = item.showAgeLabel
          ? `${name}, ${item.ageLabel}. Opens in a new tab.`
          : `${name}. Opens in a new tab.`;

        return (
          <li key={item.id} className="relative">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="relative flex size-11 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition motion-safe:duration-200 motion-safe:hover:scale-110 motion-safe:active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:size-12"
            >
              <PlatformIcon platform={item.id} className="size-[26px] sm:size-[28px]" />
            </a>
            {item.showAgeLabel ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-1.5 -right-2 rounded-full bg-white px-1.5 py-0.5 text-[10px] leading-none font-semibold tracking-wide text-black shadow-sm"
              >
                {item.ageLabel}
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
