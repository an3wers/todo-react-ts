import { FC, useState } from "react";

const Auth: FC = () => {
  interface ILogin {
    email: string;
    password: string;
  }

  const [loginState, setLoginState] = useState<ILogin>({
    email: "",
    password: "",
  });

  const login = (user: ILogin) => {};

  return (
    <div className='py-5'>
      <h1>Sing in todo app</h1>
      <div className='card'>
        <div className='card-body'>This is some text within a card body.</div>
      </div>
      {/*   email 
            пароль
            кнопка
            */}
    </div>
  );
};

export default Auth;
