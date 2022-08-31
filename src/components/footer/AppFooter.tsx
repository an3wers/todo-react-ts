import { FC } from "react";
import { NavLink } from 'react-router-dom'

const AppFooter: FC = () => {

    return(
        <div className="py-4">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        created by <a target="_blank" href="https://github.com/an3wers">an3wer</a>
                    </div>
                    <nav className="d-flex justify-content-end">
                        <NavLink className="p-2" to="/">Home</NavLink>
                        <NavLink className="p-2" to="about">About</NavLink>
                        <NavLink className="p-2" to="auth">Auth</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default AppFooter;
