import React from 'react'
import { Progress } from './ui/progress'
import Link from 'next/link'
import { Button } from './ui/button'
import userData from '@/public/userdata'

import { IoMdInformationCircleOutline } from "react-icons/io";
import ProfileDialog from './dashboard/profiledialog'

const Header = () => {
  return (
    <section className=' py-10'>
      <div className='bg-white flex flex-row '>
        <div className='flex flex-col font-semibold w-3/12 items-center justify-center px-10 gap-y-2'>
          <div className='flex flex-col items-center'>
            <h3 className='text-8xl'>{userData.percentcompletion}%</h3>

            <p className='leading-2 text-xl pl-8 font-normal'>of your profile is complete <span className='inline-flex items-center' ><IoMdInformationCircleOutline /></span></p>
          </div>
        </div >
        <div className='w-9/12  flex flex-col py-10 pr-10 text-slate-800'>
          <div className=''>
            <Progress value={userData.percentcompletion} className='h-5' />
          </div>
          <h4 className='font-semibold text-xl pt-9'>Complete your profile to apply for jobs!</h4>
          <p className=' leading-6 py-3'>To learn more about building a great profile, checkout our &nbsp;
            <Link href={'www.google.com'} className='underline' target="_blank" rel="noopener noreferrer">Braintrust Academy Course</Link>
            &nbsp;that provides you with comprehensive insights into creating a standout profile that attracts potential employers and clients. Engaging in our community discussions in the &nbsp;
            <Link href={'https://www.discord.com'} className='underline' target="_blank" rel="noopener noreferrer">#top-notch-profile channel</Link>.
            When you achieve a 100% completion rate in the course, you become eligible to apply for jobs and get verified as Approved Talent!
          </p>
          <div className='pt-5 flex flex-row justify-between'>
            <ProfileDialog />
            <Link href={''} className='flex flex-row items-center gap-x-1 font-semibold'>Why is this important? <IoMdInformationCircleOutline className='h-6 w-6' /></Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Header