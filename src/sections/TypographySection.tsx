import { Card, CardHeader, CardTitle, CardContent, Text, Badge } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

const textVariants = [
  { variant: 'h1', label: 'Heading 1', description: 'Page titles, hero headings' },
  { variant: 'h2', label: 'Heading 2', description: 'Section headings' },
  { variant: 'h3', label: 'Heading 3', description: 'Sub-section headings' },
  { variant: 'h4', label: 'Heading 4', description: 'Card titles, group headings' },
  { variant: 'h5', label: 'Heading 5', description: 'Minor headings' },
  { variant: 'h6', label: 'Heading 6', description: 'Small headings' },
] as const

const sizeVariants = [
  'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl',
] as const

const weightVariants = [
  'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black',
] as const

export function TypographySection() {
  return (
    <section id="typography" className="section-container py-12">
      <SectionHeader
        title="Typography"
        description="Text component with variants for every use case — headings, body, labels, and size presets."
        badge="Text"
      />

      <div className="grid gap-8">
        {/* Headings */}
        <Card>
          <CardHeader>
            <CardTitle>Heading Variants</CardTitle>
            <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="h1"'}</code> through <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="h6"'}</code></Text>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {textVariants.map(({ variant, label, description }) => (
                <div key={variant} className="flex items-baseline justify-between gap-4 rounded-lg p-3 hover:bg-emboss-shadow-light/10 dark:hover:bg-emboss-shadow-dark/10">
                  <Text variant={variant as any} weight={variant.startsWith('h1') || variant.startsWith('h2') ? 'bold' : 'semibold'}>
                    {label}
                  </Text>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="default" size="sm">{variant}</Badge>
                    <Text variant="xs" muted>{description}</Text>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Size Presets */}
        <Card>
          <CardHeader>
            <CardTitle>Size Presets</CardTitle>
            <Text variant="sm" muted>Use number variants like <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="sm"'}</code>, <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="lg"'}</code>, etc.</Text>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sizeVariants.map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <Badge variant="accent" size="sm" className="w-10 shrink-0">{size}</Badge>
                  <Text variant={size}>The quick brown fox jumps over the lazy dog.</Text>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weights & Accents */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Font Weights</CardTitle>
              <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'weight="bold"'}</code> etc.</Text>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {weightVariants.map((w) => (
                  <Text key={w} variant="base" weight={w}>{w.charAt(0).toUpperCase() + w.slice(1)} weight</Text>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accent & Muted</CardTitle>
              <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'accent="blue"'}</code> or <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'muted'}</code></Text>
            </CardHeader>
            <CardContent className="space-y-3">
              <Text variant="base" accent="blue">This text uses the blue accent color</Text>
              <Text variant="base" accent="orange">This text uses the orange accent color</Text>
              <Text variant="base" accent="green">This text uses the green accent color</Text>
              <Text variant="base" muted>This text is muted (lower opacity)</Text>
              <Text variant="base">This is normal, non-muted text for comparison</Text>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
