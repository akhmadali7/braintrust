import React from 'react'
import Referee from '../ui/referee'
import Event from './event'
import Blog from './blog'
import TopTalent from './toptalent'

const ThirdSection = () => {
  return (
    <section className='py-4'>
      <div className='flex flex-row-reverse gap-x-10'>
        <div className='w-1/4 '><Referee /></div>
        <div className='w-3/4 '>
          <TopTalent />
          <Event />
        </div>
      </div>
    </section>
  )
}

export default ThirdSection