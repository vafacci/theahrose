import { useId } from "react";
import type { SocialPlatform } from "../data/profile";

type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill={`url(#${gradientId})`} />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="#fff" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#25F4EE"
        d="M14.35 3.2c.32 1.95 1.4 3.4 3.35 3.85v2.15a6.1 6.1 0 0 1-3.35-1.05v5.55a5.05 5.05 0 1 1-5.05-5.05c.25 0 .5.02.75.06v2.25a2.8 2.8 0 1 0 1.98 2.7V3.2h2.32Z"
        transform="translate(0.35 0.2)"
      />
      <path
        fill="#FE2C55"
        d="M13.65 2.5c.32 1.95 1.4 3.4 3.35 3.85v2.15a6.1 6.1 0 0 1-3.35-1.05v5.55a5.05 5.05 0 1 1-5.05-5.05c.25 0 .5.02.75.06v2.25a2.8 2.8 0 1 0 1.98 2.7V2.5h2.32Z"
        transform="translate(-0.35 -0.2)"
      />
      <path
        fill="#111"
        d="M14 2.85c.32 1.95 1.4 3.4 3.35 3.85v2.15a6.1 6.1 0 0 1-3.35-1.05v5.55a5.05 5.05 0 1 1-5.05-5.05c.25 0 .5.02.75.06v2.25a2.8 2.8 0 1 0 1.98 2.7V2.85H14Z"
      />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#111" />
      <path
        fill="#fff"
        d="M14.55 10.35 19.2 5h-1.1l-4.05 4.55L10.8 5H6.6l4.9 6.75L6.4 19h1.1l4.3-4.85L15.2 19h4.2l-4.85-8.65Zm-1.5 1.7-.5-.7-3.95-5.35h1.7l3.2 4.3.5.7 4.15 5.6h-1.7l-3.4-4.55Z"
      />
    </svg>
  );
}

export function FanvueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#C8F500" />
      <path
        fill="#050505"
        d="M7.1 18.2V5.8h9.55v2.15H9.65v4.2H16.1v2.12H9.65v6.53H7.1Z"
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
