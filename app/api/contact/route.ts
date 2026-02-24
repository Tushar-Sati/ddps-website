import { NextResponse } from "next/server";

// Keep in memory for demo
const submissions: any[] = [];

export async function POST(req: Request) {
    try {
        const data = await req.json();
        submissions.push({ ...data, date: new Date().toISOString(), type: "contact" });

        return NextResponse.json({ success: true, message: "Message received" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error processing request" }, { status: 500 });
    }
}
