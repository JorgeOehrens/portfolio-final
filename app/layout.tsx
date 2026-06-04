import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/app/components/theme-provider"
import { LanguageProvider } from './contexts/LanguageContext'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta'
})

export const metadata: Metadata = {
  title: 'Jorge Oehrens · Software Engineer & Product Engineer',
  description: 'Jorge Oehrens — Software Engineer y Product Engineer. Construyo productos digitales end-to-end (AI, web y data). Software Engineer en WelcomeBack, cofundador de Educari y AgroJob.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

