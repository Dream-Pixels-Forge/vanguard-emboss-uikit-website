import { Card, CardHeader, CardTitle, CardDescription, CardContent, Text, TiltCard, Button, Badge, Box, Separator } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

export function InteractiveSection() {
  return (
    <section id="interactive" className="section-container py-12">
      <SectionHeader
        title="Interactive"
        description="The TiltCard component adds 3D perspective tilt on hover, with optional glare effect."
        badge="TiltCard"
      />

      <div className="grid gap-8">
        {/* TiltCard Gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TiltCard maxTilt={15} scale={1.02} glare>
            <Box raised className="flex flex-col items-center gap-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emboss-accent-blue text-2xl font-bold text-white">
                T
              </div>
              <div>
                <Text weight="semibold">Standard Tilt</Text>
                <Text variant="sm" muted>maxTilt=15, scale=1.02</Text>
              </div>
              <Badge variant="accent">Hover me</Badge>
            </Box>
          </TiltCard>

          <TiltCard maxTilt={25} scale={1.04} glare>
            <Box raised className="flex flex-col items-center gap-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emboss-accent-orange text-2xl font-bold text-white">
                D
              </div>
              <div>
                <Text weight="semibold">Dramatic Tilt</Text>
                <Text variant="sm" muted>maxTilt=25, scale=1.04</Text>
              </div>
              <Badge variant="warning">More depth</Badge>
            </Box>
          </TiltCard>

          <TiltCard maxTilt={8} scale={1.01} glare={false}>
            <Box raised className="flex flex-col items-center gap-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emboss-accent-green text-2xl font-bold text-white">
                S
              </div>
              <div>
                <Text weight="semibold">Subtle Tilt</Text>
                <Text variant="sm" muted>maxTilt=8, no glare</Text>
              </div>
              <Badge variant="success">Subtle</Badge>
            </Box>
          </TiltCard>
        </div>

        {/* Full-width TiltCard */}
        <Card>
          <CardHeader>
            <CardTitle>Full Experience</CardTitle>
            <CardDescription>TiltCard wrapping a complete card with multiple elements</CardDescription>
          </CardHeader>
          <CardContent>
            <TiltCard maxTilt={12} scale={1.02} glare>
              <Box raised className="p-8">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="accent">3D Interactive</Badge>
                      <Badge variant="success">Hover to tilt</Badge>
                    </div>
                    <Text variant="h3" weight="bold">Experience the Emboss</Text>
                    <Text variant="sm" muted>
                      The TiltCard component tracks mouse position and applies real-time CSS 3D transforms
                      for a natural perspective effect. The glare effect adds a subtle light reflection
                      that moves with your cursor.
                    </Text>
                    <div className="flex gap-2">
                      <Button variant="accent" size="sm">Try it</Button>
                      <Button variant="outline" size="sm">Learn more</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3">
                      {['sm', 'md', 'lg'].map((s) => (
                        <SpinnerDemo key={s} size={s as any} />
                      ))}
                    </div>
                  </div>
                </div>
              </Box>
            </TiltCard>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function SpinnerDemo({ size }: { size: 'sm' | 'md' | 'lg' }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="animate-spin rounded-full border-2 border-emboss-shadow-light/30 border-t-emboss-accent-blue dark:border-emboss-shadow-dark/30 dark:border-t-emboss-accent-blue"
        style={{
          width: size === 'sm' ? 16 : size === 'md' ? 24 : 32,
          height: size === 'sm' ? 16 : size === 'md' ? 24 : 32,
        }}
      />
    </div>
  )
}
