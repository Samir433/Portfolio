"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { DATA } from '@/app/lib/data';
import { ThemeToggle } from '@/app/components/ui/theme-toggle';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
            {DATA.name.split(" ")[0]}<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

       {/* Mobile Menu */}
       <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-background border-b"
            >
                <div className="flex flex-col p-6 gap-4">
                     {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                        {link.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        )}
       </AnimatePresence>
    </nav>
  );
}
