import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Training' text='Pre-Flight & In-Flight Training.'/>
      <TrainingSection />
      <Footer />
    </div>
  )
}

export default Training
