import React from 'react'
import Link from 'next/link'
const AboutPage = () => {
    return (
        <div className='container pt-4'>
            <p className='mt-10'>

                I made this application just for get in touch of Next 13 by using this tutorial <Link className='underline text-blue-400' href={`https://www.youtube.com/watch?v=Y6KDk5iyrYE`}>youtube.com/watch?v=Y6KDk5iyrYE</Link> and added some changes such as some styling and using TypeScript instead of JavaScript.
            </p>
        </div>
    )
}

export default AboutPage