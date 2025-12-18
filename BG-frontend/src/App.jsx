import { Routes, Route } from "react-router-dom";
import { ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Result from "./pages/Result";
import Upload from "./components/Upload";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full h-full">
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/upload" element={ < Upload />} />
          <Route path="/login" element={ <Login /> }/>
          <Route path="/register" element={ <Register />} />
          <Route path="/result" element={ <Result />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
