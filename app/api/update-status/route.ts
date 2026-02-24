import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "ID and status are required." },
        { status: 400 }
      );
    }

    // Supabase removed – feature disabled for now
    return NextResponse.json(
      { success: true, message: "Feature temporarily disabled." },
      { status: 200 }
    );

  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error processing request" },
      { status: 500 }
    );
  }
}