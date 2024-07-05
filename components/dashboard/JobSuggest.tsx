import Link from 'next/link'
import React from 'react'
import { LuShare } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import Image from 'next/image';

const Joblist = [
  {
    name: 'Twitch',
    logo: 'https://www.svgrepo.com/show/448251/twitch.svg',
    logocolor: 'bg-violet-100',
    contracttype: 'Employee',
    position: 'Senior UI Designer',
    hourlyfee: '175-225',
    weeklyhours: 35,
    jobtype: 'Remote',
    time: 'Any time'
  },
  {
    name: 'Google',
    logo: 'https://www.svgrepo.com/show/448227/google.svg',
    logocolor: 'bg-sky-100',
    contracttype: 'Contractor',
    position: 'Design Lead',
    hourlyfee: '150-200',
    weeklyhours: 40,
    jobtype: 'Remote',
    time: 'Any time'
  },

  {
    name: 'Youtube',
    logo: 'https://www.svgrepo.com/show/13671/youtube.svg',
    logocolor: 'bg-red-50',
    contracttype: 'Employee',
    position: 'Front-End Engineer',
    hourlyfee: '200-300',
    weeklyhours: 45,
    jobtype: 'Onsite',
    time: 'Any time'
  },
  {
    name: 'Youtube',
    logo: 'https://www.svgrepo.com/show/13671/youtube.svg',
    logocolor: 'bg-red-50',
    contracttype: 'Employee',
    position: 'Product Designer',
    hourlyfee: '150-200',
    weeklyhours: 40,
    jobtype: 'Remote',
    time: 'Any time'
  },
]

const JobSuggest = () => {
  return (
    <section>
      <div className='flex flex-row justify-between item'>
        <h4 className='text-2xl font-medium'>Jobs for you</h4>
        <Link href={''} className='underline'>View all jobs</Link>
      </div>


      <div className='py-6 flex flex-row gap-x-6'>
        {Joblist.slice(0, 4).map((job, index) => (
          <div className='bg-white w-1/4  rounded-xl p-5' key={index}>
            <div className='flex flex-row justify-between items-start'>
              <div className='flex flex-row gap-x-2 items-end'>
                <div className={`p-5  aspect-square rounded-lg ${job.logocolor}`} > <Image src={job.logo} alt='YT' width={40} height={40} /></div>
                <p className='text-sm font-normal px-2 py-1 max-h-max bg-yellow-100 rounded-lg'>{job.contracttype}</p>
              </div>
              <div className='flex flex-row gap-x-3 items-center'>
                <Link href={''}><LuShare className='h-5 w-5' /></Link>
                <FaRegStar className='h-5 w-5' />
              </div>
            </div>

            <div className='space-y-5 py-4'>
              <div className='flex flex-col'>
                <p className='font-semibold text-lg'>{job.name}</p>
                <p className='text-base'>{job.position}</p>
              </div>
              <p className='text-2xl'>${job.hourlyfee}/hr</p>
            </div>

            <div className='flex flex-row justify-between text-sm text-slate-800'>
              <div className='flex flex-row gap-x-1 items-center'>
                <CiCalendar />
                <p>{job.weeklyhours}hrs/week</p>
              </div>
              <div className='flex flex-row gap-x-1 items-center'>
                <IoLocationOutline />
                <p>{job.jobtype}</p>
              </div>
              <div className='flex flex-row gap-x-1 items-center'>
                <CiClock2 />
                <p>{job.time}</p>
              </div>
            </div>
          </div>
        ))}


      </div>
    </section >
  )
}

export default JobSuggest