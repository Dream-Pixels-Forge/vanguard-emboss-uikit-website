import { TiltCard, Text, Button, Badge, Box } from 'vanguard-emboss-uikit'

export function HeroSection() {
  return (
    <section id="hero" className="section-container pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Badge variant="accent" size="lg">v0.5.1</Badge>
            <Badge variant="success" size="lg">MIT License</Badge>
          </div>
          <Text variant="h1" weight="bold" className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Premium Neumorphic<br />
            <span className="text-emboss-accent-blue">React Components</span>
          </Text>
          <Text variant="lg" muted className="max-w-lg leading-relaxed">
            A beautifully crafted UI component library with 45° light-source emboss effects,
            soft clay aesthetics, and seamless light/dark mode. Built with Radix UI primitives
            and Tailwind CSS.
          </Text>
          <div className="flex flex-wrap gap-3">
            <Button variant="accent" size="lg" onClick={() => document.querySelector('#buttons')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Components
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Dream-Pixels-Forge/vanguard-emboss-uikit" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-2">
              {['React', 'TS', 'TW'].map((tech) => (
                <div
                  key={tech}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-emboss-bg-light bg-emboss-highlight-light text-[10px] font-bold text-foreground dark:border-emboss-bg-dark dark:bg-emboss-highlight-dark"
                >
                  {tech}
                </div>
              ))}
            </div>
            <Text variant="sm" muted>React 18 · TypeScript · Tailwind CSS</Text>
          </div>
        </div>

        {/* Right: TiltCard Demo */}
        <div className="flex justify-center">
          <TiltCard className="w-full max-w-md" maxTilt={20} scale={1.03} glare>
            <Box raised className="p-8 sm:p-12">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emboss-accent-blue shadow-emboss-out-light-sm dark:shadow-emboss-out-dark-sm">
                  <Text variant="h1" weight="bold" className="text-white">V</Text>
                </div>
                <div>
                  <Text variant="h3" weight="bold">Vanguard Emboss</Text>
                  <Text variant="sm" muted>Hover to tilt · Interactive 3D</Text>
                </div>
                <div className="flex gap-2">
                  <Badge variant="default" size="sm">neumorphic</Badge>
                  <Badge variant="accent" size="sm">emboss</Badge>
                  <Badge variant="success" size="sm">accessible</Badge>
                </div>
              </div>
            </Box>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
