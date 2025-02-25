import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, Mail, Github, Linkedin } from "lucide-react"

export default function LinkTree() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1d1d1d] via-[#2d2d2d] to-[#ff6a00] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-2xl backdrop-blur-sm">
        {/* Seção Perfil */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src="/avatar.png"
              alt="Profile Picture"
              fill
              sizes="128px"
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Pedro Lucas Brandão</h1>
          <p className="text-gray-300 mt-2 text-center">Presidente - CT Junior</p>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-8">
          <SocialIcon href="https://www.instagram.com/pedrolfbrandao/" icon={<Instagram size={20} />} />
          <SocialIcon href="#" icon={<Phone size={20} />} />
          <SocialIcon href="#" icon={<Mail size={20} />} />
          <SocialIcon href="https://www.linkedin.com/in/pedro-lucas-ferreira-brand%C3%A3o-6b76a02a2/" icon={<Linkedin size={20} />} />
        </div>

        {/* Botões */}
        <div className="space-y-4">
          <LinkButton href="https://www.ctjunior.com.br/" text="Website CT Junior" />
          <LinkButton href="https://www.linkedin.com/in/pedro-lucas-ferreira-brand%C3%A3o-6b76a02a2/" text="Linkedin" />
          <LinkButton href="#" text="Entre em Contato" />
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

function LinkButton({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block w-full py-3 px-4 bg-white bg-opacity-10 text-center text-white font-semibold rounded-lg shadow hover:bg-opacity-20 transition-colors border border-white border-opacity-20"
    >
      {text}
    </Link>
  )
}

