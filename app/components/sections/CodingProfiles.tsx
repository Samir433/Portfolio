"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Terminal, Code, Award, BarChart, Database, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function CodingProfiles() {
    const profiles = [
        { name: "GitHub", url: DATA.social.github, icon: Terminal, color: "text-zinc-500" },
        { name: "LinkedIn", url: DATA.social.linkedin, icon: LinkIcon, color: "text-blue-600" },
        { name: "LeetCode", url: DATA.social.leetcode, icon: Code, color: "text-yellow-500" },
        { name: "Kaggle", url: DATA.social.kaggle, icon: Database, color: "text-blue-400" },
        { name: "CodeChef", url: DATA.social.codechef, icon: Code, color: "text-brown-500" },
    ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-12"
         >
            Coding Profiles & Achievements
         </motion.h2>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {profiles.map((profile, i) => (
                <motion.div
                    key={profile.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Link href={profile.url} target="_blank">
                        <Card className="hover:border-primary/50 transition-colors h-full flex flex-col items-center justify-center p-6 gap-3 cursor-pointer hover:bg-secondary/50">
                            <profile.icon className={`h-8 w-8 ${profile.color}`} />
                            <span className="font-semibold">{profile.name}</span>
                        </Card>
                    </Link>
                </motion.div>
            ))}
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.achievements.map((achievement, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border shadow-sm text-left"
                >
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                        <Award className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium leading-snug">{achievement}</span>
                </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
