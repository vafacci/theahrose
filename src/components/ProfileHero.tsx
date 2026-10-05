import type { SocialItem } from "./SocialIcons";
import { HeroVideo } from "./HeroVideo";
import { SocialIcons } from "./SocialIcons";

type ProfileHeroProps = {
  name: string;
  handle: string;
  location: string;
  disclosure: string;
  hero: {
    mp4: string;
    webm: string;
    poster: string;
  };
  socials: readonly SocialItem[];
};

export function ProfileHero({
  name,
  handle,
  location,
  disclosure,
  hero,
  socials,
}: ProfileHeroProps) {
  return (
    <header className="relative h-[min(62svh,600px)] min-h-[420px] overflow-hidden">
      <HeroVideo
        mp4={hero.mp4}
        webm={hero.webm}
        poster={hero.poster}
        label={`Portrait of ${name}`}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink from-[10%] via-[#1a1014]/75 via-[42%] to-rose/15 to-[72%]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-5 pt-24 pb-5 text-center sm:px-8">
        <h1 className="font-display text-[2.75rem] leading-none font-semibold tracking-wide text-cream italic drop-shadow-[0_8px_24px_rgba(239,154,171,0.35)] sm:text-[3.35rem]">
          {name}
        </h1>
        <p className="mt-2.5 text-[15px] font-semibold tracking-wide text-blush">
          {handle}
        </p>
        <p className="mt-1 text-sm font-medium text-cream/75">{location}</p>
        <p className="mt-3 rounded-full border border-rose/40 bg-gradient-to-r from-rose/25 to-plum/20 px-3.5 py-1 text-[12px] font-semibold tracking-wide text-soft backdrop-blur-md">
          {disclosure}
        </p>
        <div className="pointer-events-auto mt-5">
          <SocialIcons items={socials} />
        </div>
      </div>
    </header>
  );
}
