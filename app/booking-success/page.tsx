"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BookingSuccessPage() {
    const [complaintId, setComplaintId] = useState("");
    const router = useRouter();

    useEffect(() => {
        const id = sessionStorage.getItem("latest_complaint_id");
        if (id) {
            setComplaintId(id);
        } else {
            router.push("/book-service");
        }
    }, [router]);

    if (!complaintId) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center"
            >
                <div className="bg-green-500 py-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                    >
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </motion.div>
                </div>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                    <p className="text-gray-600 mb-8">
                        Your complaint has been registered successfully. Our team will contact you shortly.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                            Complaint ID
                        </p>
                        <div className="text-3xl font-mono text-primary font-bold tracking-tight">
                            {complaintId}
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
                            Please save this ID for tracking your service request.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link href="/" className="block w-full bg-primary hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                            Return to Home
                        </Link>
                        <Link href="/book-service" className="block w-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 font-medium py-3 px-4 rounded-lg transition-colors">
                            Book Another Service
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
