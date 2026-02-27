"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BookServicePage() {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const auth = localStorage.getItem("ddps_authenticated");
        if (!auth) {
            router.push("/login");
        } else {
            setUserEmail(auth);
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const botField = formData.get("bot_field");

        // Honeypot check
        if (botField) {
            setIsLoading(false);
            return;
        }

        // Prepare basic payload
        const payload = Object.fromEntries(formData);
        payload.userEmail = userEmail || "Guest";
        payload.source = "Logged-in";

        try {
            const res = await fetch("/api/book-service", {
                method: "POST",
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                const complaintId = data.bookingId;

                // Save local tracking mapping
                const rawComplaints = localStorage.getItem("ddps_complaints");
                const complaints = rawComplaints ? JSON.parse(rawComplaints) : [];
                complaints.push({
                    id: complaintId,
                    userEmail: payload.userEmail,
                    date: new Date().toISOString(),
                    status: "Pending",
                    service: payload.service,
                    address: payload.address,
                    message: payload.message,
                });
                localStorage.setItem("ddps_complaints", JSON.stringify(complaints));

                // Pass to success page
                sessionStorage.setItem("latest_complaint_id", complaintId);
                router.push("/booking-success");
            } else {
                setError("Submission failed. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("ddps_authenticated");
        router.push("/login");
    };

    if (!userEmail) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="text-xl font-bold text-primary">
                        DDPS
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors"
                    >
                        Log out
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="bg-primary px-8 py-6 text-white">
                        <h1 className="text-2xl font-bold">Book a Service</h1>
                        <p className="mt-2 text-primary-100 opacity-90">
                            Fill out the form below to register your complaint.
                        </p>
                    </div>

                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input id="name" required name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input id="phone" required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input id="email" required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
                                <textarea id="address" required name="address" rows={2} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"></textarea>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                                <select id="service" required name="service" aria-required="true" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                                    <option value="">Select a service problem...</option>
                                    <option value="led-repair">LED TV Repair</option>
                                    <option value="panel-replacement">Display Panel Replacement</option>
                                    <option value="motherboard">Motherboard Repair</option>
                                    <option value="no-power">No Power / Dead TV</option>
                                    <option value="sound-issue">Sound Issue, No Picture</option>
                                    <option value="other">Other Issue</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Device Details & Issue Description</label>
                                <textarea id="message" required name="message" rows={4} placeholder="E.g., Samsung 55 inch TV, model number, detailed issue description..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"></textarea>
                            </div>

                            {/* Spam Protection Honeypot */}
                            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                <label htmlFor="bot_field">Do not fill this out if you are human</label>
                                <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-sm font-medium flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-md hover:shadow-lg"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    "Confirm Booking"
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="bg-primary px-8 py-4 text-white">
                        <h2 className="text-lg font-bold">Our Location</h2>
                        <p className="text-sm text-primary-100 opacity-90">Digital Display Panel Solution, SAINI COMPOUND, B-59A, near WATER TANK, Block G, Lohia Nagar, Ghaziabad, Uttar Pradesh 201001.</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps?q=Digital+Display+Panel+solution,+SAINI+COMPOUND,+B-59A,+near+WATER+TANK,+Block+G,+Lohia+Nagar,+Ghaziabad,+Uttar+Pradesh+201001&output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Digital Display Panel Solution Location"
                        className="w-full block"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
}
