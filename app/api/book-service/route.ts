import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzA3z0GxsLGyPLV1AURQJqZNAq-PdrTaTUvrUqylj2yb_gsTJqfEARJzOCGj70hRMc9/exec",
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();
    console.log("Google response:", text);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}