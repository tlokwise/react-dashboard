import "./css/app.css";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Generator from "./pages/Generator"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />}/>
        <Route path="/dashboard/home" element={<Home />}/>
        <Route path="dashboard/generator" element={<Generator />}/>
      </Routes>
    </BrowserRouter>
  );
}
