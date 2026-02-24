"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="py-24 bg-white" id="about">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                            <Image
                                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern electronics repair service center interior"
                                fill
                                className="object-cover"
                                loading="lazy"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent flex items-end p-8 z-10">
                                <div className="text-white">
                                    <p className="text-5xl font-bold mb-2">15+</p>
                                    <p className="text-xl font-medium">Years of Trust</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-primary mb-6">Ghaziabad's Most Trusted Service Centre</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At Digital Display Panel Solution, we take pride in returning life to your entertainment systems. Specializing in LED TVs and intricate panel replacements, our state-of-the-art workshop handles all major brands utilizing OEM components.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our team consists of certified technicians equipped with advanced diagnostic tools. From simple screen replacements to complex motherboard repairs, we deliver fast, reliable, and transparent service directly to you.
                        </p>

                        <ul className="space-y-4">
                            {["100% Original Parts", "Transparent Pricing", "Warranty on Repairs", "Same Day Service Available"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-primary">
                                    <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
