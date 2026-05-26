import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Text, Input, Textarea, Select, Switch, Checkbox, Slider, Label, Button, Badge, Separator } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

export function FormsSection() {
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <section id="forms" className="section-container py-12">
      <SectionHeader
        title="Forms & Inputs"
        description="Form components with emboss styling — inputs, selects, switches, checkboxes, and sliders."
        badge="Input · Select · Switch · etc."
      />

      <div className="grid gap-8">
        {/* Basic Inputs */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Text Input</CardTitle>
              <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Input />'}</code> for text, email, password, etc.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled</Label>
                <Input id="disabled-input" placeholder="Disabled input" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error-input">With Error</Label>
                <Input id="error-input" placeholder="Invalid value" error />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Textarea</CardTitle>
              <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Textarea />'}</code> for multi-line text.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-textarea">Disabled</Label>
                <Textarea id="disabled-textarea" placeholder="Disabled textarea" disabled />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Select & Switch */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Select</CardTitle>
              <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Select />'}</code> for dropdowns.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Framework</Label>
                <Select>
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                  <option value="svelte">Svelte</option>
                  <option value="solid">Solid</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Size</Label>
                <Select defaultValue="md">
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Switch & Checkbox</CardTitle>
              <CardDescription>Toggle components for boolean inputs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications">Notifications</Label>
                  <Text variant="xs" muted>Receive email notifications</Text>
                </div>
                <Switch
                  id="notifications"
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode-switch">Dark Mode</Label>
                  <Text variant="xs" muted>Toggle dark theme</Text>
                </div>
                <Switch id="dark-mode-switch" />
              </div>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="newsletter" defaultChecked />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="disabled-checkbox" disabled />
                  <Label htmlFor="disabled-checkbox" className="text-muted-foreground">Disabled option</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Slider */}
        <Card>
          <CardHeader>
            <CardTitle>Slider</CardTitle>
            <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Slider />'}</code> for range selection.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Volume</Label>
                <Badge variant="accent" size="sm">{sliderValue[0]}%</Badge>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-3">
              <Label>Brightness</Label>
              <Slider defaultValue={[75]} max={100} step={1} />
            </div>
            <div className="space-y-3">
              <Label>Disabled</Label>
              <Slider defaultValue={[30]} max={100} disabled />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
