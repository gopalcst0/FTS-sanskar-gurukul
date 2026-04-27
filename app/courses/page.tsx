import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CourseCard } from '@/components/course-card'

export const metadata: Metadata = {
  title: 'Courses | FTS Sanskar Gurukul Class',
  description: 'Explore our comprehensive Hindu Dharma and संस्कार courses for all age groups.',
}

const courses = [
  {
    title: 'Introduction to Vedas',
    description: 'Learn the foundations of Vedic wisdom and ancient knowledge systems',
    ageGroup: '6-12 Years',
    duration: '8 Weeks',
    highlights: ['Vedic fundamentals', 'Sanskrit introduction', 'Daily rituals explained', 'Interactive sessions'],
  },
  {
    title: 'Hindu Mythology & Stories',
    description: 'Explore inspiring tales from Ramayana, Mahabharata, and Puranas',
    ageGroup: '5-10 Years',
    duration: '10 Weeks',
    highlights: ['Ramayana & Mahabharata', 'Character lessons', 'Storytelling techniques', 'Cultural context'],
  },
  {
    title: 'Yoga & Meditation for Kids',
    description: 'Build strength, flexibility, and inner peace through yoga practice',
    ageGroup: '4-14 Years',
    duration: '12 Weeks',
    highlights: ['Basic asanas', 'Breathing techniques', 'Meditation basics', 'Wellness focus'],
  },
  {
    title: 'Sanskrit Language Basics',
    description: 'Learn the sacred language and understand ancient texts',
    ageGroup: '8-16 Years',
    duration: '12 Weeks',
    highlights: ['Alphabet & phonetics', 'Basic grammar', 'Simple verses', 'Pronunciation'],
  },
  {
    title: 'Bhagavad Gita Wisdom',
    description: 'Understand life lessons from the Bhagavad Gita in age-appropriate ways',
    ageGroup: '10-18 Years',
    duration: '10 Weeks',
    highlights: ['Key teachings', 'Life lessons', 'Ethical guidance', 'Modern relevance'],
  },
  {
    title: 'Hindu Festivals & Celebrations',
    description: 'Discover the significance and traditions behind major Hindu festivals',
    ageGroup: '4-12 Years',
    duration: '6 Weeks',
    highlights: ['Festival meanings', 'Celebration rituals', 'Stories & legends', 'Family traditions'],
  },
  {
    title: 'Upanishads for Youth',
    description: 'Explore philosophical wisdom from the Upanishads',
    ageGroup: '12-18 Years',
    duration: '10 Weeks',
    highlights: ['Philosophical concepts', 'Spiritual inquiry', 'Self-knowledge', 'Life purpose'],
  },
  {
    title: 'Hindu Art & Architecture',
    description: 'Understand the spiritual symbolism in Hindu art, temples, and design',
    ageGroup: '8-14 Years',
    duration: '8 Weeks',
    highlights: ['Temple symbolism', 'Art forms', 'Iconography', 'Sacred geometry'],
  },
  {
    title: 'Character Building Through Dharma',
    description: 'Develop virtues and character through Dharmic principles',
    ageGroup: '6-14 Years',
    duration: '12 Weeks',
    highlights: ['Virtue development', 'Ethical living', 'Leadership', 'Role models'],
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
            All Courses are FREE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Courses
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Choose from our carefully curated curriculum designed to nurture your child&apos;s spiritual growth and cultural connection. All classes are offered completely free as our gift to the community.
          </p>
        </div>
      </section>

      {/* Filters Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70">
            <div>
              <span className="font-semibold text-foreground">{courses.length}</span> courses available
            </div>
            <div>•</div>
            <div>All age groups covered from 4 to 18 years</div>
            <div>•</div>
            <div>Online and offline options available</div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                ageGroup={course.ageGroup}
                duration={course.duration}
                highlights={course.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Flexible Learning Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Live Online Classes</h3>
                <p className="text-foreground/70">
                  Join interactive live sessions from anywhere. Perfect for busy families with flexible scheduling options.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Recorded Sessions</h3>
                <p className="text-foreground/70">
                  Access recorded classes anytime. Catch up on missed sessions and learn at your own pace.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Teaching Approach</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                Age-appropriate curriculum designed by spiritual educators
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                Interactive learning with storytelling, games, and discussions
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                Small class sizes for personalized attention
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                Regular assessments and progress reports for parents
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                Certificate of completion for all courses
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
