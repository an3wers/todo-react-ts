import { createContext } from "react";

interface IAuthContext {
    isAuth: boolean,
    login: string,
    setAuth: (val: boolean) => void,
}

export const AuthContext = createContext<IAuthContext | null | any>(null)