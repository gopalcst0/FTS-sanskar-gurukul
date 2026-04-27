import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | FTS Sanskar Gurukul Class',
  description: 'Get in touch with FTS Sanskar Gurukul Class. We&apos;d love to hear from you.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Have questions? We&apos;d love to hear from you. Contact us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:contact@ftssanskar.com" className="text-primary hover:text-primary/80 transition-colors">
                contact@ftssanskar.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Response within 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-primary hover:text-primary/80 transition-colors">
                +1 (234) 567-890
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Monday - Friday, 9 AM - 6 PM
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-primary">Online Classes</p>
              <p className="text-xs text-muted-foreground mt-2">
                Available worldwide
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Hours</h3>
              <p className="text-sm text-foreground">Mon-Fri: 9am-6pm</p>
              <p className="text-sm text-foreground">Sat: 10am-4pm</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us what&apos;s on your mind..."
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <MessageSquare size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Have questions about our courses and programs</span>
                </li>
                <li className="flex gap-3">
                  <MessageSquare size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Want to book a demo class for your child</span>
                </li>
                <li className="flex gap-3">
                  <MessageSquare size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Interested in teacher opportunities</span>
                </li>
                <li className="flex gap-3">
                  <MessageSquare size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Feedback or partnership inquiries</span>
                </li>
              </ul>
            </div>

            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="pt-6">
                <h3 className="font-bold text-primary mb-3">Response Time</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.
                </p>
                <div className="text-xs text-muted-foreground">
                  <p>• Weekday calls: 9 AM - 6 PM</p>
                  <p>• Weekend calls: 10 AM - 4 PM</p>
                  <p>• Email: Anytime</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <h3 className="font-bold text-primary mb-3">Quick Response</h3>
                <p className="text-sm text-foreground/70">
                  For immediate assistance, use our chat feature on the website or call us directly. We&apos;re here to help!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Quick FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'How do I register for a course?',
                answer: 'Start by booking a free demo class. Our team will guide you through the enrollment process and help you choose the right course for your child.',
              },
              {
                question: 'What if I want to cancel?',
                answer: 'We offer a 7-day money-back guarantee. After that, cancellation policies vary by course. Contact us for specific details.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we have a 7-day money-back guarantee from the start of your course. No questions asked.',
              },
              {
                question: 'Can I switch between courses?',
                answer: 'Absolutely! Contact our support team and we&apos;ll help you transition to a different course if your needs change.',
              },
              {
                question: 'Are classes recorded?',
                answer: 'Yes, live classes are recorded and available for review. You can catch up anytime from your dashboard.',
              },
              {
                question: 'How many students per class?',
                answer: 'We keep class sizes small (6-12 students) to ensure personalized attention and meaningful interactions.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-sm text-foreground/70">{faq.answer}</p>
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
