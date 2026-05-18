import {
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandReddit,
  IconBrandX,
  IconBrandFigma,
  IconBrandGoogle,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandDiscord,
  IconBrandSlack,
  IconBrandSpotify,
  IconBrandNetflix,
  IconBrandTwitch,
  IconBrandNotion,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconLink,
} from "@tabler/icons-react"
import type { ComponentType } from "react"

type IconComponent = ComponentType<{ size?: number; className?: string }>

export const ICON_MAP: Record<string, IconComponent | undefined> = {
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandReddit,
  IconBrandX,
  IconBrandFigma,
  IconBrandGoogle,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandDiscord,
  IconBrandSlack,
  IconBrandSpotify,
  IconBrandNetflix,
  IconBrandTwitch,
  IconBrandNotion,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconLink,
}

export { IconLink as FallbackIcon }
