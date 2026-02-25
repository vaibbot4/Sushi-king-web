'use client'

import NavBar from '@/components/NavBar'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar active="ABOUT" />

      {/* Hero Section with Wave Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen bg-white">
        {/* Wave Background */}
        <div className="absolute inset-0 wave-bg"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Story */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
                ABOUT US
              </h1>
              <h2 className="text-xl md:text-2xl text-navy-light font-semibold mb-8">
                A Journey of Faith, Family, and Dreams
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  In 2001, I came to the United States from Burma as an immigrant. Starting here was difficult: language barriers, no family or relatives nearby, no professional background, no connections, and no work experience. Despite these challenges, I was determined to build a new life.
                </p>
                
                <p>
                  I began working as a contractor for Hissho Sushi Company, where I spent nearly ten years learning the business. Throughout that time, I dreamed of opening my own restaurant and prayed for an opportunity.
                </p>
                
                <p>
                  In August 2003, I married my wife, Marilyn Tial Hlei Iang. Together, we prayed for our own sushi business. After many years, God opened a door we couldn&apos;t open ourselves—with the help of people from Indiana University in Bloomington, Indiana.
                </p>
                
                <p>
                  During this period, God also blessed us with three children: Chris Bawithawng Lian, Joshua Bawihlei Sang, and Caleb Bawivel Lian.
                </p>
                
                <p>
                  In the last week of August 2015, by God&apos;s grace, love, and mercy, we opened &quot;Sushi King&quot; in the heart of Indiana University. This was the dream and prayer God fulfilled in our lives.
                </p>
                
                <p>
                  In 2024, God opened another opportunity: a Poke Bowl and Boba Tea store under Sushi King at the Kelley School of Business, with the help of our friends Mr. Rahul [last name] and Mr. Drew Smith. In 2025, we extended to another location at Read Hall at the University of Bloomington.
                </p>
                
                <p>
                  God has been good to us, providing for our needs and surrounding us with His goodness, love, kindness, and His people. As the Bible says: <em>&quot;But seek ye first the kingdom of God and His righteousness; and all these things shall be added unto you&quot;</em> (Matthew 6:33).
                </p>
              </div>
              
              <button className="mt-8 bg-navy-light hover:bg-navy text-white font-semibold py-3 px-8 rounded-lg text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
                Our Story
              </button>
            </div>

            {/* Right Side - Founder Images */}
            <div className="space-y-8">
              <div className="rounded-lg shadow-lg overflow-hidden h-80 bg-gray-100">
                <img
                  src="/images/Founder%201.jpeg"
                  alt="Founder 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden h-80 bg-gray-100">
                <img
                  src="/images/Founder%202.png"
                  alt="Founder 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Location - Very Left */}
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">125 Eagleson Ave</span>
            </div>

            {/* Right Location - Very Right */}
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">1309 E 10th St</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}




