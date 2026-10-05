type ProfileFooterProps = {
  name: string;
  disclosure: string;
};

export function ProfileFooter({ name, disclosure }: ProfileFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-3 pb-8 text-center">
      <p className="text-xs tracking-wide text-blush/80">{`${name} is an ${disclosure}.`}</p>
      <p className="mt-1 text-xs text-cream/40">
        © {year} {name}
      </p>
    </footer>
  );
}
