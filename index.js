import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = {
    about: 'About Us',
    services: 'Our Services',
    industries: 'Industries We Serve',
    approach: 'Our Approach',
    projects: 'Sample Projects',
    why: 'Why Choose T&R Technologies',
    vision: 'Our Vision',
    contact: 'Contact Us'
  }

  return (
    <>
      <Head>
        <title>T&R Technologies - Smart Solutions for Smarter Businesses</title>
        <meta name="description" content="UAE-based technology solutions company helping businesses achieve efficiency, scalability, and digital growth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">T&R Technologies</div>
            <div className="hidden md:flex space-x-8">
              {Object.entries(sections).map(([key, label]) => (
                <a 
                  key={key}
                  href={`#${key}`}
                  className="nav-link"
                  onClick={() => setActiveSection(key)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Smart Solutions for Smarter Businesses</h1>
          <p className="text-xl opacity-90">Bridging the gap between business goals and technology</p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">TABLE OF CONTENTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(sections).map(([key, label], index) => (
              <a 
                key={key}
                href={`#${key}`}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center"
                onClick={() => setActiveSection(key)}
              >
                <span className="font-semibold">{label}</span>
                <br />
                <span className="text-primary text-sm">{index + 1}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-6 py-12">
        
        {/* About Us */}
        <section id="about" className="mb-20 scroll-mt-24">
          <h2 className="section-title">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <p className="text-lg mb-4">
                T&R Technologies is a UAE-based technology solutions company dedicated to helping businesses achieve efficiency, scalability, and digital growth. We deliver practical, cost-effective, and innovative technology tailored to the specific needs of each client.
              </p>
              <p className="text-lg mb-4">
                Our mission is to bridge the gap between business goals and technology by creating solutions that are easy to adopt, reliable in performance, and adaptable for the future.
              </p>
              <p className="text-lg">
                We aim to be the trusted partner for SMEs and enterprises seeking to leverage digital transformation without unnecessary complexity or cost.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="mb-20 scroll-mt-24">
          <h2 className="section-title">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Software Development - Tailored systems and applications that align with your workflow and objectives.",
              "Web and Mobile Applications - Modern, user-friendly platforms designed for accessibility and scalability.",
              "Business Process Automation - Tools that reduce manual processes, streamline operations, and save valuable time.",
              "Data Analytics and Dashboards - Transform raw data into actionable insights for better decision-making.",
              "Custom Webpage Creation - Website tailored to your needs.",
              "AI-Powered Solutions - Smart tools such as chatbots, recommendation systems, and predictive analytics.",
              "Cloud Infrastructure and IT Support - Secure, reliable, and scalable solutions for long-term digital sustainability."
            ].map((service, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-primary mb-2">
                  {service.split(' - ')[0]}
                </h3>
                <p className="text-gray-600">{service.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries We Serve */}
        <section id="industries" className="mb-20 scroll-mt-24">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Retail & Wholesale",
                description: "We help retail businesses streamline operations by offering solutions for inventory management, sales tracking, customer relationship management, and e-commerce integration."
              },
              {
                title: "Logistics & Delivery Services", 
                description: "Our delivery management and tracking solutions enable logistics companies to optimize routes, monitor driver performance, and provide accurate delivery timelines."
              },
              {
                title: "Construction & Project Management",
                description: "We design digital tools to simplify scheduling, workforce management, and budget tracking. Our solutions improve project transparency and reduce delays."
              },
              {
                title: "Education & Training Institutions",
                description: "We support schools, universities, and training centers with e-learning platforms, student management systems, and analytics dashboards."
              },
              {
                title: "Hospitality & Food Services",
                description: "We provide restaurants, hotels, and catering businesses with booking systems, menu digitization, and order management platforms."
              }
            ].map((industry, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-primary mb-3">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Continue with other sections... */}
        {/* Our Approach */}
        <section id="approach" className="mb-20 scroll-mt-24">
          <h2 className="section-title">Our Approach</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                "Consultation and Needs Assessment - Understanding client objectives and challenges.",
                "Prototype and Proof of Concept - Creating a working demo to ensure alignment with business needs.", 
                "Development and Integration - Building and customizing the solution for seamless adoption.",
                "Testing and Quality Assurance - Ensuring high performance, reliability, and usability.",
                "Deployment and Ongoing Support - Providing training, support, and continuous improvements."
              ].map((step, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="mb-20 scroll-mt-24">
          <h2 className="section-title">Contact Us</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">T&R Technologies</h3>
              <p className="text-lg mb-2">Dubai, United Arab Emirates</p>
              <p className="text-lg mb-2">Email: hello@trtechnologies.com</p>
              <p className="text-lg mb-4">Website: www.trtechnologies.com</p>
              <p className="text-lg">Phone: +971-XXX-XXXX</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}