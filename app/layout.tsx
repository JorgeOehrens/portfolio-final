import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/app/components/theme-provider"
import { LanguageProvider } from './contexts/LanguageContext'
import { PostHogProvider } from './providers'

// Tipografía del sistema (San Francisco en Apple) — look Apple, minimal, sin carga de web fonts.

const siteUrl = 'https://jorge5.dev'
const title = 'Jorge Oehrens · Software Engineer & Product Engineer'
const description =
  'Jorge Oehrens — Software Engineer y Product Engineer. Construyo productos digitales end-to-end (AI, web y data). Software Engineer en WelcomeBack, cofundador de Educari y AgroJob.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Jorge Oehrens',
    'Software Engineer',
    'Product Engineer',
    'AI',
    'Web',
    'Data',
    'WelcomeBack',
    'Educari',
    'AgroJob',
    'Chile',
  ],
  authors: [{ name: 'Jorge Oehrens', url: siteUrl }],
  creator: 'Jorge Oehrens',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName: 'Jorge Oehrens',
    title,
    description,
    images: [
      {
        url: '/images/og-jorge.png',
        width: 200,
        height: 200,
        alt: 'Jorge Oehrens · Software Engineer & Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-jorge.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}

