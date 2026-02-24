"use client";

import { motion } from "framer-motion";
import { AlertTriangle, PhoneCall } from "lucide-react";

export default function EmergencyBanner() {
    return (
        <div className="bg-red-600 text-white py-2 px-6 w-full relative z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-medium gap-2">
                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <AlertTriangle size={16} />
                    </motion.div>
                    <span>Emergency TV Repair Service Available 24/7 in Ghaziabad!</span>
                </div>
                <a href="tel:+919810845788" className="flex items-center gap-2 hover:text-red-200 transition">
                    <PhoneCall size={16} /> Call Now for Immediate Assistance
                </a>
            </div>
        </div>
    );
}
