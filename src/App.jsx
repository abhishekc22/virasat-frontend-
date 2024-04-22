import Home from "./User/Home";
import Userrouter from "./User/Userrouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/*'element={<Home/>}/>
    <Route path="/User/*"element={<Userrouter/>}/>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}