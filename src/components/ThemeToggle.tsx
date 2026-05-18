import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      {(["light", "dark", "system"] as const).map((t) => (
        <Button
          key={t}
          variant={theme === t ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme(t)}
          className="capitalize"
        >
          {t}
        </Button>
      ))}
    </div>
  )
}
