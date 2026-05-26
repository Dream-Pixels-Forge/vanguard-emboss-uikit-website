import { Box, Text, Separator } from 'vanguard-emboss-uikit'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Typography', href: '#typography' },
  { label: 'Buttons', href: '#buttons' },
  { label: 'Cards', href: '#cards' },
  { label: 'Badges', href: '#badges' },
  { label: 'Forms', href: '#forms' },
  { label: 'Navigation', href: '#navigation' },
  { label: 'Feedback', href: '#feedback' },
  { label: 'Progress', href: '#progress' },
  { label: 'Interactive', href: '#interactive' },
]

export function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <Box raised className="w-full max-w-[1200px] rounded-full border-0 px-5 py-2 shadow-lg backdrop-blur-xl bg-emboss-bg-light/80 dark:bg-emboss-bg-dark/80">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 pr-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emboss-accent-blue text-xs font-bold text-white">
              V
            </div>
            <div className="hidden sm:block">
              <Text variant="sm" weight="semibold">Vanguard Emboss</Text>
              <Text variant="xs" muted>UI Kit</Text>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-emboss-shadow-light/10 dark:hover:bg-emboss-shadow-dark/10"
              >
                {item.label}
              </a>
            ))}
            <Separator orientation="vertical" className="mx-1 h-5" />
            <ThemeToggle />
          </nav>

          {/* Mobile Nav Toggle + Theme */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </Box>
    </header>
  )
}
