"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, CheckCircle } from "lucide-react"
import { ExerciseAnimation } from "../components/ExerciseAnimation"

export default function Dashboard() {
  const [workoutStarted, setWorkoutStarted] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)

  const cyclePhases = [
    {
      name: "Menstrual",
      info: "During this phase, energy levels may be lower. Focus on gentle exercises like yoga, light walking, or stretching. Listen to your body and rest if needed.",
    },
    {
      name: "Follicular",
      info: "As estrogen rises, you may feel more energetic. This is a great time for trying new workouts or pushing yourself with high-intensity exercises and strength training.",
    },
    {
      name: "Ovulatory",
      info: "Energy and strength often peak during this phase. Take advantage by focusing on high-intensity workouts, strength training, or challenging cardio sessions.",
    },
    {
      name: "Luteal",
      info: "As progesterone rises, you might experience decreased energy. Focus on moderate-intensity workouts, yoga, and activities that help manage premenstrual symptoms.",
    },
  ]
  const [currentPhase, setCurrentPhase] = useState(cyclePhases[0])

  const exercises = [
    { name: "Warm-up Stretching", duration: 300, description: "Gentle full-body stretches to prepare for workout" },
    { name: "Squats", duration: 180, description: "3 sets of 12 reps with proper form" },
    { name: "Deadlifts", duration: 240, description: "3 sets of 8 reps with controlled movement" },
    { name: "Romanian Deadlifts (RDL)", duration: 180, description: "3 sets of 10 reps focusing on hamstrings" },
    { name: "Cool-down Stretching", duration: 300, description: "Gentle stretches to prevent muscle soreness" },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0 && isActive) {
      setIsActive(false)
      if (currentExercise < exercises.length - 1) {
        // Auto-setup next exercise
        setCurrentExercise((curr) => curr + 1)
        setTime(exercises[currentExercise + 1].duration)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time, currentExercise])

  const startWorkout = () => {
    setWorkoutStarted(true)
    setTime(exercises[0].duration)
  }

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(exercises[currentExercise].duration)
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const completeExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setTime(exercises[currentExercise + 1].duration)
      setIsActive(false)
    } else {
      setWorkoutStarted(false)
      setCurrentExercise(0)
      setIsActive(false)
    }
  }

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Your Cycle-Synced Dashboard</h1>
        <div className="bg-white p-8 rounded-lg shadow-md border border-soft-pink mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Cycle Phase: {currentPhase.name}</h2>
          <p className="text-gray-600 mb-4">
            Your workouts are optimized for your current phase. Listen to your body and adjust as needed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cyclePhases.map((phase, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${currentPhase.name === phase.name ? "bg-soft-pink" : "bg-lavender"} cursor-pointer transition-colors duration-200`}
                onClick={() => setCurrentPhase(phase)}
              >
                <h3 className="font-semibold text-gray-800 mb-2">{phase.name}</h3>
                <p className="text-sm text-gray-600">{phase.info}</p>
              </div>
            ))}
          </div>
          <div className="bg-mint p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Fitness Tips for {currentPhase.name} Phase:</h3>
            <p className="text-gray-600">{currentPhase.info}</p>
          </div>
        </div>
        {!workoutStarted ? (
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">Ready to start your cycle-synced workout?</p>
            <p className="text-lg text-gray-600 mb-8">See what a leg day could look like!</p>
            <Button onClick={startWorkout} className="bg-soft-pink text-gray-800 hover:bg-soft-pink/90">
              Start Workout
            </Button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md border border-soft-pink">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Current Exercise: {exercises[currentExercise].name}
              </h2>
              <p className="text-gray-600 mb-4">{exercises[currentExercise].description}</p>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-4xl font-bold text-soft-pink">{formatTime(time)}</div>
                <div className="flex space-x-4">
                  <Button
                    onClick={toggleTimer}
                    className={`${isActive ? "bg-peach" : "bg-mint"} text-gray-800 hover:opacity-90`}
                  >
                    {isActive ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                    {isActive ? "Pause" : "Start"}
                  </Button>
                  <Button onClick={resetTimer} className="bg-lavender text-gray-800 hover:bg-lavender/90">
                    <RotateCcw className="mr-2" />
                    Reset
                  </Button>
                  <Button onClick={completeExercise} className="bg-soft-pink text-gray-800 hover:bg-soft-pink/90">
                    <CheckCircle className="mr-2" />
                    Complete
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-64 mb-8">
              <ExerciseAnimation exercise={exercises[currentExercise].name} />
            </div>
          </div>
        )}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Exercises</h2>
          <ul className="space-y-4">
            {exercises.slice(currentExercise + 1).map((exercise, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md border border-soft-pink">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exercise.name}</h3>
                    <p className="text-gray-600 text-sm">{exercise.description}</p>
                  </div>
                  <span className="text-soft-pink font-medium">{formatTime(exercise.duration)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

