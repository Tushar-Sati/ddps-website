"use client";

import { motion } from "framer-motion";

const steps = [
    { step: "01", title: "Book Service", desc: "Call us or book online" },
    { step: "02", title: "Diagnosis", desc: "Expert assessment" },
    { step: "03", title: "Estimate", desc: "Transparent pricing" },
    { step: "04", title: "Repair", desc: "Precision fixing" },
    { step: "05", title: "Testing", desc: "Quality assurance" },
    { step: "06", title: "Delivery", desc: "Direct to you" },
];

export default function ServiceProcess() {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Service Process</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">A simple, transparent workflow ensuring the best repair experience.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                    <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/20 z-0"></div>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-xl font-bold border-4 border-primary mb-4 shadow-lg">
                                {step.step}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
