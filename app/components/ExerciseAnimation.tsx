"use client"

import Image from "next/image"

interface ExerciseAnimationProps {
  exercise: string
}

export function ExerciseAnimation({ exercise }: ExerciseAnimationProps) {
  const getExerciseImage = (exerciseName: string) => {
    switch (exerciseName.toLowerCase()) {
      case "warm-up stretching":
      case "cool-down stretching":
        return "https://th.bing.com/th?id=OIP.CNjUsNZ_iIKl86c6EM9tYAHaHk&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
      case "squats":
        return "https://images.squarespace-cdn.com/content/v1/5160bb45e4b0e13a258812c8/1465148144836-3O9SQDFDB2KYY7V5ZC43/image-asset.gif"
      case "deadlifts":
        return "https://th.bing.com/th/id/R.06281aa10a0681c94b940cbae9362def?rik=q3Jdl%2bq5tSGpig&riu=http%3a%2f%2fnewlife.com.cy%2fwp-content%2fuploads%2f2018%2f12%2f22141301-Barbell-Deadlift-female_Hips_720.gif&ehk=XEY66%2fFtbc5jphgXKiXp4aknXFO%2fifNcHREmQoqa9OY%3d&risl=&pid=ImgRaw&r=0"
      case "romanian deadlifts (rdl)":
        return "https://media.tenor.com/4zkpIEvjmjUAAAAM/dumbbell-rdl.gif"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-lavender/50 rounded-lg overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={getExerciseImage(exercise) || "/placeholder.svg"}
          alt={`${exercise} demonstration`}
          fill
          className="object-contain"
          unoptimized // Since we're using GIFs
        />
      </div>
    </div>
  )
}

