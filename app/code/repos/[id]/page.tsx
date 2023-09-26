import React from 'react'
import { Suspense } from 'react'
import Link from "next/link"
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
const RepoPage = ({ params }: { params: any }) => {
    return (
        <div className='card'>
            <Link href={`/code/repos`} className='btn btn-back'>
                Back to Repositories
            </Link>
            <Suspense fallback={<div>Loading repo...</div>}>

                <Repo name={params.id} />
            </Suspense>
            <Suspense fallback={<div>Loading Repo Directories...</div>}>
                <RepoDirs name={params.id} />
            </Suspense>
        </div>
    )
}

export default RepoPage