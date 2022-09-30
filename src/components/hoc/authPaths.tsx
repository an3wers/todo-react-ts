

import { FC, ReactNode } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

// interface IAuthPathsProps {
//     children?: ReactNode
// }

const location = useLocation()
const isAuth = false

const AuthPaths = ({ children }: {children: any}) => {

    if(!isAuth) {
        return <Navigate to='/auth' state={{from: location}} />
    }

    return (
        <div>
            { children }
        </div>
    )
}

export default AuthPaths