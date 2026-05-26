import { Switch, Text } from 'vanguard-emboss-uikit'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-3">
      <Text variant="sm" muted>Light</Text>
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Text variant="sm" muted>Dark</Text>
    </div>
  )
}
