"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import EmergencyBanner from "./EmergencyBanner";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <EmergencyBanner />
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="font-bold text-2xl text-primary tracking-tight">
                    DDPS<span className="text-accent">.</span>
                </a>

                <div className="hidden md:flex gap-8 items-center font-medium">
                    <a href="/#about" className="hover:text-accent transition-colors">About</a>
                    <a href="/#services" className="hover:text-accent transition-colors">Services</a>
                    <a href="/#faq" className="hover:text-accent transition-colors">FAQ</a>
                    <a href="/track" className="hover:text-accent font-bold transition-colors">Track Repair</a>
                    <a href="tel:+919810845788" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                        <Phone size={16} /> Call Us
                    </a>
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 text-center font-medium shadow-lg"
                >
                    <a href="/#about" onClick={() => setIsOpen(false)} className="block py-2">About</a>
                    <a href="/#services" onClick={() => setIsOpen(false)} className="block py-2">Services</a>
                    <a href="/#faq" onClick={() => setIsOpen(false)} className="block py-2">FAQ</a>
                    <a href="/track" onClick={() => setIsOpen(false)} className="block py-2 font-bold text-accent">Track Repair</a>
                </motion.div>
            )}
        </nav>
    );
}
