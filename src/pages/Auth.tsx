import { FC, useState } from "react";

// interface ILogin {
//   email: string;
//   password: string;
// }

const Auth: FC = () => {
  

  // const [loginState, setLoginState] = useState<ILogin>({
  //   email: "",
  //   password: "",
  // });

  // const login = (user: ILogin) => {};

  return (
    <div className='py-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10'>
          <h1 className="mb-4">Sing in todo app</h1>
          <div className='card'>
            <div className='card-body'>
              <form>
                <div className='mb-3'>
                  <label htmlFor='userLoginInput' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='userLoginInput'
                    placeholder='name@example.com'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='userPasswordInput' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='userPasswordInput'
                    placeholder='name@example.com'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Sing in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*   email 
            пароль
            кнопка
            */}
    </div>
  );
};

export default Auth;
