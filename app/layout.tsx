import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from "@/app/components/theme-provider"
import { LanguageProvider } from './contexts/LanguageContext'
import { PostHogProvider } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' })
const geistMono = localFont({ src: './fonts/GeistMonoVF.woff', variable: '--font-mono' })

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
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${bricolage.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
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

