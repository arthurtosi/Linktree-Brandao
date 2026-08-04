import { IconType } from "react-icons";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  icon: IconType; // O ícone será um componente React
  variant?: "primary" | "secondary";
}

const base =
  "flex items-center justify-center gap-2 w-full h-[52px] px-7 rounded-[var(--ds-r-pill)] border text-[15px] font-medium tracking-[0.01em] whitespace-nowrap transition-all duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5";

const variants = {
  primary:
    "border-transparent bg-[var(--sf-inverse-bg)] text-[var(--sf-inverse-text)] hover:bg-[var(--sf-inverse-bg-hover)]",
  secondary:
    "border-[var(--sf-line-strong)] bg-transparent text-[var(--sf-text)] hover:bg-[var(--sf-inverse-bg)] hover:text-[var(--sf-inverse-text)] hover:border-[var(--sf-inverse-bg)]",
} as const;

function LinkButton({ href, text, icon: Icon, variant = "secondary" }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      <Icon size={16} />
      {text}
    </Link>
  );
}

export default LinkButton;
