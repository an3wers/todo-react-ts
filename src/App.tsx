import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import About from "./pages/About";
import AppFooter from "./components/footer/AppFooter";


function App() {
  return (
    <div className='App'>
      <main className='main'>
        <div className='container'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='auth' element={<Auth />} />
          </Routes>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
