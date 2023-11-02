import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

// For updation the data
export async function PUT(req, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ message: "Topic Updated" }, {
        status: 200
    })
}
// For Details getting
export async function GET({ params }) {
    try {
        const { id } = params;

        await connectMongoDB();
        const topic = await Topic.findOne({ _id: id })
        console.log("topic found", topic);
        return NextResponse.json({ topic }, {
            status: 200
        })
    } catch (error) {
        console.log("errr", error);
    }

}