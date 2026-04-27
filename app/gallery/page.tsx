import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Gallery | FTS Sanskar Gurukul Class',
  description: 'View photos and moments from FTS Sanskar Gurukul Class activities and celebrations.',
}

const galleryItems = [
  { title: 'Interactive Class Learning', category: 'Classes', date: 'April 2026', image: '/gallery-class-1.jpg', isPhoto: true },
  { title: 'Engaging Group Activities', category: 'Classes', date: 'April 2026', image: '/gallery-class-2.jpg', isPhoto: true },
  { title: 'Spiritual Learning Circle', category: 'Classes', date: 'April 2026', image: '/gallery-class-3.jpg', isPhoto: true },
  { title: 'Diwali Celebration 2024', category: 'Events', date: 'October 2024', image: '🪔' },
  { title: 'Yoga & Wellness', category: 'Classes', date: 'November 2024', image: '🧘' },
  { title: 'Sanskrit Workshop', category: 'Workshops', date: 'October 2024', image: '📚' },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore moments from our classes, celebrations, and student activities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-0">
                    {item.isPhoto ? (
                      <div className="aspect-square relative overflow-hidden bg-muted">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                        {item.image}
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                        {item.category}
                      </p>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <p className="text-foreground/70 mb-6">
              Want to see more? Follow us on Instagram for daily updates and behind-the-scenes content!
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Follow on Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-8">What You&apos;ll See in Our Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span>📚</span> Classes & Workshops
              </h3>
              <p className="text-foreground/70 mb-4">
                Snapshots from our interactive learning sessions including yoga classes, Sanskrit lessons, and storytelling sessions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span>🎉</span> Events & Celebrations
              </h3>
              <p className="text-foreground/70 mb-4">
                Festive moments from major Hindu celebrations like Diwali, Holi, and other special occasions celebrated with our community.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span>🎨</span> Student Art & Projects
              </h3>
              <p className="text-foreground/70 mb-4">
                Creative expressions from our students including art projects, cultural presentations, and creative assignments.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span>🚶</span> Field Trips & Outings
              </h3>
              <p className="text-foreground/70 mb-4">
                Educational visits to temples, cultural sites, and community locations that bring learning to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Latest from Our Instagram
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Follow @ftssanskargurukul for daily content, student highlights, and community updates!
          </p>
          <div className="bg-card/50 border border-border rounded-lg p-12 text-center">
            <p className="text-foreground/70 mb-6">
              Instagram feed integration coming soon. For now, visit our Instagram profile directly.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90">
                Visit Our Instagram Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Share & Community */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">
            Be Part of Our Community
          </h2>
          <p className="text-lg text-foreground/70">
            Join our vibrant community of families learning and growing together. Follow, like, and share to stay connected!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Facebook
              </Button>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Instagram
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
