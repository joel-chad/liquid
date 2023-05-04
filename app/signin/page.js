'use client'
import PopupWidget from '@/components/PopupWidget'
import SignIn from '../../components/SignIn'

export default function SignInPage() {
    return (
      <main className="flex pt-12 pb-8 flex-col items-center justify-center">
        <SignIn/>
       <PopupWidget/>
      </main>
    )
  }
