import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useScrollToTop();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="absolute inset-0 bg-gray-900  shadow-md"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            <NavLink href="/" className="text-white text-xl font-bold">
              FRONTIER INFOTECH
            </NavLink>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  ></path>
                </svg>
              </button>
            </div>

            {/* NavLinks (for desktop) */}
            <nav className="hidden md:flex space-x-8 relative z-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-bold" : "text-white"
                  }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-bold" : "text-white"
                  }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-bold" : "text-white"
                  }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 font-bold" : "text-white"
                  }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Sliding from the Right */}
        <div
          className={`fixed inset-y-0 right-0 z-20 w-full bg-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden position-fixed top-[65px]`}
        >
          <div className="flex flex-col h-full p-6 space-y-4">
            {/* Navigation NavLinks */}
            <NavLink
              to="/"
              className="text-lg font-medium text-gray-800 hover:text-gray-900"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-lg font-medium text-gray-800 hover:text-gray-900"
              onClick={handleLinkClick}
            >
              About Us
            </NavLink>
            <NavLink
              to="/service"
              className="text-lg font-medium text-gray-800 hover:text-gray-900"
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="text-lg font-medium text-gray-800 hover:text-gray-900"
              onClick={handleLinkClick}
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black opacity-0 z-10 md:hidden"
          ></div>
        )}
      </header>
    </>
  )
}

