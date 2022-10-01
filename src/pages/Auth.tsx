import { FC, useState, FormEvent, useContext } from "react";
// import { useNavigate, useLocation } from 'react-router-dom'
import { ILogin } from '../types/types'
import axios from 'axios'
import { AuthContext } from "../context"


const Auth: FC = () => {

  // const location = useLocation()
  // const navigate = useNavigate()

  // const from = location

  const [loginState, setLoginState] = useState<ILogin>({
    email: "",
    password: "",
    token: ''
  });

  const { isAuth, setAuth } = useContext(AuthContext)

  const [isAuthError, setAuthError] = useState<boolean>(false)

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()

    const key = 'AIzaSyC0ycs3IJsg8OzfzjSVFi-ValEBPdsTges'

    // web api key: AIzaSyC0ycs3IJsg8OzfzjSVFi-ValEBPdsTges
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    try {
      const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, { email: loginState.email, password: loginState.password, returnSecureToken: true })

      localStorage.setItem('token', res.data.idToken)
      // console.log(res.data)
      setAuth(true)
      setLoginState((prevState) => {

        return { email: '', password: '', token: res.data.idToken }

      })

      setAuthError(false)

    } catch (error) {
      console.log(error)
      setAuthError(true)
    }

  }

  return (
    <div className='py-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10'>
          <h1 className="mb-4">Sing in todo app</h1>

          {isAuthError && (
            <div className="alert alert-danger" role="alert">
              Auth error!
            </div>
          )}

          <div className='card'>
            <div className='card-body'>
              <form onSubmit={submitHandler}>
                <div className='mb-3'>
                  <label htmlFor='userLoginInput' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    value={loginState.email}
                    className='form-control'
                    id='userLoginInput'
                    placeholder='name@example.com'
                    onChange={(e) => setLoginState({ ...loginState, email: e.target.value })}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='userPasswordInput' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    value={loginState.password}
                    className='form-control'
                    id='userPasswordInput'
                    placeholder='your password'
                    onChange={(e) => setLoginState({ ...loginState, password: e.target.value })}
                  />
                </div>
                <button disabled={!loginState.email || !loginState.password} type='submit' className='btn btn-primary'>
                  Sing in
                </button>
              </form>
            </div>
          </div>
          <p className="mt-3"><small>
                For test: test@gmail.com, 12345678
              </small></p>
        </div>
      </div>

    </div>
  );
};

export default Auth;
