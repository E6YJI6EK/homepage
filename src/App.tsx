import { CalendarFrame } from "@/components/CalendarFrame"
import { QuickLinks } from "@/components/QuickLinks"
import { SettingsSheet } from "@/components/SettingsSheet"
import { Button } from "@/components/ui/button"
import { useQuickLinks } from "@/hooks/useQuickLinks"
import { IconSettings } from "@tabler/icons-react"
import { useState } from "react"
import { SearchBar } from "./blocks/search-bar"

export function App() {
  const { links, addLink, removeLink } = useQuickLinks()
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      <div className="flex shrink-0 items-center gap-2 p-3">
        <div className="flex flex-1 justify-center">
          <SearchBar />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSettingsOpen(true)}
          title="Settings"
        >
          <IconSettings size={18} />
        </Button>
      </div>

      <div className="flex shrink-0 justify-center px-3 pb-2">
        <QuickLinks
          links={links}
          onOpenSettings={() => setSettingsOpen(true)}
        />
      </div>

      <CalendarFrame />

      <SettingsSheet
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        links={links}
        addLink={addLink}
        removeLink={removeLink}
      />
    </div>
  )
}

export default App
