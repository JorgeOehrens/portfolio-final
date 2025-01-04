import Image from 'next/image'

const socialLinks = [
  {
    icon: "/instagram.svg",
    label: "Webitae",
    href: "https://instagram.com/webitae"
  },
  {
    icon: "/youtube.svg",
    label: "YouTube",
    href: "#"
  },
  {
    icon: "/twitter.svg",
    label: "Twitter",
    href: "#"
  },
  {
    icon: "/tiktok.svg",
    label: "TikTok",
    href: "#"
  },
  {
    icon: "/spotify.svg",
    label: "Spotify",
    href: "#"
  },
  {
    icon: "/instagram.svg",
    label: "Instagram",
    href: "#"
  },
  {
    icon: "/snapchat.svg",
    label: "Snapchat",
    href: "#"
  },
  {
    icon: "/dribbble.svg",
    label: "Dribbble",
    href: "#"
  },
  {
    icon: "/pinterest.svg",
    label: "Pinterest",
    href: "#"
  }
]

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex items-center justify-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
        >
          <Image
            src={link.icon}
            alt={link.label}
            width={24}
            height={24}
            className="opacity-75 hover:opacity-100 transition-opacity"
          />
        </a>
      ))}
    </div>
  )
}

