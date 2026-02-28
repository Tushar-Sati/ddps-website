"use client";

import { motion } from "framer-motion";

export default function SEOContent() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-primary mb-6">Professional TV Repair Services in Ghaziabad</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Looking for reliable and fast LED TV display repair? Digital Display Panel Solution is the leading service center for comprehensive television diagnostics and repairs in the Ghaziabad region. Our certified technicians specialize in complex display issues, offering seamless panel replacement using 100% genuine parts for a crystal clear, factory-quality picture.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Beyond screen repair, we are experts in intricate motherboard repair, resolving power failures, sound issues, and software glitches efficiently. We understand the inconvenience of a broken TV, which is why we offer dedicated TV service at home, saving you the hassle of transporting your fragile screens.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Operating predominantly across Lohia Nagar, Indirapuram, Vaishali, Vasundhara, and Raj Nagar, our response times are unmatched. Whether it is a blank screen, colored lines, or no audio, contact the professionals for doorstep repairs that you can count on.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
