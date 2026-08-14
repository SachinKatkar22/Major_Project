import React from 'react'
import Page1 from '../components/Page1'
const Home = () => {
  return (
    <div>
          <Page1/>

        <section id="about" className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">About Our Work</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Leveraging modern stacks to build high-performance web applications.
        </p>
      </section>
      
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
      
    </div>
  )
}

export default Home
