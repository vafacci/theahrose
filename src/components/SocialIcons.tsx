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
    <ul className="flex items-center justify-center gap-3" aria-label="Social links">
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
              className="relative flex size-11 items-center justify-center rounded-full border border-rose/40 bg-rose/20 text-soft shadow-[0_8px_24px_rgba(239,154,171,0.22)] backdrop-blur-md transition motion-safe:duration-200 motion-safe:hover:scale-110 motion-safe:active:scale-95 hover:border-blush hover:bg-blush/30 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <PlatformIcon platform={item.id} className="size-[20px]" />
            </a>
            {item.showAgeLabel ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-1.5 -right-2 rounded-full bg-soft px-1.5 py-0.5 text-[10px] leading-none font-semibold tracking-wide text-ink shadow-sm"
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
