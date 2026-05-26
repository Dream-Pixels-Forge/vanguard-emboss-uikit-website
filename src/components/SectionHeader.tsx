import { Text, Badge, Separator } from 'vanguard-emboss-uikit'

interface SectionHeaderProps {
  title: string
  description?: string
  badge?: string
}

export function SectionHeader({ title, description, badge }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Text variant="h2" weight="bold">{title}</Text>
        {badge && <Badge variant="accent" size="sm">{badge}</Badge>}
      </div>
      {description && (
        <Text variant="base" muted className="max-w-2xl">{description}</Text>
      )}
      <Separator className="mt-4" />
    </div>
  )
}
