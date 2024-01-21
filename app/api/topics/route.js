import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function POST(request){

    const {title, description} = await request.json();
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message:"Topic created"}, {status : 201});

}

export async function GET(){

    //const {id} = await request.json();
    await connectMongoDB();
    const topics = await Topic.find();
    //the topics written above is used below in json, so use it correctly
    return NextResponse.json({topics});
    //whatever I write here like "topics" this name is used to decontruct things when we get the topicList, so be aware of the naming
}


//here we are passing id as query parameter
//we need to write key,value in postman explicitly and according to that our URL is created
export async function DELETE(request){

    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message : "Topic '$id' deleted"},{status : 200});

}

// export async function DELETE(request, {params}){

//   const {id} = request.json();
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({message : "Topic '$id' deleted"},{status : 200});

// }