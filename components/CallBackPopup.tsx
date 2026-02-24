"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { X, PhoneCall } from "lucide-react";

export default function CallBackPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasDismissed, setHasDismissed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasDismissed) {
                setIsVisible(true);
            }
        }, 15000); // Popup after 15 seconds

        return () => clearTimeout(timer);
    }, [hasDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setHasDismissed(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            handleDismiss();
        }, 5000); // Auto close after 5 seconds
    };

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed bottom-6 left-6 z-50 bg-white shadow-2xl rounded-2xl p-6 border border-gray-100 max-w-sm"
        >
            <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition"
            >
                <X size={18} />
            </button>

            <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center shrink-0">
                    <PhoneCall size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-lg text-primary mb-1 text-left">Need Fast Help?</h4>
                    {!isSubmitted ? (
                        <>
                            <p className="text-sm text-gray-600 mb-4 text-left leading-relaxed">
                                Leave your number and our technician will call you back within 5 minutes.
                            </p>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <input type="tel" required placeholder="Phone number" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none" />
                                <button type="submit" className="bg-accent hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm shadow-md whitespace-nowrap">
                                    Call Me
                                </button>
                            </form>
                        </>
                    ) : (
                        <p className="text-sm text-green-600 font-medium text-left leading-relaxed mt-2">
                            Thank you! Our technician will call you shortly at 9810845788.
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
