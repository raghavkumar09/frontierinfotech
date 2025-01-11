

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
                <span>info@yourdomain.com</span> {/* Replace with your email */}
              </li>
              <li>
                <i className="fas fa-globe mr-2"></i>
                <span>www.yourwebsite.com</span> {/* Replace with your website */}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="text-gray-600">
              <li className="mb-2">Graphic Design</li>
              <li className="mb-2">Website Design</li>
              <li className="mb-2">Digital Marketing</li>
              <li className="mb-2">E-Commerce Development</li>
              <li className="mb-2">Mobile App Development</li>
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Software Development</li>
              <li>SaaS Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="text-gray-600">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Refund Policy</li>
              <li>Terms & Conditions</li>
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
          © 2024 AOA Software Solution Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;