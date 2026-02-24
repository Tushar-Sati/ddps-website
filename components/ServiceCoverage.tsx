"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ServiceCoverage() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold mb-6">Service Coverage Map</h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We provide rapid response LED TV repair across all major areas in Ghaziabad and NCR. Our mobile tracking system ensures our vans reach you exactly when booked.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {['Indirapuram', 'Vaishali', 'Vasundhara', 'Kavi Nagar', 'Raj Nagar'].map((area, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                                        <MapPin size={16} />
                                    </span>
                                    {area}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none absolute z-10"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112001.35061633096!2d77.34759685!3d28.690899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1729fa83f53%3A0xcfabc1cd9cc273db!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
