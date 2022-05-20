import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Pagenotfound from "./Pagenotfound";
import Login from "./Login";
import Cakedetail from "./Cakedetail";
import Search from "./Search";

// react-router and react-router-dom

function MyRouter() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/detail/:cakeid" element={<Cakedetail />} /> 
                    <Route path="/*" element={<Pagenotfound />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default MyRouter