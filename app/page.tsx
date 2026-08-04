import Image from "next/image"

import { Instagram, Mail, Linkedin, Globe, ClipboardList } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

import LinkButton from "./components/LinkButton"
import SocialIcon from "./components/SocialIcon"


export default function LinkTree() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[var(--ds-ink-2)] border border-[var(--sf-line)] p-8 rounded-[var(--ds-r-2xl)]">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src="/avatar.jpeg"
              alt="Profile Picture"
              fill
              sizes="128px"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-[var(--sf-text)]">Pedro Brandão</h1>
          <p className="text-[var(--sf-text-muted)] mt-2 text-center">Head de Finanças e Pessoas · smartside.ai</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <SocialIcon
            href="https://www.linkedin.com/in/pedro-lucas-ferreira-brand%C3%A3o-6b76a02a2/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://wa.me/5527998980401?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA."
            icon={<FaWhatsapp size={20} />}
            label="WhatsApp"
          />
          <SocialIcon
            href="mailto:pedro.brandao@smartside.ai?subject=Contato"
            icon={<Mail size={20} />}
            label="E-mail"
          />
          <SocialIcon
            href="https://www.instagram.com/pedrolfbrandao/"
            icon={<Instagram size={20} />}
            label="Instagram"
          />
        </div>

        {/* Link Buttons */}
        <div className="space-y-4">
          <LinkButton
            href="https://forms.gle/pnoy98ZY2x2wyMiC6"
            text="Vamos conversar"
            icon={ClipboardList}
            variant="primary"
          />
          <LinkButton
            href="https://www.smartside.ai/"
            text="Site da smartside.ai"
            icon={Globe}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  )
}
