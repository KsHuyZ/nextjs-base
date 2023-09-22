import { useSession } from 'next-auth/react'
import React from 'react'

const SignInButton = () => {
    const { data: session } = useSession()
    if(session && session.user) {
        
    }
    return (
        <div>

        </div>
    )
}

export default SignInButton
