import React from 'react'
import { Button } from '../ui/button'

const DiscordBanner = () => {
  return (
    <section className='py-4'>
      <div className='bg-yellow-200 rounded-lg p-8 flex flex-row gap-x-10 justify-center'>
        <div className='flex flex-col justify-between'>
          <div className='pb-6 space-y-3'>
            <p className='text-2xl '>Join our Discord</p>
            <p>Connect with other talented freelancers from around the world. </p>
          </div>

          <Button variant='black'>Join Discord</Button>

        </div>
        <div className='bg-slate-50 rounded-lg h-40 w-full flex items-center justify-center'>
          image here
        </div>
      </div>
    </section>
  )
}

export default DiscordBanner