'use client'

import { toast } from '@/components/ui/use-toast'
import { User } from 'lucide-react'

export const ProfileButton = () => {
  return (
    <button
      className="lg:hidden"
      onClick={() => {
        toast({
          title: 'No profile',
          description: 'Profile creation has not yet been added to this site',
        })
      }}
    >
      <User />
    </button>
  )
}
