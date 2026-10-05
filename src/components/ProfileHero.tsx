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
    <header className="relative h-[min(72svh,720px)] min-h-[460px] overflow-hidden">
      <HeroVideo
        mp4={hero.mp4}
        webm={hero.webm}
        poster={hero.poster}
        label={`Portrait of ${name}`}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink from-[6%] via-ink/80 via-[34%] to-transparent to-[64%]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-5 pt-28 pb-6 text-center sm:px-8">
        <h1 className="text-[2.35rem] leading-none font-semibold tracking-tight text-white sm:text-5xl">
          {name}
        </h1>
        <p className="mt-2 text-[15px] font-medium text-white/75">{handle}</p>
        <p className="mt-1 text-sm text-cream/80">{location}</p>
        <p className="mt-3 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[12px] font-medium tracking-wide text-cream backdrop-blur-md">
          {disclosure}
        </p>
        <div className="pointer-events-auto mt-5">
          <SocialIcons items={socials} />
        </div>
      </div>
    </header>
  );
}
