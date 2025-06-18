"use client"

import AboutSection from '../_components/AboutSection'
import AbouttSection from '../_components/AbouttSection'
import Footer from '../_components/footer'
import Navbar2 from '../_components/Navbar2'
import Ournumber from '../_components/OurNumber'
import OurServics from '../_components/OurServics'
import OurTeam from '../_components/OurTeam'
import WyUS from '../_components/WyUS'
import { motion } from "framer-motion"
import React from 'react'

function About() {
  return (
    <div className="space-y-0 bg-black">

        <Navbar2/>  
        

         <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.3 }}
        className=''
        >

        <AbouttSection />
      </motion.div>
      
           <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.3 }}
        className=''
        >

        <OurTeam />
      </motion.div>

      

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Ournumber />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <OurServics />
      </motion.div>
      <Footer/>
    </div>
  )
}

export default About
