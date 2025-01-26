import { Link } from "react-router-dom";
import { Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#780206] to-[#061161] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="text-white opacity-75">
              <li className="mb-2 flex items-center">
                <Mail className="mr-2" />
                <span className="cursor-pointer hover:underline hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  info@frontierinfotech.com
                </span>
              </li>
              <li className="mb-2 flex items-center">
                <Globe className="mr-2" />
                <span className="cursor-pointer hover:underline hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  www.frontierinfotech.com
                </span>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="text-white opacity-75">
              {[
                "Graphic Design",
                "Website Design",
                "Digital Marketing",
                "E-Commerce Development",
                "Mobile App Development",
                "Web Development",
                "Software Development",
                "SaaS Development",
              ].map((service, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to="#"
                    className= "hover:text-yellow-300 hover:underline transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="text-white opacity-75">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "#" },
                { name: "Refund Policy", path: "#" },
                { name: "Terms & Conditions", path: "#" },
              ].map((resource, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={resource.path}
                    className="cursor-pointer hover:underline hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter!</h3>
            <p className="text-white opacity-75 mb-4">
              Take advantage of exclusive deals and insightful content straight to your inbox!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-md"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-r-md">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-12 text-white opacity-75">
          <p>&copy; {new Date().getFullYear()} Frontier Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
