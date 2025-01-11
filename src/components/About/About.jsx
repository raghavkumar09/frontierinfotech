

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 pt-28">
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              We are a passionate team of digital experts dedicated to helping businesses thrive in the online world. Our comprehensive range of services includes web design, web development, app development, SEO, and landing page creation.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/team.jpg" alt="Our Team" className="rounded-lg shadow-md w-full" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, our company has quickly grown from a small group of tech enthusiasts to a full-service digital agency. We recognized the growing need for businesses to have a strong online presence, and we've made it our mission to provide cutting-edge solutions that drive growth and success.
          </p>
          <p className="text-gray-600">
            Our team of skilled designers, developers, and digital marketers work collaboratively to deliver exceptional results for our clients. We stay at the forefront of technology trends and best practices to ensure we're always offering the most effective solutions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Design & Development</h3>
              <p className="text-gray-600">Creating stunning, responsive websites that not only look great but also perform exceptionally.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">App Development</h3>
              <p className="text-gray-600">Building innovative mobile applications that help businesses connect with their customers on-the-go.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">SEO & Digital Marketing</h3>
              <p className="text-gray-600">Boosting online visibility and driving organic traffic through effective SEO strategies and compelling landing pages.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              At the core of our work is a client-centric approach. We believe in:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Understanding each client's unique needs and goals</li>
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

