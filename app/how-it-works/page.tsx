import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      title: "Sign Up and Connect",
      description: "Create your account and connect your cycle tracking app or input your cycle information.",
    },
    {
      title: "AI Analysis",
      description:
        "Our algorithms analyze your cycle data, fitness goals, and preferences to create a personalized plan.",
    },
    {
      title: "Receive Your Cycle-Synced Plan",
      description: "Get your customized workout routine, optimized for each phase of your menstrual cycle.",
    },
    {
      title: "Start Working Out",
      description:
        "Follow your plan, using the in-app timers and animations to guide you through each cycle-appropriate exercise.",
    },
    {
      title: "Track Progress and Mood",
      description: "Log your workouts, energy levels, and mood to help our AI refine your plan.",
    },
    {
      title: "Continuous Optimization",
      description:
        "As you progress and your cycle changes, our AI adjusts your plan to ensure you're always working with your body.",
    },
  ]

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">How CycleSync Fitness Works</h1>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 bg-soft-pink text-gray-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-soft-pink">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Cycle-Based Approach</h2>
          <p className="text-gray-600 mb-4">
            CycleSync Fitness's workout recommendations are powered by cutting-edge machine learning algorithms and
            grounded in the latest research on women's health and exercise science. Our team of data scientists, fitness
            experts, and women's health specialists continuously update our models to ensure you receive the most
            effective, scientifically-backed workout plans tailored to your unique cycle.
          </p>
          <p className="text-gray-600 mb-4">
            We analyze various factors including hormone fluctuations, energy levels, and recovery patterns throughout
            your menstrual cycle to create personalized routines that maximize your results while supporting your
            overall well-being.
          </p>
          <Button asChild className="bg-lavender text-gray-800 hover:bg-lavender/90">
            <Link href="/dashboard">Experience Cycle-Synced Fitness</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

