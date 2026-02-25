'use client'

import { useState } from 'react'
import FeedbackModal from './FeedbackModal'

const NAV_ITEMS = ['LOCATIONS', 'ABOUT', 'POKE BOWLS', 'SUSHI', 'BOBA', 'CONTACT'] as const

type Props = { active?: string }

export default function NavBar({ active }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/images/SK_logo.png"
                  alt="Sushi King Logo"
                  className="h-20 w-auto hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-navy font-semibold text-sm uppercase tracking-wide hover:text-navy-light transition-colors ${
                    active === item ? 'text-navy-light' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setFeedbackOpen(true)}
                className="text-navy font-semibold text-sm uppercase tracking-wide hover:text-navy-light transition-colors"
              >
                Feedback
              </button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setFeedbackOpen(true)}
                className="text-navy font-semibold text-sm uppercase tracking-wide hover:text-navy-light"
              >
                Feedback
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy hover:text-navy-light focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-3 py-2 text-navy font-semibold text-sm uppercase tracking-wide hover:text-navy-light"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { setFeedbackOpen(true); setIsMenuOpen(false) }}
                  className="block w-full text-left px-3 py-2 text-navy font-semibold text-sm uppercase tracking-wide hover:text-navy-light"
                >
                  Feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  )
}
