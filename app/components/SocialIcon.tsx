import Link from "next/link";

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
      <Link href={href} className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
        <div className="text-white">{icon}</div>
      </Link>
    )
  }

export default SocialIcon;