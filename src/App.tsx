import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import About from "./pages/About";
// import AppFooter from "./components/footer/AppFooter";
import Layout from "./components/hoc/layout";
import NotFound from "./pages/NotFound";
import AuthPaths from "./components/hoc/authPaths";
import { AuthContext } from "./context";
import { useState } from "react";

function App() {

  interface authState {
    isAuth: boolean,
    login: string
  }
  // настройка редиректа если не авторизован
  const [isAuth, setAuth] = useState<authState>({isAuth: false, login: ''})

  return (
    <div className='App'>
      <AuthContext.Provider value={{
        isAuth,
        setAuth
      }}>

        <Routes>
          <Route path="/" element={<Layout />}>
            {/* protect home */}

            <Route index element={<Home />} />

            <Route path='about' element={
              //<AuthPaths>
              <About />
              //</AuthPaths>
            } />
            <Route path='auth' element={<Auth />} />
            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
