import { ICON_MAP, FallbackIcon } from "@/lib/iconMap"
import type { QuickLink } from "@/types"
import type { ComponentType } from "react"

interface QuickLinkItemProps {
  link: QuickLink
}

function resolveIcon(name?: string): ComponentType<{ size?: number; className?: string }> {
  if (!name) return FallbackIcon
  return ICON_MAP[name] ?? FallbackIcon
}

export function QuickLinkItem({ link }: QuickLinkItemProps) {
  const Icon = resolveIcon(link.icon)

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
    >
      <Icon size={20} />
      <span className="text-xs">{link.label}</span>
    </a>
  )
}
