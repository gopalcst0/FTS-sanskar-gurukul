import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CourseCardProps {
  title: string
  description: string
  ageGroup: string
  duration: string
  highlights: string[]
}

export function CourseCard({
  title,
  description,
  ageGroup,
  duration,
  highlights,
}: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3 mb-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Age Group</p>
            <p className="text-foreground">{ageGroup}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Duration</p>
            <p className="text-foreground">{duration}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">Key Highlights</p>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <div className="px-6 pb-6">
        <Link href="/book" className="block">
          <Button className="w-full bg-primary hover:bg-primary/90">Enroll Now</Button>
        </Link>
      </div>
    </Card>
  )
}
