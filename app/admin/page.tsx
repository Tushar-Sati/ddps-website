import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminPage() {
    const { data: bookings, error } = await supabase
        .from('bookings')
        .select('*, customers(name, phone, email)')
        .order('created_at', { ascending: false });

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-8">Admin Dashboard - Bookings</h1>

                {error ? (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                        Failed to load bookings. Please ensure you have added your Supabase URL and Keys to `.env.local` and run the setup SQL script.
                    </div>
                ) : (
                    <div className="bg-white shadow overflow-hidden rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {bookings?.map((booking) => (
                                    <tr key={booking.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.booking_id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {booking.customers?.name}<br />
                                            <a href={`tel:${booking.customers?.phone}`} className="text-accent hover:underline">{booking.customers?.phone}</a><br />
                                            {booking.customers?.email && <a href={`mailto:${booking.customers?.email}`} className="text-sm text-gray-400">{booking.customers?.email}</a>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                                                {booking.service_type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={booking.message}>
                                            {booking.message || "-"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(booking.created_at).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}

                                {(!bookings || bookings.length === 0) && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                            No bookings found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
