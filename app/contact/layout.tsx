import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://feetgeneratorai.com'

export const metadata: Metadata = {
  title: 'Contact Us - Feet Generator AI',
  description: 'Get in touch with Feet Generator AI. Have questions about our AI feet generator? Contact us for support, inquiries, or partnerships.',
  keywords: ['contact feet generator ai', 'ai feet generator support', 'feet ai generator help'],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us - Feet Generator AI',
    description: 'Get in touch with Feet Generator AI. Have questions about our AI feet generator? Contact us for support, inquiries, or partnerships.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
