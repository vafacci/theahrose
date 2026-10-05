type ProfileBioProps = {
  bio: string;
};

export function ProfileBio({ bio }: ProfileBioProps) {
  return (
    <section className="px-6 pt-1 pb-4 text-center sm:px-10" aria-label="About">
      <div className="mx-auto mb-3 h-px w-16 bg-gradient-to-r from-transparent via-rose/70 to-transparent" />
      <p className="mx-auto max-w-[34ch] text-[15px] leading-relaxed font-medium text-cream/90">
        {bio}
      </p>
    </section>
  );
}
