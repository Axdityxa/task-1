import React from 'react'
import Repo from '@/app/components/Repo'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react'

const RepoPage = ({params:{ name }}) => {
  return (
    <div className='card'>
        <Link href='/code/repos' className='btn btn-back'>back to repositories</Link>
        <Suspense fallback={<div>Loading repos...</div>}>
            <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<div>Loading Dire...</div>}>
            <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default RepoPage