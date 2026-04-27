import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About Us | FTS Sanskar Gurukul Class',
  description: 'Learn about FTS Sanskar Gurukul Class, our mission, and our dedicated teachers.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About FTS Sanskar Gurukul
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Preserving and promoting Hindu Dharma values for the next generation through authentic spiritual education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To nurture spiritually aware, culturally rooted, and ethically strong individuals by imparting authentic Hindu Dharma values and संस्कार to children in an engaging, age-appropriate manner.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              We believe that every child deserves to understand their cultural heritage and develop a deep connection to spiritual wisdom that transcends time and trends.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              A world where Hindu children grow up with pride in their traditions, equipped with timeless wisdom to navigate modern challenges with grace, compassion, and integrity.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              We envision a community of families committed to preserving Dharmic values while raising confident, compassionate, and culturally conscious individuals.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Authentic Curriculum',
                description: 'Rooted in traditional texts while presented in contemporary, engaging ways for modern children.',
              },
              {
                title: 'Expert Educators',
                description: 'Teachers with deep knowledge of Hindu traditions, pedagogy training, and passion for child development.',
              },
              {
                title: 'Holistic Development',
                description: 'Beyond knowledge transfer—we focus on character building, values, and spiritual growth.',
              },
              {
                title: 'Flexible Learning',
                description: 'Online and offline options, flexible scheduling, and personalized learning paths for each child.',
              },
              {
                title: 'Small Communities',
                description: 'Intimate class sizes ensure personal attention and meaningful interactions among students.',
              },
              {
                title: 'Parental Support',
                description: 'Regular feedback, resources for parents, and a community to support home learning.',
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Teachers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Teachers</h2>
          <p className="text-foreground/70 mb-12 text-lg">
            Our educators are carefully selected and trained to bring authenticity, warmth, and expertise to every lesson.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Swami Ananda',
                expertise: 'Vedic Studies & Philosophy',
                experience: '20+ years',
                description: 'Expert in Vedas and Upanishads with extensive teaching experience worldwide.',
              },
              {
                name: 'Dr. Priya Sharma',
                expertise: 'Hindu Mythology & Culture',
                experience: '15+ years',
                description: 'PhD in Sanskrit Literature and passionate about making myths relevant to modern life.',
              },
              {
                name: 'Yoga Instructor Ravi',
                expertise: 'Yoga & Wellness',
                experience: '12+ years',
                description: 'Certified yoga instructor specializing in child development and mindfulness.',
              },
              {
                name: 'Sri Rajesh Kumar',
                expertise: 'Sanskrit Language',
                experience: '18+ years',
                description: 'Master Sanskrit teacher with proven methods for making language learning fun.',
              },
              {
                name: 'Prof. Anjali Gupta',
                expertise: 'Traditional Arts',
                experience: '22+ years',
                description: 'Expert in Hindu art forms, architecture, and their spiritual significance.',
              },
              {
                name: 'Kavya Patel',
                expertise: 'Children&apos;s Spirituality',
                experience: '10+ years',
                description: 'Specializes in making spiritual concepts age-appropriate and engaging for kids.',
              },
            ].map((teacher, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mb-4">
                  {teacher.name.split(' ')[0][0]}
                </div>
                <h3 className="font-bold text-primary mb-1 text-lg">{teacher.name}</h3>
                <p className="text-secondary font-semibold text-sm mb-3">{teacher.expertise}</p>
                <p className="text-xs text-muted-foreground mb-3">{teacher.experience} of experience</p>
                <p className="text-sm text-foreground/70">{teacher.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Students Enrolled' },
              { number: '15+', label: 'Expert Teachers' },
              { number: '10+', label: 'Courses Offered' },
              { number: '50+', label: 'Families Connected' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="space-y-6">
            {[
              { title: 'Authenticity', description: 'We honor original teachings while making them relevant to modern times.' },
              { title: 'Compassion', description: 'We teach values of Ahimsa and kindness towards all living beings.' },
              { title: 'Excellence', description: 'We maintain highest standards in curriculum, teaching, and student care.' },
              { title: 'Inclusivity', description: 'We welcome families from all backgrounds who respect Hindu traditions.' },
              { title: 'Integrity', description: 'We practice what we teach and lead by example.' },
              { title: 'Community', description: 'We build supportive communities where families grow together.' },
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-1 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Ready to Join Our Community?</h2>
          <p className="text-lg text-foreground/70">
            Start your child&apos;s spiritual journey with FTS Sanskar Gurukul today.
          </p>
          <Link href="/book">
            <Button className="bg-accent hover:bg-accent/90 px-8 py-6 text-base">
              Book Your Free Demo
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
