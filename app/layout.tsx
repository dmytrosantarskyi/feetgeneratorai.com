import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://feetgeneratorai.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Feet Generator AI - No Sign Up Required',
  description: 'Create hyper-realistic AI feet images instantly. Fast, private, secure. Advanced AI generator powered by cutting-edge technology.',
  keywords: ['ai feet generator', 'feet ai generator', 'ai feet pics', 'ai sexy feet', 'feet pic generator', 'ai feet'],
  authors: [{ name: 'Feet Generator AI' }],
  creator: 'Feet Generator AI',
  publisher: 'Feet Generator AI',
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.svg',
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
        color: '#a855f7',
      },
    ],
  },
  openGraph: {
    title: 'Feet Generator AI - No Sign Up Required',
    description: 'Create hyper-realistic AI feet images instantly. Fast, private, secure. Advanced AI generator powered by cutting-edge technology.',
    url: siteUrl,
    siteName: 'Feet Generator AI',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/logo.svg`,
        width: 200,
        height: 200,
        alt: 'Feet Generator AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feet Generator AI - No Sign Up Required',
    description: 'Create hyper-realistic AI feet images instantly. Fast, private, secure. Advanced AI generator powered by cutting-edge technology.',
    images: [`${siteUrl}/logo.svg`],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C4JQJYX05S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4JQJYX05S');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
