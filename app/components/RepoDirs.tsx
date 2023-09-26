import React from 'react'
import Link from 'next/link'
async function fetchRepoContents(name: string) {
    const response = await fetch(`https://api.github.com/repos/isneverdead/${name}/contents`, {
        next: {
            revalidate: 60
        }
    })
    const contents = await response.json()
    return contents
}
const RepoDirs = async ({ name }: { name: string }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter((content: any) => content.type === 'dir')
    return (
        <>
            <h3>Directories</h3>
            <ul>
                {
                    dirs.map(((dir: any) => (
                        <li key={dir.path}>
                            <Link href={`/code/repos/${name}/${dir.path}`}>
                                {dir.name}
                            </Link>
                        </li>
                    )))
                }
            </ul>
        </>
    )
}

export default RepoDirs