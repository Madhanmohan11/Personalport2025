import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Play } from 'lucide-react';
import { Button } from './ui/button';
import heroVideoDesktop from '../assets/Hero_video-vocal.mp4';
import heroVideoMobile from '../assets/Hero_video-vocal-m.mp4';

const Hero = () => {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    setShowPlayButton(false);

    // Always attempt unmuted audio playback on load/refresh
    const startAudioPlayback = () => {
      [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
        if (video) {
          video.currentTime = 0;
          video.muted = false; // Video ALWAYS plays with audio
          video.play().catch(() => {
            // If browser autoplay policy requires user gesture for audio, trigger unmuted audio on 1st interaction
            const handleFirstInteraction = () => {
              if (video) {
                video.muted = false;
                video.play().catch(() => {});
              }
              window.removeEventListener('click', handleFirstInteraction);
              window.removeEventListener('touchstart', handleFirstInteraction);
            };
            window.addEventListener('click', handleFirstInteraction);
            window.addEventListener('touchstart', handleFirstInteraction);
          });
        }
      });
    };

    startAudioPlayback();
  }, []);

  const handleVideoEnded = () => {
    // Show replay button once initial video playback finishes
    setShowPlayButton(true);
  };

  const handleReplay = () => {
    // Replay video with audio on user click
    [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (video) {
        video.currentTime = 0;
        video.muted = false; // Guaranteed unmuted audio playback
        video.play().catch(() => {});
      }
    });
    setShowPlayButton(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0303]"
    >
      {/* 1. Desktop Video (16:9 format for lg screens) - Always attempts audio */}
      <video
        ref={desktopVideoRef}
        className="hidden lg:block absolute inset-0 h-full w-full object-cover object-[86%_center] z-0 brightness-105 contrast-105"
        autoPlay
        playsInline
        onEnded={handleVideoEnded}
      >
        <source src={heroVideoDesktop} type="video/mp4" />
      </video>

      {/* 2. Mobile & Tablet Video (9:16 vertical format for mobile screens) - Always attempts audio */}
      <video
        ref={mobileVideoRef}
        className="block lg:hidden absolute inset-0 h-full w-full object-cover object-center z-0 brightness-105 contrast-105"
        autoPlay
        playsInline
        onEnded={handleVideoEnded}
      >
        <source src={heroVideoMobile} type="video/mp4" />
      </video>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE LAYOUT (< lg) - Sleek, compact bottom card             */}
      {/* ------------------------------------------------------------- */}
      <div className="lg:hidden relative z-20 flex flex-col justify-end min-h-screen w-full px-3 pb-4 pt-20">
        
        {/* Floating Dark Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0c0404]/85 backdrop-blur-md border border-red-500/20 rounded-2xl p-3.5 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.8)] text-left w-full max-w-sm mx-auto relative"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/30 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            WELCOME TO MY PORTFOLIO
          </div>

          {/* Heading with Red Name */}
          <h1 className="text-xl font-extrabold text-white leading-tight tracking-tight mb-0.5">
            Hi, I'm <span className="text-[#FF1E1E]">Madhan</span>.
          </h1>

          {/* Role Subtitle */}
          <h2 className="text-[10px] sm:text-xs font-black text-[#FF2E2E] mb-1.5 tracking-wider uppercase">
            FULL STACK DEVELOPER
          </h2>

          {/* Description */}
          <p className="text-[11px] sm:text-xs text-neutral-300 mb-3 leading-snug font-normal">
            I build modern, responsive and scalable web applications that turn ideas into real-world digital experiences.
          </p>

          {/* Action Row: CTA Buttons & Social Links */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-[#FF1E1E] hover:bg-[#B80000] text-white font-semibold text-[11px] px-3 py-1.5 h-auto rounded-lg flex items-center gap-1 shadow-md shadow-red-600/30 border border-red-500/40"
            >
              <Briefcase size={12} />
              View Work
            </Button>

            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="bg-black/40 text-white border border-red-500/30 hover:bg-black/60 text-[11px] px-3 py-1.5 h-auto rounded-lg flex items-center gap-1 backdrop-blur-md"
            >
              <Mail size={12} className="text-red-400" />
              Contact
            </Button>

            {/* Social Links */}
            <div className="flex items-center gap-1.5 ml-auto">
              {[
                { icon: Github, href: 'https://github.com/Madhanmohan11', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/madhan-m-25094b204/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:madhan.mmano@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-1.5 rounded-full bg-black/40 border border-red-500/30 text-neutral-200 hover:text-white transition-all duration-300"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP LAYOUT (≥ lg) - 50/50 Desktop Composition             */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden lg:flex relative z-20 mx-auto min-h-screen max-w-7xl items-center px-8 pt-20 pb-16 w-full">
        
        {/* Left Column */}
        <div className="w-[48%] max-w-lg text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/20 text-red-400 border border-red-500/40 mb-5 backdrop-blur-md shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            WELCOME TO MY PORTFOLIO
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-2 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-[#FF1E1E]">Madhan</span>.
          </motion.h1>

          {/* Subtitle / Role - Always Single Row (whitespace-nowrap) */}
          <motion.h2
            className="text-2xl xl:text-3xl font-black text-[#FF2E2E] mb-5 tracking-wider uppercase whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base text-neutral-200 max-w-md mb-8 leading-relaxed font-normal drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build modern, responsive and scalable web applications that turn ideas into real-world digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="text-base font-semibold px-6 py-5 rounded-lg bg-gradient-to-r from-[#FF1E1E] to-[#B80000] hover:from-[#B80000] hover:to-[#FF1E1E] text-white transition-all duration-300 transform hover:-translate-y-0.5 border border-red-500/40 shadow-lg"
            >
              <Briefcase className="mr-2" size={18} />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="text-base font-semibold px-6 py-5 rounded-lg bg-black/40 text-white border border-red-500/40 hover:border-red-500/70 hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-md shadow-lg"
            >
              <Mail className="mr-2 text-red-400" size={18} />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Github, href: 'https://github.com/Madhanmohan11', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/madhan-m-25094b204/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:madhan.mmano@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full bg-black/40 border border-red-500/30 text-neutral-200 hover:text-white hover:border-red-500/70 hover:bg-black/60 transition-all duration-300 backdrop-blur-md shadow-md"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Right Column (Reserved Empty 52% for Completely Unobstructed Video View) */}
        <div className="w-[52%]" />

      </div>

      {/* Desktop Scroll Down Arrow Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          aria-label="Scroll to About section"
          className="p-2.5 rounded-full bg-black/40 border border-red-500/30 text-neutral-300 hover:text-white hover:border-red-500/60 hover:bg-black/60 backdrop-blur-md transition-all duration-300 shadow-md"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>

      {/* Replay Button - ONLY visible after video play completes (z-30) */}
      <AnimatePresence>
        {showPlayButton && (
          <motion.div
            className="absolute top-20 right-4 lg:top-auto lg:bottom-8 lg:right-8 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={handleReplay}
              aria-label="Replay video"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#B80000] to-[#FF1E1E] text-white flex items-center justify-center backdrop-blur-md shadow-[0_0_25px_rgba(255,30,30,0.8)] border border-white/40 hover:scale-110 active:scale-95 transition-all duration-300"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={18} className="fill-white ml-0.5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
