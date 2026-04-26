import {
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import { TbPalette } from 'react-icons/tb'

const socials = [
  {
    label: 'Instagram',
    Icon: FiInstagram,
    href: 'https://www.instagram.com/annalisefw/?hl=en',
  },
  {
    label: 'TikTok',
    Icon: SiTiktok,
    href: 'https://www.tiktok.com/@annalisefw?is_from_webapp=1&sender_device=pc',
  },
  {
    label: 'YouTube',
    Icon: FiYoutube,
    href: 'https://www.youtube.com/channel/UC5ZsjKP0P-LlC044P-efQvA',
  },
  {
    label: 'Canva Portfolio',
    Icon: TbPalette,
    href: 'https://annalisefwugcportfolio.my.canva.site/',
  },
  {
    label: 'LinkedIn',
    Icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/annalise-wheeler-4a909a21b/',
  },
  {
    label: 'GitHub',
    Icon: FiGithub,
    href: 'https://github.com/annalisefaith',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <p className="font-logo text-xl text-white tracking-[0.2em]">AF</p>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {socials.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-sans text-[11px] text-muted tracking-[0.2em]">
          © {year} Annalise Faith
        </p>
      </div>
    </footer>
  )
}
