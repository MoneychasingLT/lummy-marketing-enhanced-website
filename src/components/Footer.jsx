import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logowhite.png" alt="Lummy Marketing" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </p>
            <div className="flex space-x-4">
  <a href="https://facebook.com/profile.php?id=61579224539820" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
    <Facebook size={20} />
  </a>
  <a href="https://instagram.com/lummy.marketing/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
    <Instagram size={20} />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PPC Advertising</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">
                  1000 Main Street, Suite 200<br />
                  Houston, TX 77002, USA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">+1 (630) 934-6261</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">hello@lummymarketing.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lummy Marketing. All rights reserved. | <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

