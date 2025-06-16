import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Built by Developers, for the Community
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          <strong>CodeScoop.dev</strong> is a platform to support students and professionals with open access to curated resources and interview prep. It's all about learning by doing — through projects, practice, and exploration.
          <br /><br />
          We help you bridge the gap between theory and practice with hands-on coding. Dive into real-world challenges and grow with a community that's building, learning, and leveling up together.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          No fluff. Just a space where you can practice, and grow — with the support of a community that’s leveling up together.
        </p>
      </div>
    </section>
  )
}

export default AboutSection