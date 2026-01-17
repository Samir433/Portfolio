"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
             >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of projects demonstrating scalable AI solutions and real-world impact.
                </p>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {DATA.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex"
                    >
                        <Card className="flex flex-col h-full w-full hover:shadow-xl transition-all border-primary/10 bg-card">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                                        <CardDescription className="text-base mt-2">
                                            {project.description}
                                        </CardDescription>
                                    </div>
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <project.icon className="h-6 w-6" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                                    <p className="text-sm font-medium text-primary">
                                        Impact: <span className="text-foreground font-normal">{project.impact}</span>
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Link href={project.github} target="_blank" className="w-full">
                                    <Button className="w-full gap-2 group">
                                        <Github className="h-4 w-4" />
                                        View Code
                                        <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
             </div>
        </div>
    </section>
  );
}
