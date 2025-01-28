import { motion } from 'framer-motion'

export default function AboutUs() {
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
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We are a passionate team of digital experts dedicated to helping businesses thrive in the online world. Our comprehensive range of services includes web design, web development, app development, SEO, and landing page creation.
          </motion.p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, our company has quickly grown from a small group of tech enthusiasts to a full-service digital agency. We recognized the growing need for businesses to have a strong online presence, and we&apos;ve made it our mission to provide cutting-edge solutions that drive growth and success.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of skilled designers, developers, and digital marketers work collaboratively to deliver exceptional results for our clients. We stay at the forefront of technology trends and best practices to ensure we&apos;re always offering the most effective solutions.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Sagar Jha",
                subTitle: "Owner and Digital Marketing Expert",
                description:
                  "Sagar is the driving force behind our success. With extensive experience in digital marketing, SEO, Google Ads, and Facebook Ads, he crafts result-oriented strategies tailored to our clients's needs.",
              },
              {
                title: "Shivam Kumar",
                subTitle: "Tech Lead",
                description:
                  "Shivam is the cornerstone of our technical expertise. As the Tech Lead, he oversees project development, ensuring robust and scalable solutions are built. His in-depth knowledge of modern technologies guarantees precision in all our projects.",
              },
              {
                title: "Saurav Kumar",
                subTitle: "Software Developer",
                description:
                  "Saurav is a dedicated software developer with a knack for turning complex problems into simple, effective solutions. His technical skills and adaptability make him an essential member of our team.",
              },
              {
                title: "Raghav Kumar",
                subTitle: "Full-Stack Developer",
                description:
                  "Raghav bridges the gap between frontend and backend technologies. His expertise lies in creating intuitive user interfaces and building efficient server-side architectures that align with client goals.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg overflow-hidden relative text-gray-700`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                <div className=" flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold mb-2 relative z-10 ">{service.title}</h3>
                </div>
                <p className="relative z-10 text-gray-600 font-semibold mb-2">{service.subTitle}</p>
                <p className="relative z-10 ">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design & Development",
                description:
                  "Creating stunning, responsive websites that not only look great but also perform exceptionally.",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                title: "App Development",
                description:
                  "Building innovative mobile applications that help businesses connect with their customers on-the-go.",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                title: "SEO & Digital Marketing",
                description:
                  "Boosting online visibility and driving organic traffic through effective SEO strategies and compelling landing pages.",
                gradient: "from-green-400 to-cyan-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg overflow-hidden relative bg-gray-900 text-white`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                <div className=" flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold mb-2 relative z-10">{service.title}</h3>
                </div>
                <p className="relative z-10">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              At the core of our work is a client-centric approach. We believe in:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Understanding each client&apos;s unique needs and goals</li>
              <li>Providing tailored solutions that align with business objectives</li>
              <li>Maintaining open communication throughout the project lifecycle</li>
              <li>Delivering high-quality results that exceed expectations</li>
              <li>Offering ongoing support and guidance post-project completion</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Experienced team of digital professionals</li>
              <li>Comprehensive range of services under one roof</li>
              <li>Commitment to staying current with the latest technologies</li>
              <li>Proven track record of successful projects</li>
              <li>Dedication to client satisfaction and long-term partnerships</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/work.jpg" alt="Why Choose Us" width={500} height={300} className="rounded-lg shadow-md w-full" />
          </div>
        </section>
      </main>
      <hr />
    </div>
  )
}

