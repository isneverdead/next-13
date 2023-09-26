import { NextResponse } from "next/server";
import courses from "@/app/api/courses/data.json";

export async function GET(request: any) {
    const { searchParams } = new URL(request.url)
    console.log(request.url)
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((course: any) => {
        return course.title.toLowerCase().includes(query?.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
}