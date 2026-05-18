import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LinkManager } from "@/components/LinkManager"
import type { QuickLink } from "@/types"

interface SettingsSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  links: QuickLink[]
  addLink: (link: Omit<QuickLink, "id">) => void
  removeLink: (id: string) => void
}

export function SettingsSheet({
  open,
  onOpenChange,
  links,
  addLink,
  removeLink,
}: SettingsSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[380px] flex flex-col gap-6 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium">Theme</h3>
          <ThemeToggle />
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium">Quick Links</h3>
          <LinkManager links={links} addLink={addLink} removeLink={removeLink} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
