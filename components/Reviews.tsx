"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Reviews() {
    const reviews = [
        { name: "Rahul Sharma", rating: 5, date: "2 weeks ago", text: "Incredible service. They replaced the display panel of my Samsung LED TV within a day. Totally genuine parts!" },
        { name: "Priya Gupta", rating: 5, date: "1 month ago", text: "Called for an emergency fix when my Sony TV motherboard fried. The technician was polite and knowledgeable." },
        { name: "Vikram Singh", rating: 5, date: "3 months ago", text: "Reasonable pricing and very transparent. They picked up the TV from my home and delivered it fully working." },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <h2 className="text-4xl font-bold text-primary mb-4">Trusted by Hundreds</h2>
                    <p className="text-gray-600 font-medium">4.9/5 Average Rating on Google</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-accent uppercase">
                                        {rev.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{rev.name}</h4>
                                        <span className="text-xs text-gray-500">{rev.date}</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                "{rev.text}"
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 3.95-3.56C8.43 5.55 7.97 6.75 7.65 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                    Verified Display Hub Search
                                </span>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4 opacity-50 block" alt="Verified Google Review logo for DDPS TV repair" width={16} height={16} loading="lazy" unoptimized />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
