import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const { id, status } = await req.json();

        if (!id || !status) {
            return NextResponse.json({ success: false, message: "ID and status are required." }, { status: 400 });
        }

        const { error } = await supabase
            .from('bookings')
            .update({ status: status })
            .eq('id', id);

        if (error) {
            return NextResponse.json({ success: false, message: "Error updating status" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Status updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error processing request" }, { status: 500 });
    }
}
