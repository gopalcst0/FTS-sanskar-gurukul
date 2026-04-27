import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DemoBookingForm } from '@/components/demo-booking-form'

export const metadata: Metadata = {
  title: 'Book Demo Class | FTS Sanskar Gurukul Class',
  description: 'Schedule your free demo class today and experience FTS Sanskar Gurukul.',
}

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Free Demo Class
          </h1>
          <p className="text-lg text-foreground/70">
            Experience our teaching approach firsthand. No commitment required—just pure spiritual learning.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <DemoBookingForm />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg leading-none">✓</span>
                  <span>A 30-minute interactive demo class</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg leading-none">✓</span>
                  <span>Personalized course recommendation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg leading-none">✓</span>
                  <span>Discussion of your child&apos;s interests and goals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg leading-none">✓</span>
                  <span>Information about enrollment and next steps</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-4">Why Book a Demo?</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>• Meet your potential instructor</li>
                <li>• Understand our teaching style</li>
                <li>• See if the course matches your child&apos;s needs</li>
                <li>• Get answers to all your questions</li>
                <li>• Special discount for demo attendees</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-3">Have Questions?</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Our team will contact you within 24 hours to confirm your demo class and answer any questions.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70">
                  <strong className="text-foreground">Email:</strong> contact@ftssanskar.com
                </p>
                <p className="text-foreground/70">
                  <strong className="text-foreground">Phone:</strong> +1 (234) 567-890
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            After Your Demo Class
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: '1',
                title: 'Consultation',
                description: 'Personalized advice on the best course for your child',
              },
              {
                number: '2',
                title: 'Special Offer',
                description: 'Exclusive demo-attendee discount on your first course',
              },
              {
                number: '3',
                title: 'Flexible Schedule',
                description: 'Choose from multiple class times and formats',
              },
              {
                number: '4',
                title: 'Complete Support',
                description: 'Full support from our team throughout the course',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
