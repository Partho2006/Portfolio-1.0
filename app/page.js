"use client";
import React, { useEffect } from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar'; 
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar /> 
      
      <div className="relative z-10">
        <Hero />
        <Products />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
