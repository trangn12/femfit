import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactInfo } from "./components/ContactInfo"
import { Dumbbell } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <FeaturesPreview />
      <CycleBasedApproach />
      <CTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-soft-pink to-lavender text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Sync Your Fitness with Your Cycle</h1>
        <p className="mt-4 text-xl">
          Achieve your fitness goals with AI-powered workout plans tailored to your menstrual cycle.
        </p>
        <Button asChild className="mt-8 bg-peach text-gray-800 hover:bg-peach/90 group">
          <Link href="/dashboard" className="flex items-center">
            <Dumbbell className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            See What a Leg Day Could Look Like
          </Link>
        </Button>
      </div>
    </section>
  )
}

function FeaturesPreview() {
  const features = [
    "Cycle-Synced Workouts",
    "AI-Powered Personalization",
    "Hormone-Aware Nutrition Tips",
    "Progress Tracking",
    "Exercise Animations",
    "Cycle Tracking Integration",
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Why Choose FemFit?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-mint text-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-800">{feature}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-soft-pink text-gray-800 hover:bg-soft-pink/90">
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CycleBasedApproach() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Workouts That Work With Your Body</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Our AI-powered workout recommendations are based on cutting-edge research in women's health and exercise
          science. We tailor your workouts to each phase of your menstrual cycle, optimizing your fitness routine to
          work with your body, not against it.
        </p>
        <div className="mt-12 text-center">
          <Button asChild className="bg-lavender text-gray-800 hover:bg-lavender/90">
            <Link href="/how-it-works">Learn How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-soft-pink text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold">Ready to Sync Your Fitness?</h2>
            <p className="mt-4 text-xl">Join FemFit today and experience workouts tailored to your unique cycle.</p>
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

