import { Button } from "@/components/base"
import { Container } from "@/components/inc"

function Membership() {
  const membershipData = {
    pro: {
      title: "Pro",
      description: "Best for Individual coaches looking to handle their personal Clients",
      price_per_month: 157,
      benefits: [
        "Live Session with World class experts",
        "Implementation  Mastery Session",
        "100 ICF CCEUs",
        "100 SHRM Credits",
        "Exclusive Premium Coach Community",
        "24/7 Support Team Available To Answer Your Questions",
        "",
        ""
      ]
    },
    premium: {
      title: "Premium",
      description: "Best for coaches enterpr looking to handle their personal Clients",
      price_per_month: 197,
      benefits: [
        "Everything on Pro",
        "Session Slides & Slide Downloads for Each Session",
        "200 ICF CCEUs",
        "200 SHRM Credits",
        "Product Beta Tests, Case Studies, and Program Pilots",
        "Exclusive Member Pricing",
        "Coach Networking Sessions",
        "Coach Networking Sessions"
      ]
    }
  }

  return (
    <Container className="flex flex-col items-center justify-center gap-6 lg:px-44 py-10">
      <div className="flex flex-col gap-1 items-center w-full">
        <h2 className="text-4xl font-extrabold text-black font-[Montserrat]">Membership</h2>
        <p className="text-xs font-medium">Choose a plan that's right for you.</p>
      </div>
      <div className="flex border rounded-xl w-full">
        <div className="text-center w-full">
          <div className="flex flex-col items-center gap-3 px-14 py-6">
            <h3 className="text-3xl font-bold">{membershipData.pro.title}</h3>
            <p className="text-xs text-gray-500 font-medium">{membershipData.pro.description}</p>
            <p className="text-3xl font-bold flex items-baseline my-4">
              {membershipData.pro.price_per_month}${" "}
              <span className="text-sm text-gray-500 font-medium">/Month</span>
            </p>
            <Button className="w-2/3">Get Started</Button>
          </div>
          {membershipData.pro.benefits.map((benefit, index) => (
            <div key={index} className="h-16 flex justify-center items-center border-t">
              <p className="text-xs font-[500]">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="text-center border-l w-full">
          <div className="relative flex flex-col items-center gap-3 px-14 py-6">
            <span className="absolute left-0 top-0 uppercase bg-[#FF4800] text-xs font-medium py-2 px-3">Recommended</span>
            <h3 className="text-3xl font-bold">{membershipData.premium.title}</h3>
            <p className="text-xs text-gray-500 font-medium">{membershipData.premium.description}</p>
            <p className="text-3xl font-bold flex items-baseline my-4">
              {membershipData.premium.price_per_month}${" "}
              <span className="text-sm text-gray-500 font-medium">/Month</span>
            </p>
            <Button className="w-2/3">Get Started</Button>
          </div>
          {membershipData.premium.benefits.map((benefit, index) => (
            <div key={index} className="h-16 flex justify-center items-center border-t">
              <p className="text-xs font-[500]">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Membership