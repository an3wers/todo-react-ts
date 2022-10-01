import AppFooter from "../footer/AppFooter"
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../context"

const Layout = () => {

    const location = useLocation()    
    const { isAuth } = useContext(AuthContext)

    if (location.pathname === '/' && !isAuth) {
        return <Navigate to="/auth" />
    } else if (location.pathname === '/auth' && isAuth) {
        return <Navigate to="/" />
    }
    else {  
        return (
            <>
                <main>
                    <div className="container">
                        <Outlet />
                    </div>
                </main>
                <AppFooter />
            </>
        )
    }



}

export default Layout