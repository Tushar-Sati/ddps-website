"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const features = [
    { icon: Shield, title: "Original Parts", desc: "We use only genuine OEM parts for durable repairs." },
    { icon: Clock, title: "Fast Turnaround", desc: "Most repairs are completed within 24 to 48 hours." },
    { icon: Award, title: "Certified Experts", desc: "Our technicians are highly skilled and continuously trained." },
    { icon: ThumbsUp, title: "Warranty Guarantee", desc: "All our services come with a standard post-repair warranty." },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Unmatched expertise and commitment to quality.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"
                            >
                                <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-accent">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{feat.title}</h3>
                                <p className="text-gray-600">{feat.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
