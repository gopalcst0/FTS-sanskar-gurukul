import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DeityCard } from '@/components/deity-card'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Dharma Knowledge | FTS Sanskar Gurukul Class',
  description: 'Learn about Hindu Dharma, deities, and spiritual wisdom.',
}

export default function DharmaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Dharma Knowledge
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore the wisdom of Hindu philosophy, deities, and spiritual teachings that guide our courses.
          </p>
        </div>
      </section>

      {/* What is Dharma */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary">What is Dharma?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Dharma (धर्म) is one of the most important concepts in Hindu philosophy. It encompasses righteousness, duty, ethical conduct, and the natural law that governs the universe. Every individual, based on their age, social role, and abilities, has specific dharmas to follow.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Righteousness',
                description: 'Following the path of truth and justice in all actions and decisions.',
              },
              {
                title: 'Duty',
                description: 'Fulfilling responsibilities towards family, society, and the world.',
              },
              {
                title: 'Natural Law',
                description: 'Living in harmony with the principles that govern nature and existence.',
              },
            ].map((concept, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2">{concept.title}</h3>
                  <p className="text-sm text-foreground/70">{concept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            The Four Pillars of Life
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Dharma',
                subtitle: 'Righteousness',
                description: 'Following ethical principles and moral duty in all aspects of life.',
                icon: '⚖️',
              },
              {
                title: 'Artha',
                subtitle: 'Prosperity',
                description: 'Building wealth and security through honest means for family welfare.',
                icon: '🏛️',
              },
              {
                title: 'Kama',
                subtitle: 'Desire',
                description: 'Pursuing healthy desires and pleasures within ethical boundaries.',
                icon: '🎨',
              },
              {
                title: 'Moksha',
                subtitle: 'Liberation',
                description: 'Achieving spiritual liberation through self-realization and wisdom.',
                icon: '✨',
              },
            ].map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="font-bold text-primary text-lg mb-1">{pillar.title}</h3>
                  <p className="text-secondary font-semibold text-sm mb-3">{pillar.subtitle}</p>
                  <p className="text-sm text-foreground/70">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Deities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Major Deities of Hinduism
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Each deity represents different aspects of divine consciousness and cosmic forces.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DeityCard
              name="Brahma"
              sanskrit="ब्रह्मा"
              description="The creator of the universe and all beings. He represents the creative aspect of divinity."
              significance="Associated with knowledge, creativity, and new beginnings. Venerated in his role as the architect of the cosmos."
            />
            <DeityCard
              name="Vishnu"
              sanskrit="विष्णु"
              description="The preserver and sustainer of the universe. He manifests in different avatars to protect dharma."
              significance="Known for maintaining cosmic order. His avatars include Rama and Krishna, worshipped for their divine teachings."
            />
            <DeityCard
              name="Shiva"
              sanskrit="शिव"
              description="The destroyer and transformer. He represents dissolution, meditation, and the cycle of creation."
              significance="The supreme meditator, worshipped in his form as the cosmic dancer and ascetic yogi."
            />
            <DeityCard
              name="Saraswati"
              sanskrit="सरस्वती"
              description="The goddess of wisdom, knowledge, arts, and learning. She is depicted with a veena (musical instrument)."
              significance="Revered by students and scholars. Associated with eloquence, music, and all forms of knowledge."
            />
            <DeityCard
              name="Lakshmi"
              sanskrit="लक्ष्मी"
              description="The goddess of wealth, prosperity, and good fortune. She represents abundance in all forms."
              significance="Worshipped during festivals like Diwali. Represents not just material wealth, but spiritual prosperity."
            />
            <DeityCard
              name="Durga"
              sanskrit="दुर्गा"
              description="The warrior goddess who defeats evil and protects the righteous. She embodies divine feminine power."
              significance="Represents courage, strength, and the triumph of good over evil in all its forms."
            />
          </div>
        </div>
      </section>

      {/* Sacred Texts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Sacred Texts of Hinduism
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'The Vedas',
                subtitle: 'वेद - The Foundation of Knowledge',
                description: 'The oldest and most authoritative scriptures of Hinduism. They contain hymns, rituals, philosophy, and spiritual wisdom. The four Vedas are the Rigveda, Yajurveda, Samaveda, and Atharvaveda.',
              },
              {
                title: 'The Upanishads',
                subtitle: 'उपनिषद् - The Secret Teachings',
                description: 'Philosophical texts that explore the nature of reality, consciousness, and the self. They form the basis of Vedantic philosophy and emphasize the unity of Brahman (ultimate reality) and Atman (individual soul).',
              },
              {
                title: 'The Bhagavad Gita',
                subtitle: 'भगवद् गीता - The Song of the Divine',
                description: 'A sacred dialogue between Lord Krishna and the warrior Arjuna on the battlefield of Kurukshetra. It teaches about duty, devotion, wisdom, and the path to spiritual enlightenment.',
              },
              {
                title: 'The Ramayana',
                subtitle: 'रामायण - The Story of Rama',
                description: 'An epic poem narrating the life and adventures of Lord Rama. It illustrates the ideals of dharma, family values, loyalty, and righteousness through compelling stories.',
              },
              {
                title: 'The Mahabharata',
                subtitle: 'महाभारत - The Great War Epic',
                description: 'The world\'s longest epic poem, containing the stories of the Kuru dynasty. It includes profound teachings on ethics, spirituality, and human nature alongside the great war narrative.',
              },
              {
                title: 'The Puranas',
                subtitle: 'पुराण - The Ancient Stories',
                description: 'Collections of mythological tales about gods, goddesses, and great sages. They make spiritual teachings accessible through engaging stories and are important for worship and devotion.',
              },
            ].map((text, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">{text.title}</h3>
                <p className="text-secondary font-semibold text-sm mb-3">{text.subtitle}</p>
                <p className="text-foreground/70">{text.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Concepts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Important Spiritual Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Karma',
                description: 'The law of cause and effect. Every action creates consequences, shaping our present and future lives.',
              },
              {
                title: 'Reincarnation',
                description: 'The belief that the soul is eternal and takes birth repeatedly to learn and evolve spiritually.',
              },
              {
                title: 'Ahimsa',
                description: 'Non-violence in thought, word, and deed. A fundamental principle of living righteously and peacefully.',
              },
              {
                title: 'Yoga',
                description: 'The path of union with the divine. Includes physical practices, meditation, and mental discipline.',
              },
              {
                title: 'Bhakti',
                description: 'Devotion to the divine. Expressing love and surrender to god through prayer, music, and service.',
              },
              {
                title: 'Jnana',
                description: 'Spiritual knowledge and wisdom. Knowing the nature of reality, self, and the ultimate truth.',
              },
            ].map((concept, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary text-lg mb-2">{concept.title}</h3>
                  <p className="text-sm text-foreground/70">{concept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
