import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const blogData = [
  {
    title: 'Binance.us Announces BTRST Token Listing.',
    content: [],
    isFeatured: false,
    image: ''
  },
  {
    title: 'The Freedom of Freelance, Now With Security Information.',
    content: [],
    isFeatured: true,
    image: ''
  },
  {
    title: 'Introducing the Braintrust Professional Network.',
    content: [],
    isFeatured: false,
    image: ''
  },
  {
    title: 'New Direct Placement Option to Hire on Braintrust Added!',
    content: [],
    isFeatured: false,
    image: ''
  },
  {
    title: 'Behance + Braintrust Partner to Help Designer Find Top Projects.',
    content: [],
    isFeatured: false,
    image: ''
  },
]

const Blog = () => {
  return (
    <section className='py-4'>
      <div className='bg-white rounded-lg p-8'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-xl '>Braintrust news & articles</h3>
          <Link href={''} className='underline'>View all</Link>
        </div>
        <div className='py-7 flex flex-row gap-x-10 items-center'>
          <div className='w-1/2'>
            <p className='text-sm'>Featured</p>
            <p className='text-xl font-semibold pr-10 pt-2 pb-10'>Binance.us Announces BTRST Token Listing.</p>
            <Button variant='black' className='rounded-full'>Read</Button>
          </div>
          <div className=' w-1/2 bg-slate-100 flex items-center justify-center h-56 rounded-lg'>
            <p className='text-xs'>image here</p>
          </div>
        </div>
        <Separator />
        <div className='grid grid-cols-2 grid-rows-2 gap-4 pt-7'>
          <div className='bg-slate-200 h-32'></div>
          <div className='bg-slate-200 h-32'></div>
          <div className='bg-slate-200 h-32'></div>
          <div className='bg-slate-200 h-32'></div>
        </div>
      </div>
    </section>
  )
}

export default Blog