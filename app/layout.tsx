import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: 'Blue Vision Systems | AI-Powered Visual Intelligence Solutions',
  description: 'Revolutionary pure-vision solutions using deep learning neural networks for high-precision, real-time Aiming Point (AP) and 6DOF pose detection. Empowering VR/AR, autonomous driving, robotics, drones, and defense applications.',
  keywords: ['Visual AI', 'Computer Vision', 'AP Detection', '6DOF', 'Deep Learning', 'VR/AR', 'Autonomous Driving', 'Robotics', 'Drones', 'Defense', 'Blue Vision Systems'],
  authors: [{ name: 'Blue Vision Systems LLC' }],
  creator: 'Blue Vision Systems LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bluevisionsys.com',
    siteName: 'Blue Vision Systems',
    title: 'Blue Vision Systems | AI-Powered Visual Intelligence',
    description: 'Revolutionary pure-vision solutions for high-precision AP and 6DOF pose detection.',
    images: [
      {
        url: '/images/logo.png',
        width: 200,
        height: 200,
        alt: 'Blue Vision Systems Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Vision Systems | Visual AI Solutions',
    description: 'Revolutionary pure-vision AP/6DOF detection solutions',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="en" className="bg-background scroll-smooth">
    <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
      {children}

      {process.env.NODE_ENV === "production" && <Analytics />}

      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
    </body>
  </html>
  )
}
