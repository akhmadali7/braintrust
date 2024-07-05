import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { PiCurrencyEthBold } from "react-icons/pi";
import { TiWarning } from "react-icons/ti";
import userData from '@/public/userdata'



const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-between align-middle'>
      <div className='flex flex-row items-center gap-x-5 '>
        <h2 className='text-4xl'>Hi, {userData.alias}!</h2>
        <div className='flex flex-row items-center gap-x-2 bg-red-500 rounded-lg px-4 py-2 text-white'>
          <p className='text-xs font-semibold leading-0'>Under Construction </p>
          <TiWarning height={25} width={25} className='h-6 w-6' />
        </div>
      </div>

      <div className='flex flex-row py-3 items-center'>
        <div className='flex flex-row pr-10 items-center gap-x-4 h-10 max-h-max '>
          <div>
            <p className='text-base font-semibold'>BRTST Balance</p>
          </div>
          <Separator className='bg-slate-300 w-[2npm install react-icons --savepx] ' orientation='vertical' />
          <div className='flex flex-row items-center'>
            <PiCurrencyEthBold height={20} width={20} className='h-7 w-7' />
            <p className='text-3xl font-semibold'>
              {new Intl.NumberFormat('id-ID', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              }).format(userData.Coin)}
            </p>
          </div>
        </div>
        <Button variant="black" className='px-5 border border-opacity-0'>Refer talent</Button>

      </div>
    </nav>
  )
}

export default Navbar