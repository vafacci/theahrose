type ProfileBioProps = {
  bio: string;
};

export function ProfileBio({ bio }: ProfileBioProps) {
  return (
    <section className="bg-ink px-6 pt-1 pb-5 text-center sm:px-10" aria-label="About">
      <p className="mx-auto max-w-[34ch] text-[15px] leading-relaxed text-cream/90">{bio}</p>
    </section>
  );
}
