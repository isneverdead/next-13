"use client"
import { useState } from 'react'

import React from 'react'

const CourseSearch = ({ getSearchResult }: { getSearchResult: (courses: any) => any }) => {
    const [query, setQuery] = useState("")
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()
        getSearchResult(courses)
    }
    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input type="text" className='search-input text-black' placeholder='Search courses...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className='search-button' type='submit'>Search</button>
        </form>
    )
}

export default CourseSearch