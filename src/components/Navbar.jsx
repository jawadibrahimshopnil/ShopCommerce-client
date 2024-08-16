import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../routes/AuthProvider";

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink className="text-base font-medium" to='/'>Home</NavLink></li>
        <li><NavLink className="text-base font-medium" to='/s'>Services</NavLink></li>
        <li><NavLink className="text-base font-medium" to='/a'>About Us</NavLink></li>
        <li><NavLink className="text-base font-medium" to='/c' >Contact Us</NavLink></li>

        <li><Link to='/login' className="btn sm:hidden bg-orange-500 text-white text-base mr-1">Login</Link></li>
        <li><Link to='/register' className="btn sm:hidden bg-orange-500 text-base text-white">Registers</Link></li>
    </>

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('user logout');
                console.log(user);
            })
    }

    return (
        <div className="navbar bg-base-200 rounded-xl mt-4 px-4 md:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="text-3xl font-extrabold ml-1 gap-0">Shop<span className="text-orange-500">Commerce</span></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="avatar hover:scale-110 tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-12 mr-1 rounded-full border">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn bg-orange-500 text-white">Logout</button>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn hidden sm:flex bg-orange-500 text-white text-base mr-1">Login</Link>
                            <Link to='/register' className="btn hidden sm:flex bg-orange-500 text-base text-white">Registers</Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;