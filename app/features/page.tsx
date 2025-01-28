import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContactInfo } from "../components/ContactInfo"

export default function Features() {
  const features = [
    {
      title: "Cycle-Synced Workouts",
      description:
        "Our AI tailors your workouts to each phase of your menstrual cycle, optimizing intensity and exercise types.",
    },
    {
      title: "AI-Powered Personalization",
      description:
        "Advanced algorithms create workout plans based on your cycle, fitness level, goals, and preferences.",
    },
    {
      title: "Hormone-Aware Nutrition Tips",
      description:
        "Receive nutrition advice tailored to support your workouts and overall well-being throughout your cycle.",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvements with detailed progress reports that take your cycle into account.",
    },
    {
      title: "Exercise Animations",
      description:
        "Follow along with clear, animated demonstrations of each exercise to ensure proper form and technique.",
    },
    {
      title: "Cycle Tracking Integration",
      description:
        "Seamlessly integrate with popular cycle tracking apps to keep your workouts in sync with your body.",
    },
    {
      title: "Mood and Energy Logging",
      description:
        "Log your mood and energy levels to help our AI better understand and adapt to your unique patterns.",
    },
    {
      title: "Community Support",
      description: "Connect with other women on similar fitness journeys for motivation, tips, and support.",
    },
  ]

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">FemFit Features</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-soft-pink">
              <h2 className="text-xl font-semibold text-soft-pink mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}

