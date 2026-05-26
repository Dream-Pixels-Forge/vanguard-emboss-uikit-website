import { Box, Text, Separator } from 'vanguard-emboss-uikit'

export function Footer() {
  return (
    <footer className="mt-20">
      <Separator />
      <Box className="py-8">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-emboss-accent-blue text-xs font-bold text-white">
                V
              </div>
              <Text variant="sm" muted>Vanguard Emboss UI Kit v0.5.1</Text>
            </div>
            <Text variant="xs" muted>
              by Dream-Pixels-Forge
            </Text>
          </div>
        </div>
      </Box>
    </footer>
  )
}
