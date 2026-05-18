import { useState } from "react"
import { IconSettings } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/SearchBar"
import { QuickLinks } from "@/components/QuickLinks"
import { CalendarFrame } from "@/components/CalendarFrame"
import { SettingsSheet } from "@/components/SettingsSheet"
import { useSearchEngine } from "@/hooks/useSearchEngine"
import { useQuickLinks } from "@/hooks/useQuickLinks"

export function App() {
  const [engineKey, setEngineKey] = useSearchEngine()
  const { links, addLink, removeLink } = useQuickLinks()
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <div className="flex items-center gap-2 p-3 shrink-0">
        <div className="flex-1 flex justify-center">
          <SearchBar engineKey={engineKey} onEngineChange={setEngineKey} />
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

      <div className="shrink-0 px-3 pb-2">
        <QuickLinks links={links} onOpenSettings={() => setSettingsOpen(true)} />
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
