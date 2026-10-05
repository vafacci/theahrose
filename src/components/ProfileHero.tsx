import type { SocialItem } from "./SocialIcons";
import { HeroVideo } from "./HeroVideo";
import { SocialIcons } from "./SocialIcons";

type ProfileHeroProps = {
  name: string;
  handle: string;
  location: string;
  bio: string;
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
  bio,
  hero,
  socials,
}: ProfileHeroProps) {
  return (
    <header className="relative h-[min(72svh,720px)] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroVideo
          mp4={hero.mp4}
          webm={hero.webm}
          poster={hero.poster}
          label={`Portrait of ${name}`}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black from-[8%] via-black/75 via-[42%] to-transparent to-[70%]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-5 pt-28 pb-7 text-center sm:px-8">
        <h1 className="text-[2.6rem] leading-none font-bold tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-[3.1rem]">
          {name}
        </h1>
        <p className="mt-2 text-[15px] font-medium text-white/90">{handle}</p>
        <p className="mt-3 text-[14px] font-semibold text-white">{location}</p>
        <p className="mt-2 max-w-[32ch] text-[14px] leading-relaxed font-medium text-white/90">
          {bio}
        </p>
        <div className="pointer-events-auto mt-5">
          <SocialIcons items={socials} />
        </div>
      </div>
    </header>
  );
}
