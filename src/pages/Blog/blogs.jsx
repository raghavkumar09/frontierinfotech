import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Mock data for blog posts (including full content)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge design trends that will shape the digital landscape in the coming year.",
    content:
      "As we approach 2025, the world of web design continues to evolve at a rapid pace. From immersive 3D experiences to AI-driven personalization, the future of web design promises to be more engaging and user-centric than ever before. In this post, we'll explore the top trends that are set to dominate the industry, including:\n\n1. Virtual and Augmented Reality Integration\n2. AI-Powered Design Assistants\n3. Advanced Micro-Interactions\n4. Sustainable and Eco-Friendly Web Design\n5. Voice User Interface (VUI) Integration\n\nStay ahead of the curve and learn how these trends can elevate your digital presence.",
    author: "Jane Doe",
    date: "2025-01-15",
    category: "Design",
    imageUrl: "/abstract.jpg",
  },
  {
    id: 2,
    title: "Maximizing ROI with AI-Driven Digital Marketing Strategies",
    excerpt:
      "Learn how artificial intelligence is revolutionizing digital marketing and how you can leverage it for your business.",
    content:
      "Artificial Intelligence is no longer just a buzzword in the world of digital marketing - it's a game-changer. By harnessing the power of AI, businesses can dramatically improve their marketing ROI through more targeted campaigns, predictive analytics, and personalized customer experiences. This post delves into:\n\n1. AI-Powered Customer Segmentation\n2. Predictive Lead Scoring\n3. Chatbots and Conversational Marketing\n4. AI-Generated Content\n5. Dynamic Pricing Strategies\n\nDiscover how to implement these AI-driven strategies to stay ahead of the competition and drive unprecedented growth for your business.",
    author: "John Smith",
    date: "2025-01-10",
    category: "Marketing",
    imageUrl: "/abstract.jpg",
  },
  {
    id: 3,
    title: "The Rise of Progressive Web Apps: Why Your Business Needs One",
    excerpt: "Discover the benefits of Progressive Web Apps and why they're becoming essential for modern businesses.",
    content:
      "Progressive Web Apps (PWAs) are revolutionizing the way businesses interact with their customers online. Combining the best features of websites and native apps, PWAs offer a seamless, fast, and engaging user experience across all devices. In this post, we'll explore:\n\n1. What are Progressive Web Apps?\n2. Key Benefits of PWAs for Businesses\n3. Success Stories: Companies Winning with PWAs\n4. How to Implement a PWA for Your Business\n5. The Future of PWAs and Web Technologies\n\nLearn why PWAs are becoming an essential tool for businesses looking to enhance their digital presence and improve customer engagement.",
    author: "Alice Johnson",
    date: "2025-01-05",
    category: "Development",
    imageUrl: "/abstract.jpg",
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of IoT: Protecting Your Digital Assets",
    excerpt:
      "Understand the evolving cybersecurity landscape and learn strategies to safeguard your digital infrastructure.",
    content:
      "As the Internet of Things (IoT) continues to expand, so do the potential vulnerabilities in our digital ecosystems. Protecting your digital assets has never been more crucial. This comprehensive guide covers:\n\n1. The Evolving Threat Landscape in IoT\n2. Common Vulnerabilities in IoT Devices\n3. Best Practices for IoT Security\n4. Implementing a Zero Trust Architecture\n5. The Role of AI and Machine Learning in Cybersecurity\n\nStay one step ahead of cyber threats and ensure your business's digital assets remain secure in the age of IoT.",
    author: "Bob Williams",
    date: "2024-12-28",
    category: "Security",
    imageUrl: "/blog-post-4.jpg",
  },
  {
    id: 5,
    title: "The Power of Data Visualization in UX Design",
    excerpt: "Explore how data visualization can enhance user experience and drive engagement in digital products.",
    content:
      "In the age of big data, effective data visualization has become a crucial component of UX design. By transforming complex data sets into intuitive, visually appealing graphics, businesses can enhance user understanding and drive engagement. This post explores:\n\n1. The Psychology Behind Data Visualization\n2. Key Principles of Effective Data Visualization\n3. Tools and Technologies for Creating Compelling Visualizations\n4. Case Studies: Successful Data Visualization in UX Design\n5. Future Trends in Data Visualization\n\nDiscover how to harness the power of data visualization to create more intuitive, engaging, and effective user experiences.",
    author: "Emma Brown",
    date: "2024-12-20",
    category: "Design",
    imageUrl: "/blog-post-5.jpg",
  },
]

const categories = ["All", "Design", "Marketing", "Development", "Security"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState(null)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const openModal = (post) => {
    setSelectedPost(post)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedPost(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Insights
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border border-gray-800 transition-colors duration-300 ${
                selectedCategory === category ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(post)}
            >
              <img
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-orange-600 text-sm font-semibold">{post.category}</span>
                <h2 className="text-xl font-bold mb-2 mt-1">{post.title}</h2>
                <p className="text-gray-900 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-orange-600 hover:text-gray-600 transition-colors duration-300">Read More →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.p
            className="text-center text-xl mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No posts found in this category.
          </motion.p>
        )}
      </main>
      
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-gray-50 rounded-lg max-w-full w-full max-h-full h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-orange-600 text-sm font-semibold">{selectedPost.category}</span>
                  <span className="text-sm text-gray-500">{selectedPost.date}</span>
                </div>
                <img
                  src={selectedPost.imageUrl || "/placeholder.svg"}
                  alt={selectedPost.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-900 whitespace-pre-line">{selectedPost.content}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-gray-600">By {selectedPost.author}</span>
                  <button
                    onClick={closeModal}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

