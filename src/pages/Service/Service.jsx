import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

export default function Services() {

  const services = [
    { id: 1, name: "Graphic Design", icon: "🎨", description: "Eye-catching visuals that communicate your brand" },
    { id: 2, name: "Website Design", icon: "🖥️", description: "Beautiful, responsive websites that engage users" },
    { id: 3, name: "Digital Marketing", icon: "📈", description: "Strategies to boost your online presence and reach" },
    { id: 4, name: "E-Commerce Development", icon: "🛒", description: "Powerful online stores for seamless selling" },
    { id: 5, name: "Mobile App Development", icon: "📱", description: "Innovative apps for iOS and Android platforms" },
    { id: 6, name: "Web Development", icon: "💻", description: "Robust, scalable web applications and solutions" },
    { id: 7, name: "Software Development", icon: "🔧", description: "Custom software tailored to your business needs" },
    { id: 8, name: "SaaS Development", icon: "☁️", description: "Scalable, cloud-based software solutions" },
    {
      id: 9,
      name: "Landing Page Creation",
      description: "Design high-converting landing pages that turn visitors into customers and boost your marketing campaigns.",
      icon: "🚀",
    },
    {
      id: 10,
      name: "Additional Services",
      description: "We offer a wide range of additional services including UI/UX design, e-commerce solutions, and website maintenance.",
      icon: "🛠️",
    },
  ]

  const ServiceCard = ({ service }) => {
    return (
      <motion.div
        className="bg-gray-900 text-white rounded-lg shadow-lg p-6 cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-4xl mb-4"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-white">{service.description}</p>
      </motion.div>
    )
  }

  ServiceCard.propTypes = {
    service: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 pt-20">
        <section className="mb-16">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-12 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We offer a comprehensive range of digital solutions to help your business thrive in the online world. From web design to SEO, we have got you covered.
          </motion.p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
              
            ))}
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Services?</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Experienced team of designers and developers</li>
              <li>Customized solutions tailored to your business needs</li>
              <li>Cutting-edge technologies and industry best practices</li>
              <li>Comprehensive project management and support</li>
              <li>Competitive pricing and flexible engagement models</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/software-development.jpg" alt="Our Services Showcase" width={500} height={300} className="rounded-lg shadow-md w-full" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-2">1️⃣</div>
              <h3 className="text-lg font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your goals and requirements to understand your vision.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-2">2️⃣</div>
              <h3 className="text-lg font-bold mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan and timeline for your approval.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-2">3️⃣</div>
              <h3 className="text-lg font-bold mb-2">Execution</h3>
              <p className="text-gray-600">Our team works diligently to bring your project to life.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-2">4️⃣</div>
              <h3 className="text-lg font-bold mb-2">Delivery & Support</h3>
              <p className="text-gray-600">We deliver the final product and provide ongoing support as needed.</p>
            </div>
          </div>
        </section>
      </main>
      <hr />
    </div>
  )
}



