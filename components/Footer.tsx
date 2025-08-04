import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c19] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">AutoService</h3>
            <p className="text-gray-300 leading-relaxed">
              Leading provider of comprehensive software solutions for the automotive industry.
              Empowering businesses with innovative technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dealership Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Service Center Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inventory Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics & Reporting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Applications</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For Dealerships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For Service Centers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For Manufacturers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">System Integration</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 9313067765</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">mustakimnagori076@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AutoService. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href={'/privacy-policy'} className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}