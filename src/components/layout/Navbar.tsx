import React from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <Zap className="w-8 h-8 text-primary-600 transform group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold font-display gradient-text">BME Creators</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Success Stories', 'FAQ', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {['Home', 'About', 'Services', 'Success Stories', 'FAQ', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/apply"
            className="block px-3 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}