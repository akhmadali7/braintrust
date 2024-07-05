import React from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Header from '../Header'
import Profile from './profile'
import { DialogClose } from '@radix-ui/react-dialog'



const ProfileDialog = () => {
  return (
    <section>
      <Dialog>
        <DialogTrigger>
          <div className='rounded-full px-5 py-3 bg-black text-white border hover:bg-white hover:text-black hover:border-black '>Complete profile</div>

        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete your profile</DialogTitle>
            <DialogDescription>
              <Profile />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <Button type="submit" >
              Save
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>

        </DialogContent>
      </Dialog>

    </section>
  )
}

export default ProfileDialog