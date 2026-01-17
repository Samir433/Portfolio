"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

  return (
    <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight mb-12 text-center"
            >
                Skills & Expertise
            </motion.h2>

            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {DATA.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div key={index} variants={item}>
                             <Card className="h-full hover:shadow-lg transition-shadow border-primary/10">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                     <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Icon className="h-6 w-6" />
                                     </div>
                                     <CardTitle className="text-xl">{skill.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((tech) => (
                                            <span 
                                                key={tech} 
                                                className="px-2.5 py-0.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                             </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </section>
  );
}
