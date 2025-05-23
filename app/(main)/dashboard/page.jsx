import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

const IndustryInsightsPage = async () => {
    const {isOnboarded}= await getUserOnboardingStatus()
        if(!isOnboarded){
            redirect("/onboarding")
        }
    
  return (
    <div>IndustryInsights </div>
  )
}

export default IndustryInsightsPage