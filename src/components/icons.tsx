import type { SocialPlatform } from "../data/profile";

type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.05" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 3.1c.35 2.15 1.55 3.75 3.7 4.25v2.35a6.7 6.7 0 0 1-3.7-1.15v6.15a5.55 5.55 0 1 1-5.55-5.55c.28 0 .55.02.82.07v2.48a3.1 3.1 0 1 0 2.18 2.97V3.1h2.55Z"
      />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.7 10.4 21.4 3h-1.6l-5.8 6.4L9.3 3H3.4l7 9.7L3.4 21h1.6l6.2-6.8 4.9 6.8h5.9l-7.3-10.6Zm-2.2 2.4-.7-1-5.7-7.7h2.4l4.6 6.2.7 1 6 8.1h-2.4l-4.9-6.6Z"
      />
    </svg>
  );
}

export function FanvueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.1 2.6c2.3.2 4.3 1.5 5.4 3.5 1.1 2 1.1 4.4 0 6.4-.8 1.5-2.1 2.6-3.6 3.3 1 .8 1.6 1.9 1.7 3.2.1 1.6-1 3-2.6 3.2-1.8.2-3.4-.9-3.8-2.6-.3-1.2.1-2.3.9-3.2-1.7-.5-3.1-1.6-4-3.1-1.3-2.2-1.2-5 .2-7.1 1.3-1.9 3.4-3 5.8-3.6Zm-.4 2.4c-1.5.4-2.8 1.3-3.6 2.6-.9 1.5-.9 3.4 0 4.9.7 1.1 1.8 1.9 3.1 2.2.3-1.3 1.1-2.3 2.2-3 .9-.6 1.4-1.5 1.4-2.5 0-1.7-1.2-3.1-2.8-3.5-.1-.2-.2-.5-.3-.7Z"
      />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M8 16 16 8M9 8h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const platformIcons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  fanvue: FanvueIcon,
} as const;

export function PlatformIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  const Icon = platformIcons[platform];
  return <Icon className={className} />;
}
