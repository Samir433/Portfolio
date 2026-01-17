"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
             >
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">About Me</h2>
                <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground text-center leading-relaxed">
                    <p>{DATA.summary}</p>
                </div>
             </motion.div>
        </div>
    </section>
  );
}
