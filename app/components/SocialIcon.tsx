import Link from "next/link";

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[var(--ds-r-pill)] border border-[var(--sf-line-strong)] bg-transparent text-[var(--sf-text)] transition-colors duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-[var(--sf-inverse-bg)] hover:bg-[var(--sf-inverse-bg)] hover:text-[var(--sf-inverse-text)]"
    >
      {icon}
    </Link>
  );
}

export default SocialIcon;
