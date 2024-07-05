import React from 'react'
import { Button } from './button'
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from 'next/link'

const Referee = () => {
  return (
    <section>
      <div className='bg-violet-50  rounded-lg p-8'>
        <div className='text-3xl'>
          <p>Refer Talent.</p>
          <p>Earn BTRST</p>
        </div>
        <p className='py-5 pb-10'>Invite talent to sign up using your link and you`ll get 1% of their earnings-awarded in BTRST-for any job they land on Braintrust.</p>
        <div className='text-sm bg-red-100 rounded-full w-full h-12 py-3'>

        </div>
        <div className='flex flex-wrap flex-row gap-3 py-5 pb-10'>
          <Button variant='outline'>
            <Mail className="mr-2 h-3 w-3 rounded-full" />Email
          </Button>
          <Button variant='outline'>
            <Linkedin className="mr-2 h-3 w-3 rounded-full" />LinkedIn
          </Button>
          <Button variant='outline'>
            <Twitter className="mr-2 h-3 w-3 rounded-full" />Twitter
          </Button>
          <Button variant='outline'>
            <Instagram className="mr-2 h-3 w-3 rounded-full" />Instagram
          </Button>
        </div>
        <p className='text-xs items-center'>
          Max $10K per referee. Talent must sign up using your link. <Link href={''} className='underline'>Learn more about BTRUST</Link>.
        </p>
      </div>
    </section>
  )
}

export default Referee