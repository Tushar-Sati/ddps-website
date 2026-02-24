"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [status, setStatus] = useState<string | null>(null);
    const [bookingId, setBookingId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);
        setBookingId(null);

        const formData = new FormData(e.currentTarget);
        const botField = formData.get("bot_field");

        // Honeypot check: If a bot fills this hidden field, silently reject
        if (botField) {
            setIsLoading(false);
            setStatus("success");
            setBookingId("DDPS-BOTX");
            (e.target as HTMLFormElement).reset();
            return;
        }

        try {
            const res = await fetch("/api/book-service", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setBookingId(data.bookingId);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-24 bg-white" id="book">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-primary mb-6">Book a Service</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Fill out the form below to request a service callback. Our experts will get back to you immediately.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input id="name" required name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" aria-required="true" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input id="phone" required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" aria-required="true" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                                <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                                <select id="service" required name="service" aria-required="true" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                                    <option value="">Select a service</option>
                                    <option value="led-repair">LED TV Repair</option>
                                    <option value="panel-replacement">Display Panel Replacement</option>
                                    <option value="motherboard">Motherboard Repair</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"></textarea>
                            </div>

                            {/* Spam Protection Honeypot */}
                            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                <label htmlFor="bot_field">Do not fill this out if you are human</label>
                                <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
                            </div>

                            {status === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-5 rounded-lg font-medium shadow-sm">
                                    <div className="text-lg font-bold mb-1">Successfully submitted!</div>
                                    <p className="text-sm opactiy-90">We will contact you shortly.</p>
                                    {bookingId && (
                                        <div className="mt-3 pt-3 border-t border-green-200">
                                            <span className="text-xs uppercase tracking-wide text-green-600 block">Your Booking Reference ID:</span>
                                            <span className="font-mono text-xl font-bold tracking-wider">{bookingId}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                            {status === "error" && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-lg font-medium">An error occurred. Please try again or check your connection.</div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    "Submit Request"
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="h-full min-h-[400px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
                        <iframe
                            src="https://www.google.com/maps?q=SAINI+COMPOUND+B-59A+near+Water+Tank+Block+G+Lohia+Nagar+Ghaziabad+Uttar+Pradesh+201001&output=embed"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
