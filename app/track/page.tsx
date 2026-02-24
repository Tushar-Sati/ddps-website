"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Search, CheckCircle, Clock, Wrench, Truck, Package } from "lucide-react";

const statusSteps = [
    { id: 'pending', label: 'Received', icon: Package },
    { id: 'diagnosing', label: 'Diagnosing', icon: Search },
    { id: 'repairing', label: 'Repairing', icon: Wrench },
    { id: 'tested', label: 'Testing', icon: CheckCircle },
    { id: 'ready', label: 'Ready', icon: CheckCircle },
    { id: 'delivered', label: 'Delivered', icon: Truck },
];

export default function TrackRepair() {
    const [bookingId, setBookingId] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [booking, setBooking] = useState<any>(null);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setBooking(null);

        try {
            const res = await fetch(`/api/track?id=${bookingId}&phone=${phone}`);
            const data = await res.json();

            if (res.ok && data.success) {
                setBooking(data.booking);
            } else {
                setError(data.message || "Could not find booking with those details.");
            }
        } catch {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const currentStepIndex = booking ? statusSteps.findIndex(s => s.id === booking.status) : -1;

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                        <h1 className="text-3xl font-bold text-primary mb-2 text-center">Track Your Repair</h1>
                        <p className="text-gray-600 text-center mb-8">Enter your Booking Reference ID and Phone Number to check the live status of your TV.</p>

                        <form onSubmit={handleTrack} className="space-y-6 max-w-md mx-auto">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Booking ID</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. DDPS-X4K9"
                                    value={bookingId}
                                    onChange={(e) => setBookingId(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none uppercase"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="Associated phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {loading ? "Tracking..." : "Track Status"}
                            </button>
                        </form>

                        {error && (
                            <div className="mt-8 bg-red-50 text-red-600 p-4 rounded-lg text-center font-medium">
                                {error}
                            </div>
                        )}

                        {booking && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-12 pt-8 border-t border-gray-100"
                            >
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-primary mb-2">Booking: {booking.booking_id}</h3>
                                    <p className="text-gray-600">Service: <span className="font-medium text-gray-900">{booking.service_type}</span></p>
                                    <p className="text-gray-600">Date Received: <span className="font-medium text-gray-900">{new Date(booking.created_at).toLocaleDateString()}</span></p>
                                </div>

                                <div className="relative">
                                    <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200"></div>
                                    <div className="space-y-8 relative">
                                        {statusSteps.map((step, idx) => {
                                            const Icon = step.icon;
                                            const isCompleted = idx <= currentStepIndex;
                                            const isCurrent = idx === currentStepIndex;

                                            return (
                                                <div key={idx} className={`flex items-start gap-6 ${isCompleted ? 'opacity-100' : 'opacity-40'}`}>
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 z-10 transition-colors ${isCompleted ? 'bg-accent border-blue-100 text-white' : 'bg-gray-100 border-white text-gray-400'}`}>
                                                        {isCurrent && <span className="absolute w-12 h-12 rounded-full animate-ping bg-accent opacity-20 z-0"></span>}
                                                        <Icon size={20} className="relative z-10" />
                                                    </div>
                                                    <div className="pt-2">
                                                        <h4 className={`font-bold text-lg ${isCompleted ? 'text-primary' : 'text-gray-500'}`}>{step.label}</h4>
                                                        {isCurrent && <p className="text-accent text-sm font-medium mt-1">Current Status</p>}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
