import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, phone, email, service, message } = data;

        // 1. Check if Supabase client is configured
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            console.error("Missing Supabase credentials");
            return NextResponse.json({ success: false, message: "Server configuration error - Database not connected." }, { status: 500 });
        }

        // 2. Insert into customers table (or you can manage auth/dupes as needed)
        // For a simple booking system we generate a new UUID for the customer if one doesn't exist
        const { data: customerData, error: customerError } = await supabase
            .from("customers")
            .insert([{ name, phone, email }])
            .select("id")
            .single();

        if (customerError) {
            console.error("Customer Insert Error:", customerError);
            return NextResponse.json({ success: false, message: "Error saving customer details" }, { status: 500 });
        }

        // 3. Generate a fast and unique 6 character booking ID (e.g. DDPS-X4K9)
        const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
        const bookingId = `DDPS-${randomChars}`;

        // 4. Insert into bookings table
        const { error: bookingError } = await supabase
            .from("bookings")
            .insert([{
                booking_id: bookingId,
                customer_id: customerData.id,
                service_type: service,
                message: message,
            }]);

        if (bookingError) {
            console.error("Booking Insert Error:", bookingError);
            return NextResponse.json({ success: false, message: "Error confirming booking" }, { status: 500 });
        }

        // Return success response to the frontend with the ID
        return NextResponse.json({
            success: true,
            message: "Booking received successfully!",
            bookingId
        }, { status: 200 });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Error processing request" }, { status: 500 });
    }
}
