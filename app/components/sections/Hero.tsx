"use client";
import React from 'react';
import Image from 'next/image';
import { DATA } from '@/app/lib/data';
import { Button } from '@/app/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium w-fit">
            Open for opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">{DATA.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-semibold">
            {DATA.role}
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            {DATA.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="#projects">
                <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
            <Link href={DATA.social.github} target="_blank">
                <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                </Button>
            </Link>
             <Link href={DATA.social.linkedin} target="_blank">
                <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                </Button>
            </Link>
             <Link href="/Resume.pdf" target="_blank">
                <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                </Button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300 ring-2 ring-primary/10">
             <Image 
                src="/profile.jpg" 
                alt={DATA.name} 
                fill 
                className="object-cover"
                priority
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
