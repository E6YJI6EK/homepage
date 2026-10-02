import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { QuickLink } from "@/types"

interface AddLinkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (link: Omit<QuickLink, "id">) => void
}

export function AddLinkDialog({ open, onOpenChange, onAdd }: AddLinkDialogProps) {
  const [label, setLabel] = useState("")
  const [url, setUrl] = useState("")
  const [icon, setIcon] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!label.trim() || !url.trim()) return
    onAdd({ label: label.trim(), url: url.trim(), icon: icon.trim() || undefined })
    setLabel("")
    setUrl("")
    setIcon("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-100">
        <DialogHeader>
          <DialogTitle>Add Link</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="link-label">Label</Label>
            <Input
              id="link-label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="YouTube"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="link-url">URL</Label>
            <Input
              id="link-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="link-icon">
              Icon <span className="text-muted-foreground text-xs">(optional, e.g. IconBrandYoutube)</span>
            </Label>
            <Input
              id="link-icon"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              placeholder="IconBrandYoutube"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
