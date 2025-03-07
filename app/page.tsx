import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, Mail, Linkedin, Plane } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import LinkButton from "./components/LinkButton"

export default function LinkTree() {
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-br from-[#1d1d1d] via-[#2d2d2d] to-[#ff6a00] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-2xl backdrop-blur-sm">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src="/avatar.jpeg"
              alt="Profile Picture"
              fill
              sizes="128px"
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Pedro Lucas Brandão</h1>
          <p className="text-gray-300 mt-2 text-center">Presidente - CT Junior</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <SocialIcon href="https://www.instagram.com/pedrolfbrandao/" icon={<Instagram size={20} />} />
          <SocialIcon href="tel:+5527998980401" icon={<Phone size={20} />} />
          <SocialIcon href="mailto:pedro.brandao@ctjunior.com.br?subject=Contato%20CT%20Junior&body=Olá,%20gostaria%20de%20falar%20sobre..." icon={<Mail size={20} />} />
          <SocialIcon href="https://www.linkedin.com/in/pedro-lucas-ferreira-brand%C3%A3o-6b76a02a2/" icon={<Linkedin size={20} />} />
        </div>

        {/* Link Buttons */}
        <div className="space-y-4">
          <LinkButton href="https://www.ctjunior.com.br/" text="Website CT Junior" icon={Plane} />
          {/* <LinkButton href="https://www.linkedin.com/in/pedro-lucas-ferreira-brand%C3%A3o-6b76a02a2/" text="Linkedin" /> */}
          <LinkButton href="whatsapp://send?phone=+5527998980401&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" text="Entre em Contato" icon={FaWhatsapp} />
        </div>
      </div>
    </div>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
      <div className="text-white">{icon}</div>
    </Link>
  )
}


