import courses from './data.json'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function GET(request: any) {
    return NextResponse.json(courses)
}

export async function POST(request: any) {
    const {
        title, description, level, link
    } = await request.json()

    const newCourse: any = {
        id: uuidv4(),
        title,
        description,
        level,
        link
    }
    courses.push(newCourse)
    console.log({ title, description, level, link })
    return NextResponse.json(courses)
}