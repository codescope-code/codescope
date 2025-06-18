"use client"
import { Toaster } from 'react-hot-toast';
import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import AboutSection from "./_components/AboutSection";
import AbouttSection from "./_components/AbouttSection";
import Services from "./_components/Services";
import OurTeam from "./_components/OurTeam";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/footer";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import ContactPage from "./_components/ContactForm";
import WorkSection from './_components/Works';
import WyUS from './_components/WyUS';
import { motion } from "framer-motion";
  // <-- Make sure this is here

export default function Home() {


  return (
    <>
      <Navbar/>  
             
              <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className=''
                      > 
             <HeroSection/>
             </motion.div> 
             
             <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className=''
                      > 
             <AboutSection/>
             </motion.div>  
             <WorkSection/>
             <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className=''
                      > 
            <WyUS/>
            </motion.div>
              <Services/>
              
              <ContactPage />
              <Footer/>
      <Toaster position="top-right" reverseOrder={false} />
    </> 
  );
}
