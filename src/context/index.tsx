import { createContext } from "react";

interface IAuthContext {
    isAuth: boolean,
    setAuth: (val: boolean) => void,
}

//?? any
export const AuthContext = createContext<IAuthContext | null | any>(null)