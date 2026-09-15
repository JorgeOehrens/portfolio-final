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
const title = 'Jorge Oehrens · Software Engineer, Producto e Infraestructura'
const description =
  'Jorge Oehrens — Ingeniero de software: frontend, backend e infraestructura. En Welcome Back soy dueño del catálogo, el menú digital y el POS de una plataforma que usan más de 300 restaurantes en 13 países. Cofundador de Educari y creador de AgroJob.'

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
        alt: 'Jorge Oehrens · Software Engineer, Producto e Infraestructura',
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

