import { useState } from "react"
import { IconTrash, IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { AddLinkDialog } from "@/components/AddLinkDialog"
import type { QuickLink } from "@/types"

interface LinkManagerProps {
  links: QuickLink[]
  addLink: (link: Omit<QuickLink, "id">) => void
  removeLink: (id: string) => void
}

export function LinkManager({ links, addLink, removeLink }: LinkManagerProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <div key={link.id} className="flex items-center justify-between gap-2 py-1">
          <span className="text-sm truncate flex-1">{link.label}</span>
          <span className="text-xs text-muted-foreground truncate max-w-[140px]">{link.url}</span>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 text-muted-foreground hover:text-destructive"
            onClick={() => removeLink(link.id)}
          >
            <IconTrash size={14} />
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="mt-1 self-start gap-1"
        onClick={() => setDialogOpen(true)}
      >
        <IconPlus size={14} />
        Add link
      </Button>
      <AddLinkDialog open={dialogOpen} onOpenChange={setDialogOpen} onAdd={addLink} />
    </div>
  )
}
