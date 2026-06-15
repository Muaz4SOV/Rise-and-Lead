/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Courses from './components/Courses.tsx';
import About from './components/About.tsx';
import Staff from './components/Staff.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';
import EnrollModal from './components/EnrollModal.tsx';
import WhatsAppFloat from './components/WhatsAppFloat.tsx';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';

type EnrollStep = 'choice' | 'whatsapp' | 'email' | 'success';

export default function App() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [enrollInitialStep, setEnrollInitialStep] = useState<EnrollStep>('choice');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openEnroll = (step: EnrollStep = 'choice') => {
    setEnrollInitialStep(step);
    setIsEnrollOpen(true);
  };

  const closeEnroll = () => {
    setIsEnrollOpen(false);
    setEnrollInitialStep('choice');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar onEnrollClick={() => openEnroll('choice')} />
      
      <main>
        <Hero onEnrollClick={() => openEnroll('email')} />
        <Features />
        <About onEnrollClick={() => openEnroll('choice')} />
        <Courses />
        <Staff />
        <Newsletter />
      </main>

      <Footer />

      <EnrollModal
        open={isEnrollOpen}
        onClose={closeEnroll}
        initialStep={enrollInitialStep}
      />
      <WhatsAppFloat />
    </div>
  );
}
