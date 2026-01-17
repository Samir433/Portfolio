"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
             >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
                <p className="text-muted-foreground">
                    My professional journey in Data Science and AI Engineering.
                </p>
             </motion.div>

             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {DATA.experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                         {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                             <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        
                        {/* Card */}
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border-primary/10 hover:shadow-lg transition-shadow">
                            <CardHeader className="p-0 pb-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                                    <CardTitle className="text-lg font-bold text-primary">{item.company}</CardTitle>
                                    <span className="text-xs font-medium text-muted-foreground px-2 py-1 rounded-full bg-secondary">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-sm font-semibold text-foreground">{item.role}</p>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
             </div>
        </div>
    </section>
  );
}
