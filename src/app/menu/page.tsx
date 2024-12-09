import React from 'react'
import StarterMenu from '@/components/Menu/StartMenu'
import MainCours from '@/components/MainCours/MainCourse'
import Experience from '@/components/Experience/Experience'
import Drink from '@/components/Drinks/Drinks'
import HeroPage from '@/components/HeroSection/Hero'
import Dessert from '@/components/Dessert/Dessert'
import PartnersAndClients from '@/components/pattnerClient/pattnerClient'



const page = () => {
  return (
    <div>
        <HeroPage/>
        <StarterMenu/>
        <MainCours/>
        <Experience/>
        <Dessert/>
        <Drink/>
        <PartnersAndClients/>
    </div>
  )
}

export default page