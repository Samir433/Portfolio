"use client";
import React from 'react';
import { DATA } from '@/app/lib/data';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
            <Link href={DATA.social.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link href={DATA.social.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
