"use client"
import Image from 'next/image'
import Link from 'next/link'
import Courses from './components/Courses'
import { useState, useEffect } from 'react'
import Loading from './loading'
import CourseSearch from './components/CourseSearch'
export default function Home() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    const fetchCourses = async () => {
      const respose = await fetch(`/api/courses`)
      const data = await respose.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()

  }, [])

  if (loading) {
    return (<Loading />)
  }

  return (
    <div className='pt-5'>
      <h1 className='text-2xl font-semibold mx-auto text-center mb-5'>Welcome to my Next.js 13 app</h1>
      <CourseSearch getSearchResult={(results) => setCourses(results)} />
      <Courses courses={courses} />
      {/* <ul><li>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/team">Team</Link>
      </li></ul> */}
    </div>
  )
}
