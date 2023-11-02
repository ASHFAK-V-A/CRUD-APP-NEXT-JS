import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

// For Listing
export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics })

}

// For Creating 
export async function POST(req) {
    const { title, description } = await req.json();
    await connectMongoDB();
    await Topic.create({ title, description })
    return NextResponse.json({ message: "Topic Created" }, { status: 201 })
}

// Delete
export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 })
}