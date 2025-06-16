import React, { ReactNode, ReactElement } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}
const AuthLayout = ({children}: AuthLayoutProps): ReactElement => {
  return (
    <div className='flex justify-center pt-40'>
        AuthLayout
        <div>
             {children}
        </div>
    </div>
  )
}

export default AuthLayout