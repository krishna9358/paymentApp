
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signin} from "./pages/Signin";
import {Signup} from "./pages/Signup";
import {Dashboard} from "./pages/Dashboard";
import {SendMoney} from "./pages/SendMoney"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/send" element={<SendMoney></SendMoney>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
