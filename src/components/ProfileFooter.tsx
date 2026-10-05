type ProfileFooterProps = {
  name: string;
  disclosure: string;
};

export function ProfileFooter({ name, disclosure }: ProfileFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-2 pb-8 text-center">
      <p className="text-xs tracking-wide text-cream/70">{`${name} is an ${disclosure}.`}</p>
      <p className="mt-1 text-xs text-cream/45">
        © {year} {name}
      </p>
    </footer>
  );
}
