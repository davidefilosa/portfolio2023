import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, description, imageUrl, url, github } = body;

    const project = await prismadb.project.create({
      data: { title, description, imageUrl, url, github },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("[PROJECT_POST]", error);
  }
}

export async function GET(req: Request) {
  try {
    const projects = await prismadb.project.findMany({});

    return NextResponse.json(projects);
  } catch (error) {
    console.log("[PROJECTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
