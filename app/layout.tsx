import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const siteDescription =
  'Rishabh Kaul is a London-based early-stage investor at Hoxton Ventures, investing in AI infrastructure, developer tools and enterprise software.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Rishabh Kaul | Early-Stage Investor',
    template: '%s | Rishabh Kaul',
  },
  description: siteDescription,
  applicationName: 'Rishabh Kaul',
  authors: [{ name: 'Rishabh Kaul', url: baseUrl }],
  creator: 'Rishabh Kaul',
  publisher: 'Rishabh Kaul',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rishabh Kaul | Early-Stage Investor',
    description: siteDescription,
    url: baseUrl,
    siteName: 'Rishabh Kaul',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishabh Kaul | Early-Stage Investor',
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
