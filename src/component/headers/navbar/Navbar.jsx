import { Link, NavLink } from "react-router-dom"
import logo from '../../../assets/img/logo/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../authprovider/Authporvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const dark =()=>{
        return document.querySelector("html").attributes['data-theme'].value="dark"
    }
    const light =()=>{
        return document.querySelector("html").attributes['data-theme'].value="light"
    }


    // dark and light 
    const toggleDarkMode = e =>{
        if(e.target.checked){
            return dark();
        }
        return light();
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Handle successful logout
                Swal.fire({
                    title: 'Success',
                    text: 'Logout successful.',
                    icon: 'success',
                });
            })
            .catch((error) => {
                // Handle error
                Swal.fire({
                    title: 'Error',
                    text: 'Error logging out: ' + error.message,
                    icon: 'error',
                });
            });
    };
    const navbar = <>

        <a className="mr-5 text-[18px] font-semibold">
            < NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
            >
                Home
            </NavLink >
        </a>
        <a className="mr-5 text-[18px] font-semibold">
            < NavLink
                to="/product"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
            >
                Our Brands
            </NavLink >
        </a>
        <a className="mr-5 text-[18px] font-semibold">
            < NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
            >
                My Cart
            </NavLink >
        </a>
        <a className="mr-5 text-[18px] font-semibold">
            < NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
            >
                Add Product
            </NavLink >
        </a>
        <a className="mr-5 text-[18px] font-semibold">
            < NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
            >
                About
            </NavLink >
        </a>
        <a className="mr-5 text-[18px] font-semibold">
            < NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
            >
                Contact
            </NavLink >
        </a>
    </>
    return (

        <div className="py-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn w-48 btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end p-2 ">
                    {user ? (

                        <div className="dropdown  border-red-600 dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 border border-red-600 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <div className="space-y-3  font-semibold">
                                    <p >{user.email}</p>
                                    <p >{user.displayName}</p>



                                    <button onClick={handleSignOut} className=" capitalize p-2 rounded bg-red-300 font-semibold ml-3">Sign Out</button>
                                </div>
                            </ul>
                        </div>
                    ) : 
                    (
                        <Link to='/login'>
                            <button className="font-semibold text-lg cur capitalize">Login</button>
                        </Link>
                    )}
                </div>
                
                <input onChange={toggleDarkMode} type="checkbox" name="" className="toggle toggle-md" id="" />

            </div>
        </div>



    );
};

export default Navbar;


