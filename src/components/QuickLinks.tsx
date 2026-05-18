import { IconEdit } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { QuickLinkItem } from "@/components/QuickLinkItem"
import type { QuickLink } from "@/types"

interface QuickLinksProps {
  links: QuickLink[]
  onOpenSettings: () => void
}

export function QuickLinks({ links, onOpenSettings }: QuickLinksProps) {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {links.map((link) => (
        <QuickLinkItem key={link.id} link={link} />
      ))}
      <Button
        variant="ghost"
        size="icon"
        onClick={onOpenSettings}
        className="text-muted-foreground"
        title="Edit links"
      >
        <IconEdit size={16} />
      </Button>
    </div>
  )
}
