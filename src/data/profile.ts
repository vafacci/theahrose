export const socials = {
  instagram: "https://www.instagram.com/theahrose/",
  tiktok: "https://www.tiktok.com/@theahrose",
  x: "https://x.com/itsmetheahrose",
  fanvue: "https://www.fanvue.com/theahrose",
} as const;

export type SocialPlatform = keyof typeof socials;

export type ProfileLink = {
  id: string;
  platform: SocialPlatform;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  accessibleName: string;
  featured?: boolean;
  showAgeLabel?: boolean;
};

export const profile = {
  name: "Theah Rose",
  handle: "@theahrose",
  location: "Miami / Copenhagen",
  bio: "Sharing my daily life, favorite looks and a little extra sparkle 💗",
  disclosure: "AI-generated virtual creator",
  ageLabel: "18+",
  hero: {
    mp4: "/media/theah-hero.mp4",
    webm: "/media/theah-hero.webm",
    poster: "/media/theah-hero-poster.webp",
  },
  socials,
  socialOrder: ["fanvue", "instagram", "x", "tiktok"] as const satisfies readonly SocialPlatform[],
  links: [
    {
      id: "fanvue",
      platform: "fanvue",
      title: "My exclusive world 💗",
      href: socials.fanvue,
      image: "/media/cards/fanvue-wide.webp",
      imageAlt: "Theah Rose in a leopard-print top with gold jewelry",
      imagePosition: "object-[center_12%]",
      accessibleName: "My exclusive world on Fanvue, 18+. Opens in a new tab.",
      featured: true,
      showAgeLabel: true,
    },
    {
      id: "instagram",
      platform: "instagram",
      title: "Follow me on Instagram ✨",
      href: socials.instagram,
      image: "/media/cards/instagram.webp",
      imageAlt: "Theah Rose in a sparkling pink dress on a balcony at dusk",
      imagePosition: "object-[center_12%]",
      accessibleName: "Follow me on Instagram. Opens in a new tab.",
    },
    {
      id: "tiktok",
      platform: "tiktok",
      title: "Watch me on TikTok 🎀",
      href: socials.tiktok,
      image: "/media/cards/tiktok.webp",
      imageAlt: "Theah Rose in a red and white striped top eating ice cream",
      imagePosition: "object-[center_22%]",
      accessibleName: "Watch me on TikTok. Opens in a new tab.",
    },
  ] satisfies ProfileLink[],
};

export const socialLabels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
  fanvue: "Fanvue",
};
