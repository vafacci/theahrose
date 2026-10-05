import type { SocialItem } from "./SocialIcons";
import { HeroVideo } from "./HeroVideo";
import { SocialIcons } from "./SocialIcons";

type ProfileHeroProps = {
  name: string;
  handle: string;
  hero: {
    mp4: string;
    webm: string;
    poster: string;
  };
  socials: readonly SocialItem[];
};

export function ProfileHero({ name, handle, hero, socials }: ProfileHeroProps) {
  return (
    <header className="relative h-[min(78svh,760px)] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroVideo
          mp4={hero.mp4}
          webm={hero.webm}
          poster={hero.poster}
          label={`Portrait of ${name}`}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[38%] bg-gradient-to-t from-black via-black/55 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-5 pb-4 text-center sm:px-8">
        <h1 className="font-display text-[2.55rem] leading-none font-medium tracking-[0.02em] text-white italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-[3rem]">
          {name}
        </h1>
        <p className="mt-1.5 text-[13px] font-medium text-white/85">{handle}</p>
        <div className="pointer-events-auto mt-3">
          <SocialIcons items={socials} />
        </div>
      </div>
    </header>
  );
}
