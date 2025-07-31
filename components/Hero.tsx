import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import herocar from '../public/images/herocar3.png';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#0b0c19] py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={herocar}
          alt="Auto Service Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c19]/40 via-transparent to-transparent lg:from-[#0b0c19]/60 lg:via-[#0b0c19]/20 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Software Solutions
                <span className="text-blue-400 block">for the Automobile Industry</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed drop-shadow-md">
                Comprehensive software solutions for dealerships, service centers, manufacturers, and automotive businesses.
                Streamline operations, enhance customer experience, and drive growth with our cutting-edge technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                See Our Services
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all backdrop-blur-sm bg-white/10">
                Book a Free Consultation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 drop-shadow-lg">100%</div>
                <div className="text-sm text-gray-400">Dedication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 drop-shadow-lg">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}