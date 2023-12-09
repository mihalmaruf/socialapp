import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
          <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/profile/:id" element={<Profile/>}/>
           <Route path="/login" element={<Login/>}/>
           </Routes>
          </div>
          <RightBar />
        </div>
      </div>
    );
}

export default App;