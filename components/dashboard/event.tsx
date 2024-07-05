import React from 'react'
import { Button } from '../ui/button'

const eventData = [
  {
    day: 26,
    month: 'Jul',
    year: 2024,
    title: 'How to earn more on Braintrust',
    content: [
      'Join us to learn how you can increase your revenue on Braintrust by up to 30% on your engagements and earn substantial referral fees',
      'XXXXX',
    ]
  },
  {
    day: 27,
    month: 'Jul',
    year: 2024,
    title: 'Crypto 101',
    content: [
      'Designed to help professionals navigate the crypto ecosystem, blockchain, and VASPs',
      'XXXXX',
    ]
  },
]

const Event = () => {
  return (
    <section className='bg-white  rounded-lg p-8'>
      <h3 className='text-xl '>RSVP for Braintrust events</h3>
      <div className='pt-7 space-y-3'>
        {eventData.map((e, index) => (
          <div className='bg-slate-100 h-32 rounded-lg flex flex-row justify-between items-center p-6 gap-x-3' key={index}>
            <div className='flex flex-row gap-x-6'>
              <div className='flex-col items-center justify-center flex p-5 bg-white w-20 h-20 aspect-square rounded-lg'>
                <p className='text-sm'>{e.month}</p>
                <p className='text-xl font-semibold'>{e.day}</p>
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-lg font-normal'>{e.title}</p>
                <p className='pr-10'>{e.content[0]}</p>
              </div>
            </div>
            <div>
              <Button variant='black' className='rounded-full px-6 font-semibold'> RSVP</Button>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Event