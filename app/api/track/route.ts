import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const phone = searchParams.get('phone');

        if (!id || !phone) {
            return NextResponse.json({ success: false, message: "Booking ID and Phone are required." }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('bookings')
            .select('*, customers!inner(phone)')
            .eq('booking_id', id.toUpperCase())
            .eq('customers.phone', phone)
            .single();

        if (error || !data) {
            return NextResponse.json({ success: false, message: "Booking not found or phone number incorrect." }, { status: 404 });
        }

        return NextResponse.json({ success: true, booking: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error processing request" }, { status: 500 });
    }
}
