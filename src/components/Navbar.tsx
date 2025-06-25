import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { coursesData } from './Data/coursesData';
import KGLOGO from '../assets/Frame 6.png';

interface NavbarProps {
  currentPage?: string;
  onNavClick: (page: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-teal-600 font-bold transition-colors'
      : 'text-gray-700 hover:text-teal-600 font-medium transition-colors';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button className="flex items-center" onClick={() => onNavClick('/')}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            </div>
            <img
              src={KGLOGO}  // Replace with your actual image path
              alt="KGPath"
              className="-ml-18 h-14 object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => onNavClick('/home')} className="text-gray-700 hover:text-teal-600 font-medium">
              Home
            </button>
            <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
            <div className="relative hidden lg:block group">
                    <NavLink to="/courses" className={navLinkStyle}>
                      Courses
                    </NavLink>
                    <div className="absolute left-0 top-full mt-2 w-64 z-40 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="flex flex-col">
                        {coursesData.map((course) => (
                          <Link
                            key={course.id}
                            to={`/courses/${course.id}`}
                            className="px-4 py-3 border-b last:border-none hover:bg-teal-50 text-gray-800 font-medium transition-colors"
                          >
                            {course.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <NavLink to="/BlogPage" className={navLinkStyle}>Blog</NavLink>
            <NavLink to="/placement" className={navLinkStyle}>Placement</NavLink>
            <NavLink to="/career" className={navLinkStyle}>Career</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/courses">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 font-medium">
                Enroll Now
              </button>
            </Link>

            <div className="flex items-center bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 font-medium space-x-2">
              <Phone className="w-4 h-4" />
              <a href="#footer-bottom">
                <span>Contact us</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => { onNavClick('/courses'); setIsMenuOpen(false); }} className="block text-gray-700 hover:text-teal-600 font-medium">Courses</button>
            <button onClick={() => { onNavClick('/about'); setIsMenuOpen(false); }} className="block text-gray-700 hover:text-teal-600 font-medium">About Us</button>
            <button onClick={() => { onNavClick('/placement'); setIsMenuOpen(false); }} className="block text-gray-700 hover:text-teal-600 font-medium">Placement</button>
            <button onClick={() => { onNavClick('/career'); setIsMenuOpen(false); }} className="block text-gray-700 hover:text-teal-600 font-medium">Career</button>
            <button onClick={() => { onNavClick('/contact'); setIsMenuOpen(false); }} className="block text-gray-700 hover:text-teal-600 font-medium">Contact</button>
            <div className="pt-4 space-y-3">
              <Link to="/courses">
                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-medium">Enroll Now</button>
              </Link>
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 font-medium">7397788 918/915/917</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
