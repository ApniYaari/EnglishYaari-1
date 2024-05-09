import { PlanAndPricingComponent } from '@/component/Plan/PlanAndPrcing'
import React from 'react'

export const metadata = {
  title: "Pricing For Spoken English",
  description: "Flexible plan for professionals",
};
function page() {
  return (
    <>
      <PlanAndPricingComponent />
    </>
  )
}

export default page