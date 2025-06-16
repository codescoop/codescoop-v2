import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Practice Coding, Build Projects,
            <br className="hidden lg:block" />
            Land the Job.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            CodeScoop.dev provides curated interview questions, hands-on projects, and a powerful online compiler — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#features" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition">
              Explore Features
            </a>
            <a href="#resources" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Browse Projects
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={"/logos/hero.jpg"}
            alt="Developer Working Illustration"
            width={550}
            height={550}
            className='w-full max-w-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero