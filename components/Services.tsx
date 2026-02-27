"use client";

import { motion } from "framer-motion";

const services = [
    { image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80", title: "LED TV Repair", desc: "Expert repair for all major brands and sizes." },
    { image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80", title: "Display Panel Replacement", desc: "Original parts with warranty for cracked or broken screens." },
    { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", title: "Installation", desc: "Professional wall-mounting and setup services." },
    { image: "https://images.unsplash.com/photo-1581092918056-0c4c3cb37166?auto=format&fit=crop&w=800&q=80", title: "Screen Diagnosis", desc: "Advanced diagnostics to identify root causes of display issues." },
    { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", title: "Motherboard Repair", desc: "Component-level motherboard repair and replacement." },
    { image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80", title: "Home Service", desc: "Convenient doorstep repair and consultation in Ghaziabad." },
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
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                            >
                                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
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
