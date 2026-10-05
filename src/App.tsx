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
          className="h-full w-full scale-110 object-cover blur-3xl brightness-[0.72] saturate-150"
        />
        <div className="absolute inset-0 bg-[#1a1216]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(243,168,184,0.42),transparent_42%),radial-gradient(circle_at_85%_5%,rgba(212,184,216,0.32),transparent_38%),linear-gradient(to_bottom,rgba(120,45,75,0.28),rgba(20,15,18,0.78))]" />
      </div>

      <main className="mx-auto w-full max-w-[540px] md:px-3 md:py-8">
        <div className="overflow-hidden bg-gradient-to-b from-ink via-[#1a1216] to-[#1f1419] shadow-[0_30px_80px_rgba(120,40,70,0.38)] md:rounded-[32px] md:ring-1 md:ring-rose/25">
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
            className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-3.5 px-4 pb-6 sm:gap-x-4 sm:px-5 sm:pb-7"
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
