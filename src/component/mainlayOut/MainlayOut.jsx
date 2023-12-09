import { Outlet } from "react-router-dom";
import Navbar from "../headers/navbar/Navbar";
import Footer from "../footer/Footer";

const MainlayOut = () => {
    return (
        <div>
            <div className="w-full border-b-2 shadow-sm">
                <div className="max-w-6xl mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainlayOut;
