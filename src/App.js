import "./App.css";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const curentUserStatus = useSelector((state) => state.curentTheData.isLogin);
  console.log(curentUserStatus, "curentUserStatus");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          {curentUserStatus && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
