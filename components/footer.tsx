import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">FTS SANSKAR GURUKUL CLASS</h3>
            <p className="text-sm opacity-90">
              Teaching Hindu Dharma values and संस्कार to the next generation through authentic spiritual education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:opacity-80 transition-opacity">About</Link></li>
              <li><Link href="/courses" className="hover:opacity-80 transition-opacity">Courses</Link></li>
              <li><Link href="/dharma" className="hover:opacity-80 transition-opacity">Dharma Knowledge</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@ftssanskar.com" className="hover:opacity-80 transition-opacity">
                  contact@ftssanskar.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:opacity-80 transition-opacity">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Online Classes Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex justify-between items-center">
          <p className="text-sm opacity-75">
            © 2024 FTS SANSKAR GURUKUL CLASS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
