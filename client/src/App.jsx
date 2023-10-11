import {Routes, Route} from "react-router-dom";
import "./css/index.css";
import "./css/App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>
    </>
  );
}
export default App;
