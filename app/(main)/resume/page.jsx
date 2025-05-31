import { getResume } from '@/actions/resume'
import React from 'react'
import ResumeBulider from './_components/resume-builder'

const ResumePage =async () => {
    const resume=await getResume()
  return (
    <div className='container mx-auto py-6'>
        
       <ResumeBulider initialContent={resume?.content}/>
    </div>
  )
}

export default ResumePage