import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FemFit - AI-Powered Workouts for Women",
  description:
    "Achieve your fitness goals with customized workout plans tailored to your menstrual cycle, powered by artificial intelligence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-lavender`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

