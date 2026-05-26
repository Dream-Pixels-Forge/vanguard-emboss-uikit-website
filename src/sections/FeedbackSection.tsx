import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Text, Alert, Button, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, Toaster, toast, Badge, Box, Separator } from 'vanguard-emboss-uikit'
import { SectionHeader } from '../components/SectionHeader'

export function FeedbackSection() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section id="feedback" className="section-container py-12">
      {/* Toaster renders toast notifications at the top level */}
      <Toaster />

      <SectionHeader
        title="Feedback"
        description="Alert, Dialog, and Toast components for user feedback and notifications."
        badge="Alert · Dialog · Toast"
      />

      <div className="grid gap-8">
        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Alert />'}</code> for inline messages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="default" title="Default Alert">
              This is a default alert with no specific variant.
            </Alert>
            <Alert variant="success" title="Success!">
              Your changes have been saved successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your input before submitting.
            </Alert>
            <Alert variant="destructive" title="Error">
              There was a problem processing your request.
            </Alert>
          </CardContent>
        </Card>

        {/* Dialog + Toasts */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialogs using <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'<Dialog />'}</code>.</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="accent">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Action</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to proceed? This action can be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Text variant="sm" muted>
                      The dialog uses Radix UI Dialog primitive with emboss-styled overlay and content.
                    </Text>
                  </div>
                  <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                    <Button variant="accent" onClick={() => {
                      setDialogOpen(false)
                      toast.success('Action confirmed!', { description: 'The dialog was closed successfully.' })
                    }}>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toast Notifications</CardTitle>
              <CardDescription>Use <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'toast()'}</code> or <code className="rounded bg-emboss-shadow-light/20 px-1.5 py-0.5 text-xs dark:bg-emboss-shadow-dark/20">{'toast.success()'}</code> for notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm" onClick={() => toast('Default notification', { description: 'This is a standard toast' })}>
                  Default Toast
                </Button>
                <Button variant="accent" size="sm" onClick={() => toast.success('Saved!', { description: 'Your changes were saved' })}>
                  Success Toast
                </Button>
                <Button variant="outline" size="sm" onClick={() => toast.error('Failed!', { description: 'Something went wrong' })}>
                  Error Toast
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" size="sm" onClick={() => toast.warning('Warning!', { description: 'Please review your input' })}>
                  Warning Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
