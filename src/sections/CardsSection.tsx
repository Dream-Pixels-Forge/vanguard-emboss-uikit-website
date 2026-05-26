import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Text, Box, EmbossBox, Badge, Button, Separator } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

export function CardsSection() {
  return (
    <section id="cards" className="section-container py-12">
      <SectionHeader
        title="Cards & Containers"
        description="Card, Box, and EmbossBox components for layout containers with emboss shadows."
        badge="Card · Box"
      />

      <div className="grid gap-8">
        {/* Card Variants */}
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Raised emboss with standard shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="sm">Cards use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'raised={true}'}</code> by default with a soft outward shadow.</Text>
            </CardContent>
            <CardFooter>
              <Button variant="accent" size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card raised={false} border>
            <CardHeader>
              <CardTitle>Border Card</CardTitle>
              <CardDescription>Flat with border only</CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="sm">Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'raised={false} border'}</code> for a flat appearance with subtle border.</Text>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emboss-accent-blue text-xs font-bold text-white">V</div>
                <div>
                  <CardTitle>With Media</CardTitle>
                  <CardDescription>Custom header content</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-center rounded-lg bg-emboss-shadow-light/20 p-8 text-center dark:bg-emboss-shadow-dark/20">
                <Text variant="sm" muted>Media area — image or illustration</Text>
              </div>
              <Text variant="sm">Cards accept any children in header, content, and footer slots.</Text>
            </CardContent>
          </Card>
        </div>

        {/* Box Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Box Component</CardTitle>
            <CardDescription>Flexible container with <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'raised'}</code>, <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'recessed'}</code>, and <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'border'}</code> modes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Box raised className="p-4 text-center">
                <Text variant="sm" weight="semibold">Raised</Text>
                <Text variant="xs" muted>outward shadow</Text>
              </Box>
              <Box recessed className="p-4 text-center">
                <Text variant="sm" weight="semibold">Recessed</Text>
                <Text variant="xs" muted>inset shadow</Text>
              </Box>
              <Box raised size="small" className="p-4 text-center">
                <Text variant="sm" weight="semibold">Raised Small</Text>
                <Text variant="xs" muted>small shadow</Text>
              </Box>
              <Box recessed size="small" className="p-4 text-center">
                <Text variant="sm" weight="semibold">Recessed Small</Text>
                <Text variant="xs" muted>small inset</Text>
              </Box>
              <Box border className="p-4 text-center">
                <Text variant="sm" weight="semibold">Border Only</Text>
                <Text variant="xs" muted>no shadow</Text>
              </Box>
              <Box raised border className="p-4 text-center">
                <Text variant="sm" weight="semibold">Raised + Border</Text>
                <Text variant="xs" muted>combined</Text>
              </Box>
            </div>
          </CardContent>
        </Card>

        {/* EmbossBox (deprecated) */}
        <Card>
          <CardHeader>
            <CardTitle>EmbossBox (Legacy)</CardTitle>
            <CardDescription>Kept for backward compatibility — use Box instead</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <EmbossBox raised className="text-center">
                <Text variant="sm" weight="semibold">EmbossBox Raised</Text>
                <Text variant="xs" muted>Standard emboss container</Text>
              </EmbossBox>
              <EmbossBox raised={false} className="text-center">
                <Text variant="sm" weight="semibold">EmbossBox Recessed</Text>
                <Text variant="xs" muted>Recessed emboss container</Text>
              </EmbossBox>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
