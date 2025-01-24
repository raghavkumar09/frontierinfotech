import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@frontierinfotech.com</span>
              </li>
              <li>
                <i className="fas fa-globe mr-2"></i>
                <span>www.frontierinfotech.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link to="#">Graphic Design</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Website Design</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Digital Marketing</Link>
              </li>
              <li className="mb-2">
                <Link to="#">E-Commerce Development</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Mobile App Development</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Web Development</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Software Development</Link>
              </li>
              <li>
                <Link to="#">SaaS Development</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Refund Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter!</h3>
            <p className="text-gray-600 mb-4">
              Take advantage of exclusive deals and insightful content straight to your inbox!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-r-md">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500">
          © 2025 Frontierinfotech Software Solutions | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;