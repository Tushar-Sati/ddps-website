"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const statuses = [
    { id: 'pending', label: 'Received' },
    { id: 'diagnosing', label: 'Diagnosing' },
    { id: 'repairing', label: 'Repairing' },
    { id: 'tested', label: 'Testing' },
    { id: 'ready', label: 'Ready' },
    { id: 'delivered', label: 'Delivered' },
];

export default function TechnicianDashboard() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        const { data } = await supabase
            .from('bookings')
            .select('*, customers(name, phone)')
            .order('created_at', { ascending: false });

        if (data) setBookings(data);
        setLoading(false);
    };

    const handleUpdateStatus = async (id: string, newStatus: string) => {
        const res = await fetch('/api/update-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: newStatus })
        });

        if (res.ok) {
            setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
        } else {
            alert("Failed to update status");
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-primary">Technician Dashboard</h1>
                    <button onClick={fetchBookings} className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">Refresh</button>
                </div>

                <div className="bg-white shadow-sm overflow-hidden rounded-xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ref ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status Control</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-bold text-accent">{booking.booking_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="font-semibold">{booking.customers?.name}</div>
                                        <div className="text-gray-500">{booking.customers?.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 uppercase tracking-wider">
                                            {booking.service_type.replace('-', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <select
                                            value={booking.status || 'pending'}
                                            onChange={(e) => handleUpdateStatus(booking.id, e.target.value)}
                                            className={`text-sm px-3 py-1.5 rounded-lg border font-semibold outline-none focus:ring-2 focus:ring-accent transition-all ${booking.status === 'delivered' ? 'bg-green-50 text-green-700 border-green-200' :
                                                    booking.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                        'bg-blue-50 text-blue-700 border-blue-200'
                                                }`}
                                        >
                                            {statuses.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {new Date(booking.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}

                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No active repair bookings.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
