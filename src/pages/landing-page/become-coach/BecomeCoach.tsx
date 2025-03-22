import { GlobalImpact } from "../home/sections"
import { CoachingPrograms, Hero, HowTo, MakeDifference, Membership, Testimonials } from "./sections"

function BecomeCoach() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <HowTo />
      <CoachingPrograms />
      <MakeDifference />
      <Testimonials />
      <GlobalImpact />
      <Membership />
    </div>
  )
}

export default BecomeCoach