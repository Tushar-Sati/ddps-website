"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ServiceCoverage() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Service Coverage</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We provide rapid response LED TV repair across all major areas in Ghaziabad and NCR. Our mobile tracking system ensures our technicians reach you exactly when booked.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
