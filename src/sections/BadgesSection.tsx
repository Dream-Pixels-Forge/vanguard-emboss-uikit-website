import { Card, CardHeader, CardTitle, CardContent, Text, Badge } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

const badgeVariants = ['default', 'accent', 'success', 'warning', 'outline'] as const
const badgeSizes = ['sm', 'md', 'lg'] as const

export function BadgesSection() {
  return (
    <section id="badges" className="section-container py-12">
      <SectionHeader
        title="Badges"
        description="Badge component with 5 variants and 3 sizes for labels, tags, and status indicators."
        badge="Badge"
      />

      <div className="grid gap-8">
        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="accent"'}</code>, <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="success"'}</code>, etc.</Text>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {badgeVariants.map((v) => (
                <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'size="sm"'}</code>, <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'size="md"'}</code>, or <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'size="lg"'}</code></Text>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              {badgeSizes.map((s) => (
                <Badge key={s} variant="accent" size={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* All Combinations */}
        <Card>
          <CardHeader>
            <CardTitle>All Combinations</CardTitle>
            <Text variant="sm" muted>Every variant at every size</Text>
          </CardHeader>
          <CardContent className="space-y-4">
            {badgeVariants.map((v) => (
              <div key={v}>
                <Text variant="sm" weight="semibold" className="mb-2 capitalize">{v}</Text>
                <div className="flex flex-wrap gap-2">
                  {badgeSizes.map((s) => (
                    <Badge key={`${v}-${s}`} variant={v} size={s}>{v} {s}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Use Cases</CardTitle>
            <Text variant="sm" muted>Common badge patterns in context</Text>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Text variant="sm" weight="semibold">Status:</Text>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="accent">In Progress</Badge>
              <Badge variant="outline">Archived</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Text variant="sm" weight="semibold">Tags:</Text>
              <Badge variant="default">React</Badge>
              <Badge variant="default">TypeScript</Badge>
              <Badge variant="default">Tailwind</Badge>
              <Badge variant="default">Radix UI</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Text variant="sm" weight="semibold">Version:</Text>
              <Badge variant="accent">v0.5.1</Badge>
              <Badge variant="success">Latest</Badge>
              <Badge variant="warning">Beta</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
