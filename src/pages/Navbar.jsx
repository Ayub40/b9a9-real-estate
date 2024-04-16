import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut} = useContext(AuthContext);

    // if (loading) {
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update">Update Profile </NavLink></li>
        <li><NavLink to="/blogs">Blog</NavLink></li>
        
        {
            user && <>
                <li><NavLink to="/profile">User Profile</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Archo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "https://i.ibb.co/z6TYbrc/user.png"} />
                            </div>
                        </div>
                        :
                        // <button>{user?.displayName || ""}</button>
                        <img className="w-11" src={userDefaultPic} alt="" />
                }

                {
                    user ?
                        <button>{user?.displayName}</button>
                        :
                        <button>user not found</button>
                }

                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-outline ml-2 px-12 mb-2">Logged Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn btn-outline ml-2 px-12 mb-2">Login</button>
                        </Link>
                }

                {/* {
                    user ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                } */}
            </div>
        </div>
    );
};

export default Navbar;
