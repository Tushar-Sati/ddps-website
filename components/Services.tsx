"use client";

import { motion } from "framer-motion";
import { Monitor, Tv, Wrench, Settings, Cpu, Home } from "lucide-react";

const services = [
    { icon: Tv, title: "LED TV Repair", desc: "Expert repair for all major brands and sizes." },
    { icon: Monitor, title: "Display Panel Replacement", desc: "Original parts with warranty for cracked or broken screens." },
    { icon: Wrench, title: "Installation", desc: "Professional wall-mounting and setup services." },
    { icon: Settings, title: "Screen Diagnosis", desc: "Advanced diagnostics to identify root causes of display issues." },
    { icon: Cpu, title: "Motherboard Repair", desc: "Component-level motherboard repair and replacement." },
    { icon: Home, title: "Home Service", desc: "Convenient doorstep repair and consultation in Ghaziabad." },
];

export default function Services() {
    return (
        <section className="py-24 bg-gray-50" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive solutions for all your display and TV repair needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                            >
                                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                                <a href="#book" className="text-accent font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                                    Enquire Now &rarr;
                                </a>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
