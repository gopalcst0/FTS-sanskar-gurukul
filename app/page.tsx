import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CourseCard } from '@/components/course-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Sparkles, Heart, BookOpen, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home | FTS Sanskar Gurukul Class',
  description: 'Welcome to FTS Sanskar Gurukul Class - Teaching Hindu Dharma values and संस्कार to children.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                  🙏 Spiritual Education
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Nurture Your Child&apos;s Spiritual Journey
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Learn authentic Hindu Dharma values, संस्कार, and spiritual traditions. Our expert-led classes inspire children to embrace their cultural heritage and develop character.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button className="bg-accent hover:bg-accent/90 px-8 py-6 text-base">
                    Book Free Demo
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" className="px-8 py-6 text-base border-primary text-primary hover:bg-primary/5">
                    Explore Courses
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 pt-4 text-sm">
                <div>
                  <p className="font-bold text-primary text-lg">500+</p>
                  <p className="text-muted-foreground">Students Enrolled</p>
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">15+</p>
                  <p className="text-muted-foreground">Expert Teachers</p>
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">10+</p>
                  <p className="text-muted-foreground">Unique Courses</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/om-ornate.png"
                  alt="Sacred Om symbol representing spiritual consciousness"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Learning Community in Action</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              See the vibrant, interactive classes where children learn spiritual wisdom and develop character.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer">
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery-class-1.jpg"
                  alt="Interactive class learning session with children"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center font-semibold text-foreground">Interactive Learning</p>
            </div>
            <div className="relative group cursor-pointer">
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery-class-2.jpg"
                  alt="Engaging group activities with community participation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center font-semibold text-foreground">Community Engagement</p>
            </div>
            <div className="relative group cursor-pointer">
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery-class-3.jpg"
                  alt="Spiritual learning circle with children seated together"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center font-semibold text-foreground">Spiritual Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose FTS SANSKAR GURUKUL CLASS?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We combine traditional wisdom with modern teaching methods to create a transformative learning experience.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'Expert Teachers',
                description: 'Experienced spiritual educators with deep knowledge of Hindu traditions',
              },
              {
                icon: Heart,
                title: 'Character Building',
                description: 'Focus on developing values like compassion, integrity, and respect',
              },
              {
                icon: BookOpen,
                title: 'Rich Curriculum',
                description: 'Comprehensive courses covering Vedas, mythology, yoga, and Sanskrit',
              },
              {
                icon: Users,
                title: 'Community Focus',
                description: 'Build meaningful connections with like-minded families and peers',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Popular Courses</h2>
            <p className="text-foreground/70 mb-4">
              Choose from our carefully designed curriculum for all age groups. All courses are completely free!
            </p>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
              100% Free Education
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <CourseCard
              title="Introduction to Vedas"
              description="Learn the foundations of Vedic wisdom and ancient knowledge"
              ageGroup="6-12 Years"
              duration="8 Weeks"
              highlights={[
                'Vedic fundamentals',
                'Sanskrit introduction',
                'Daily rituals explained',
                'Interactive sessions',
              ]}
            />
            <CourseCard
              title="Hindu Mythology & Stories"
              description="Explore inspiring tales from Ramayana, Mahabharata, and more"
              ageGroup="5-10 Years"
              duration="10 Weeks"
              highlights={[
                'Ramayana & Mahabharata',
                'Character lessons',
                'Storytelling techniques',
                'Cultural context',
              ]}
            />
            <CourseCard
              title="Yoga & Meditation for Kids"
              description="Build strength, flexibility, and inner peace through yoga"
              ageGroup="4-14 Years"
              duration="12 Weeks"
              highlights={[
                'Basic asanas',
                'Breathing techniques',
                'Meditation basics',
                'Wellness focus',
              ]}
            />
          </div>
          <div className="text-center mt-10">
            <Link href="/courses">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Parents Say</h2>
            <p className="text-foreground/70">
              Hear from families who have experienced the transformation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Priya Sharma"
              role="Parent of 8-year-old"
              content="My daughter has become more confident and deeply connected to her cultural roots. The teaching approach is both fun and meaningful."
              rating={5}
            />
            <TestimonialCard
              name="Rajesh Kumar"
              role="Parent of 10-year-old"
              content="Exceptional instructors who truly care about children&apos;s holistic development. The focus on character and values is commendable."
              rating={5}
            />
            <TestimonialCard
              name="Anjali Patel"
              role="Parent of 6-year-old"
              content="The classes are engaging and age-appropriate. My son looks forward to every session. We&apos;ve seen real behavioral improvements."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-foreground hover:text-primary">
                What age groups can enroll?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We offer courses for children aged 3 to 18 years. Each program is tailored to the developmental stage and learning needs of the age group.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-foreground hover:text-primary">
                Are classes online or offline?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We offer both online live classes and offline sessions in select locations. Choose the format that works best for your family.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-foreground hover:text-primary">
                Do I need prior knowledge of Hindu traditions?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                No prior knowledge is required. Our curriculum is designed from the ground up for beginners and progresses at a comfortable pace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-foreground hover:text-primary">
                Can I get a refund if not satisfied?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Yes, we offer a 7-day money-back guarantee if you&apos;re not completely satisfied with the course. No questions asked.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-foreground hover:text-primary">
                How do you ensure class safety and quality?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                All instructors are background-checked and certified. We maintain small class sizes and have strict quality standards for curriculum and teaching methods.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Start Your Child&apos;s Spiritual Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Join hundreds of families who are nurturing their children&apos;s connection to Hindu traditions and values.
          </p>
          <Link href="/book">
            <Button className="bg-accent hover:bg-accent/90 px-8 py-6 text-base">
              Book Your Free Demo Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
