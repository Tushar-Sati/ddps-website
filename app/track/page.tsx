"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

type Complaint = {
    id: string;
    userEmail: string;
    date: string;
    status: string;
    service: string;
    address: string;
    message: string;
};

export default function TrackPage() {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userComplaints, setUserComplaints] = useState<Complaint[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("ddps_authenticated");
        if (!auth || auth === "true") {
            router.push("/login");
            return;
        }
        setUserEmail(auth);

        const rawComplaints = localStorage.getItem("ddps_complaints");
        if (rawComplaints) {
            const allComplaints: Complaint[] = JSON.parse(rawComplaints);
            const myComplaints = allComplaints.filter(c => c.userEmail === auth);
            setUserComplaints(myComplaints.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        }

        setIsLoaded(true);
    }, [router]);

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-primary">Track My Repairs</h1>
                    <Link href="/book-service" className="text-accent font-medium hover:text-blue-500 transition-colors">
                        + New Booking
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="mb-8 border-b border-gray-100 pb-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">My Requests</h2>
                            <p className="text-gray-500 text-sm mt-1">Logged in as {userEmail}</p>
                        </div>
                        <div className="bg-blue-50 text-accent px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">
                            {userComplaints.length} Total
                        </div>
                    </div>

                    {userComplaints.length === 0 ? (
                        <div className="text-center py-16">
                            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900">No repair requests found</h3>
                            <p className="text-gray-500 mt-2">You haven't made any service bookings yet.</p>
                            <Link href="/book-service" className="mt-6 inline-block bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                                Book a Service
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {userComplaints.map((complaint, idx) => (
                                <motion.div
                                    key={complaint.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-gray-50"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Complaint ID</span>
                                            <span className="font-mono text-lg font-bold text-primary">{complaint.id}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-gray-500">
                                                {new Date(complaint.date).toLocaleDateString()}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${complaint.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                    complaint.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' :
                                                        'bg-blue-50 text-blue-700 border-blue-200'
                                                }`}>
                                                {complaint.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-gray-200">
                                        <div>
                                            <span className="text-gray-500 block">Service Type</span>
                                            <span className="font-medium text-gray-900 capitalize">{complaint.service?.replace("-", " ")}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Issue Description</span>
                                            <span className="font-medium text-gray-900 line-clamp-1">{complaint.message}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
