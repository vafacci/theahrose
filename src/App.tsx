import { LinkCard } from "./components/LinkCard";
import { ProfileFooter } from "./components/ProfileFooter";
import { ProfileHero } from "./components/ProfileHero";
import { profile } from "./data/profile";

export default function App() {
  const socials = profile.socialOrder.map((id) => ({
    id,
    href: profile.socials[id],
    showAgeLabel: id === "fanvue",
    ageLabel: profile.ageLabel,
  }));

  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <img
          src={profile.hero.poster}
          alt=""
          className="h-full w-full scale-110 object-cover blur-3xl brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <main className="mx-auto w-full max-w-[540px] md:px-3 md:py-8">
        <div className="overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:rounded-[28px]">
          <ProfileHero
            name={profile.name}
            handle={profile.handle}
            location={profile.location}
            bio={profile.bio}
            hero={profile.hero}
            socials={socials}
          />

          <section
            className="grid grid-cols-2 gap-3 px-4 pt-4 pb-6 sm:gap-3.5 sm:px-5 sm:pb-7"
            aria-label="Links"
          >
            {profile.links.map((link) => (
              <LinkCard key={link.id} link={link} ageLabel={profile.ageLabel} />
            ))}
          </section>
        </div>

        <ProfileFooter name={profile.name} disclosure={profile.disclosure} />
      </main>
    </div>
  );
}
