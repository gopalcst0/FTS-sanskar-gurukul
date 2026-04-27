import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface DeityCardProps {
  name: string
  sanskrit: string
  description: string
  significance: string
  image?: string
}

export function DeityCard({
  name,
  sanskrit,
  description,
  significance,
  image,
}: DeityCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      {image && (
        <div className="w-full h-48 bg-muted flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-2">🙏</p>
            <p className="text-sm text-muted-foreground">{name}</p>
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-primary">{name}</CardTitle>
        <CardDescription className="text-secondary font-semibold italic">
          {sanskrit}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-foreground">{description}</p>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase">Significance</p>
          <p className="text-sm text-foreground mt-1">{significance}</p>
        </div>
      </CardContent>
    </Card>
  )
}
