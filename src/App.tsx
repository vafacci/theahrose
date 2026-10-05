import { LinkCard } from "./components/LinkCard";
import { ProfileBio } from "./components/ProfileBio";
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
          className="h-full w-full scale-110 object-cover blur-3xl brightness-75"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,176,212,0.22),transparent_42%),linear-gradient(to_bottom,rgba(80,24,40,0.28),rgba(12,10,12,0.78))]" />
      </div>

      <main className="mx-auto w-full max-w-[580px] md:px-3 md:py-8">
        <div className="overflow-hidden bg-ink md:rounded-[28px] md:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <ProfileHero
            name={profile.name}
            handle={profile.handle}
            location={profile.location}
            disclosure={profile.disclosure}
            hero={profile.hero}
            socials={socials}
          />
          <ProfileBio bio={profile.bio} />

          <section
            className="flex flex-col gap-3 px-3 pb-4 sm:px-4 sm:pb-5"
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
