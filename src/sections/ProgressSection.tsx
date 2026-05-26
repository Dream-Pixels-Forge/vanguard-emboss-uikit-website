import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Text, Progress, ProgressCircle, Spinner, Badge, Box } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

function AnimatedProgress() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 5))
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Text variant="sm" weight="medium">Progress</Text>
        <Badge variant="accent" size="sm">{value}%</Badge>
      </div>
      <Progress value={value} />
    </div>
  )
}

export function ProgressSection() {
  return (
    <section id="progress" className="section-container py-12">
      <SectionHeader
        title="Progress & Loading"
        description="Progress bar, progress circle, and spinner components for loading states."
        badge="Progress · Spinner"
      />

      <div className="grid gap-8">
        {/* Progress Bar variants */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Progress Bar</CardTitle>
              <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Progress />'}</code> for linear progress.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <AnimatedProgress />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Text variant="sm" weight="medium">Static 75%</Text>
                  <Badge variant="success" size="sm">75%</Badge>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Text variant="sm" weight="medium">Complete</Text>
                  <Badge variant="success" size="sm">100%</Badge>
                </div>
                <Progress value={100} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Circle</CardTitle>
              <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<ProgressCircle />'}</code> for circular progress.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <ProgressCircle value={25} size="lg" />
                  <Text variant="xs" muted>25%</Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ProgressCircle value={50} size="lg" />
                  <Text variant="xs" muted>50%</Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ProgressCircle value={75} size="lg" />
                  <Text variant="xs" muted>75%</Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ProgressCircle value={100} size="lg" />
                  <Text variant="xs" muted>100%</Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spinner */}
        <Card>
          <CardHeader>
            <CardTitle>Spinner</CardTitle>
            <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Spinner />'}</code> for loading indicators with <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'size="sm"'}</code>, <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'size="md"'}</code>, or <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'size="lg"'}</code>.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Spinner size="sm" />
                <Text variant="xs" muted>Small</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="md" />
                <Text variant="xs" muted>Medium</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <Text variant="xs" muted>Large</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner className="text-emboss-accent-orange" size="md" />
                <Text variant="xs" muted>Custom Color</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner className="text-emboss-accent-green" size="md" />
                <Text variant="xs" muted>Green</Text>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
