"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

import { Send, Mail, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

// Quick inline Input/Textarea if not creating separate files, 
// but creating separate files is better practice. 
// I will create them in this same block or separate. 
// For speed and simplicity in agentic flow, I will create simple styled inputs here or separate tool calls.
// I'll create separate tool calls for Input/Textarea first.

// Wait, I haven't created Input/Textarea components yet.
// I will use standard HTML elements styled with tailwind in this component to save steps,
// or I can create them. Creating them is cleaner offering "production-grade standards".

// I will create Input and Textarea components first.
export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
       <div className="max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
          >
             <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
             <p className="text-muted-foreground">
                Interested in collaborating or hiring? Reach out directly.
             </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
             <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href={`mailto:${DATA.email}`} className="hover:text-primary transition-colors">
                            {DATA.email}
                        </a>
                    </div>
                    
                    <Button variant="outline" className="w-full gap-2" onClick={copyEmail}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied" : "Copy Email"}
                    </Button>

                    <div className="pt-4">
                        <p className="text-sm text-muted-foreground mb-4">
                            Usually respond within 24 hours. Open for:
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                            <li>Full-time opportunities</li>
                            <li>Consulting & Freelance</li>
                            <li>Hackathon collaborations</li>
                        </ul>
                    </div>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form 
                        action={`mailto:${DATA.email}`}
                        method="post"
                        encType="text/plain"
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input 
                                id="name" 
                                name="name" 
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <Button type="submit" className="w-full gap-2">
                            Send Email <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </CardContent>
             </Card>
          </div>
       </div>
    </section>
  );
}
