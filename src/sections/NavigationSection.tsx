import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Text, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent, Pagination, Breadcrumb, Badge, Box, Separator } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Navigation', href: '#', active: true },
]

export function NavigationSection() {
  const [tabValue, setTabValue] = useState('overview')

  return (
    <section id="navigation" className="section-container py-12">
      <SectionHeader
        title="Navigation"
        description="Tabs, Accordion, Pagination, and Breadcrumb components for navigation and content organization."
        badge="Tabs · Accordion · etc."
      />

      <div className="grid gap-8">
        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Tabs />'}</code> with <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'TabsList'}</code>, <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'TabsTrigger'}</code>, and <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'TabsContent'}</code> subcomponents.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={tabValue} onValueChange={setTabValue}>
              <TabsList className="mb-4 gap-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="api" disabled>API</TabsTrigger>
              </TabsList>
              <Box raised className="p-6">
                {tabValue === 'overview' && (
                  <div className="space-y-2">
                    <Text weight="semibold">Overview</Text>
                    <Text variant="sm" muted>The Tabs component uses Radix UI under the hood for accessibility, keyboard navigation, and full ARIA compliance.</Text>
                  </div>
                )}
                {tabValue === 'features' && (
                  <div className="space-y-2">
                    <Text weight="semibold">Features</Text>
                    <Text variant="sm" muted>Active tabs get an emboss "out" shadow. Inactive tabs show a flat/inset appearance. Disabled tabs are grayed out.</Text>
                  </div>
                )}
                {tabValue === 'usage' && (
                  <div className="space-y-2">
                    <Text weight="semibold">Usage</Text>
                    <Text variant="sm" muted>Wrap with <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Tabs defaultValue="overview">'}</code> and nest TabsList + TabsContent.</Text>
                  </div>
                )}
              </Box>
            </Tabs>
          </CardContent>
        </Card>

        {/* Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
            <CardDescription>Collapsible content sections using <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Accordion />'}</code>.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Vanguard Emboss?</AccordionTrigger>
                <AccordionContent>
                  <Text variant="sm" muted>Vanguard Emboss is a premium neumorphic (soft UI) React component library featuring 45° light-source emboss effects, soft clay aesthetics, and seamless light/dark mode support. Built with Radix UI primitives and Tailwind CSS.</Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I install it?</AccordionTrigger>
                <AccordionContent>
                  <div className="code-block">npm install vanguard-emboss-uikit</div>
                  <Text variant="sm" muted className="mt-2">Then import the styles and wrap your app with ThemeProvider.</Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  <Text variant="sm" muted>Yes! All components are built on top of Radix UI primitives, ensuring full ARIA compliance, keyboard navigation, and screen reader support out of the box.</Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger disabled>What about dark mode?</AccordionTrigger>
                <AccordionContent>
                  <Text variant="sm" muted>Built-in ThemeProvider with localStorage persistence. Just wrap your app and toggle with <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'useTheme()'}</code>.</Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Pagination + Breadcrumb */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
              <CardDescription>Page navigation with <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Pagination />'}</code>.</CardDescription>
            </CardHeader>
            <CardContent>
              <Pagination total={10} current={1} onPageChange={() => {}} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
              <CardDescription>Navigation breadcrumb trail.</CardDescription>
            </CardHeader>
            <CardContent>
              <Breadcrumb items={breadcrumbItems} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
