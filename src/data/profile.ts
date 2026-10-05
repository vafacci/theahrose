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
  socialOrder: ["instagram", "tiktok", "x", "fanvue"] as const satisfies readonly SocialPlatform[],
  links: [
    {
      id: "fanvue",
      platform: "fanvue",
      title: "My exclusive world 💗",
      href: socials.fanvue,
      image: "/media/cards/fanvue.webp",
      imageAlt: "Theah Rose in a red evening dress",
      imagePosition: "object-[center_16%]",
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
      imageAlt: "Theah Rose at a café with a coffee",
      imagePosition: "object-[center_22%]",
      accessibleName: "Follow me on Instagram. Opens in a new tab.",
    },
    {
      id: "tiktok",
      platform: "tiktok",
      title: "Watch me on TikTok 🎀",
      href: socials.tiktok,
      image: "/media/cards/tiktok.webp",
      imageAlt: "Theah Rose in a rose-colored gym set",
      imagePosition: "object-[center_18%]",
      accessibleName: "Watch me on TikTok. Opens in a new tab.",
    },
    {
      id: "x",
      platform: "x",
      title: "Follow my thoughts on X",
      href: socials.x,
      image: "/media/cards/x.webp",
      imageAlt: "Theah Rose sitting on a bed in a white top",
      imagePosition: "object-[center_28%]",
      accessibleName: "Follow my thoughts on X. Opens in a new tab.",
    },
  ] satisfies ProfileLink[],
};

export const socialLabels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
  fanvue: "Fanvue",
};
