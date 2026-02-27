import { NextResponse } from "next/server";

// Simple in-memory counter for server-side ID generation
let counter = (global as any).bookingCounter || 1;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Generate Unique Complaint ID server-side
    const year = new Date().getFullYear();
    const complaintId = `DDPS-${year}-${counter.toString().padStart(4, '0')}`;
    counter++;
    (global as any).bookingCounter = counter;

    // Construct final payload for Google Sheet
    const finalBody = {
      ...body,
      complaintId,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzA3z0GxsLGyPLV1AURQJqZNAq-PdrTaTUvrUqylj2yb_gsTJqfEARJzOCGj70hRMc9/exec",
      {
        method: "POST",
        body: JSON.stringify(finalBody),
      }
    );

    const text = await response.text();
    console.log("Google response:", text);

    return NextResponse.json({ success: true, bookingId: finalBody.complaintId });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}
