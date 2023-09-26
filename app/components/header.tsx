import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='bg-cyan-600 header '>
            <div className="container">
                <div className="logo">
                    <Link href={'/'}>
                        Next 13 - Typescript
                    </Link>

                </div>
                <div className="links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/about/team">Our Team</Link>
                    <Link href="/code/repos">Code</Link>
                </div>
            </div>
        </header>
    )
}

export default Header