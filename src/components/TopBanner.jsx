import { useState, useEffect } from 'react'

export default function TopBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('bigroos-banner-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('bigroos-banner-dismissed', '1')
  }

  if (!visible) return null

  return (
    <div
      style={{ backgroundColor: '#0C1C2C', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      className="relative w-full"
      role="banner"
      aria-label="Built by Bigroos Tech Australia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-3">

          {/* Left — logo + brand name */}
          <a
            href="https://bigroostech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Visit Bigroos Tech Australia"
          >
            <img
              src="/logo.png"
              alt="Bigroos Tech"
              className="w-7 h-7 rounded-md object-cover"
            />
            <span style={{ color: 'rgba(255,255,255,0.5)' }} className="text-sm font-medium hidden sm:block leading-none">
              Built by
            </span>
            <span
              className="text-sm font-bold tracking-wide leading-none group-hover:underline"
              style={{ color: '#00BFBF' }}
            >
              Bigroos Tech Australia
            </span>
          </a>

          {/* Centre — tagline (desktop only) */}
          <p
            className="hidden md:block text-sm text-center leading-none"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            We build professional websites for Australian trade &amp; service businesses.
          </p>

          {/* Right — CTA */}
          <div className="flex items-center shrink-0">
            <a
              href="https://bigroostech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:scale-[1.04] whitespace-nowrap"
              style={{
                color: '#00BFBF',
                borderColor: 'rgba(0,191,191,0.35)',
                backgroundColor: 'rgba(0,191,191,0.08)',
              }}
            >
              <span className="hidden sm:inline">Want a site like this?</span>
              <span className="sm:hidden">Explore more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Dismiss — pinned to far-right edge, beside scrollbar */}
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-150"
        style={{ color: 'rgba(255,255,255,0.3)' }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      </button>
    </div>
  )
}
