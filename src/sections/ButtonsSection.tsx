import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Text, Button, Badge, Separator, Box } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

const variants = ['default', 'accent', 'outline', 'ghost', 'link'] as const
const sizes = ['sm', 'md', 'lg'] as const

export function ButtonsSection() {
  const [loading, setLoading] = useState(false)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <section id="buttons" className="section-container py-12">
      <SectionHeader
        title="Buttons"
        description="Button component with 5 variants, 3 sizes, loading state, and asChild support for custom rendering."
        badge="Button"
      />

      <div className="grid gap-8">
        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'variant="accent"'}</code> etc.</Text>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {variants.map((v) => (
                <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
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
              {sizes.map((s) => (
                <Button key={s} size={s} variant="default">{s.charAt(0).toUpperCase() + s.slice(1)}</Button>
              ))}
              {sizes.map((s) => (
                <Button key={`${s}-accent`} size={s} variant="accent">{s.charAt(0).toUpperCase() + s.slice(1)}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* States */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Loading</CardTitle>
              <Text variant="sm" muted>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'loading'}</code> prop</Text>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button loading variant="default">Loading</Button>
              <Button loading variant="accent">Loading</Button>
              <Button loading variant="outline">Loading</Button>
              <Button onClick={handleLoadingClick} loading={loading} variant="default">
                {loading ? 'Saving...' : 'Click to Load'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
              <Text variant="sm" muted>Use native <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'disabled'}</code> attribute</Text>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button disabled variant="default">Default</Button>
              <Button disabled variant="accent">Accent</Button>
              <Button disabled variant="outline">Outline</Button>
              <Button disabled variant="ghost">Ghost</Button>
            </CardContent>
          </Card>
        </div>

        {/* Variant Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>All Combinations</CardTitle>
            <Text variant="sm" muted>Every variant at every size</Text>
          </CardHeader>
          <CardContent className="space-y-6">
            {variants.map((v) => (
              <div key={v}>
                <Text variant="sm" weight="semibold" className="mb-2 capitalize">{v}</Text>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <Button key={`${v}-${s}`} variant={v} size={s}>
                      {v} {s}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
