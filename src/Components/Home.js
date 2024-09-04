import React from 'react'
import Splice from './Splice'
import WhyUs from './WhyUs'
import Projects from './Projects'
import ContactUs from './ContactUs'
import Footer from './Footer'
import ScheduleCall from './ScheduleCall'

function Home() {
  return (
    <div>
      <Splice />
      <WhyUs />
      <ScheduleCall />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home