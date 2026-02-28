"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
            <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                alt="Electronics technician repairing LED TV in workshop"
                fill
                className="object-cover object-center absolute inset-0 z-0"
                priority
                unoptimized
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-3xl text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-4 mb-6"
                    >
                        <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Shield size={14} /> 100% Guaranteed Repair
                        </span>
                        <span className="bg-white/10 backdrop-blur text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock size={14} /> Same-day Service Available
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        LED TV Repair & Display Panel Replacement in Ghaziabad
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl mb-8 text-gray-200"
                    >
                        Your trusted partner for <strong>LED TV Repair in Lohia Nagar</strong> and all of NCR. Digital Display Panel Solution brings your screens back to life with premium, guaranteed precision.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="tel:+919810845788" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl shadow-yellow-500/20 transition-all duration-300">
                            <Phone size={20} />
                            Call Us Now
                        </a>
                        <a href="https://wa.me/919810845788?text=Hello%20Digital%20Display%20Panel%20Solution,%20I%20need%20TV%20repair%20service." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-green-500/20 transition-all duration-300">
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </a>
                        <a href="#book" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300">
                            <CalendarCheck size={20} />
                            Book Online
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
