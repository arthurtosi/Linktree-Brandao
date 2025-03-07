import { IconType } from "react-icons";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  icon: IconType; // O ícone será um componente React
}

function LinkButton({ href, text, icon: Icon }: LinkButtonProps) {
  return (
    <div>
      <Link
        href={href}
        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white bg-opacity-10 text-center text-white font-semibold rounded-lg shadow hover:bg-opacity-20 transition-colors border border-white border-opacity-20"
      >
        <Icon size={20} />
        {text}
      </Link>
    </div>
  );
}

export default LinkButton;