import create from 'zustand'

interface IUser {
  id?: string,
  login: string,
  password: string,
}

interface IAuth {
  user: IUser,
  token: string
  signIn: () => void
  logout: () => void
}

const useAuthStore = create((set, get) => ({

}))