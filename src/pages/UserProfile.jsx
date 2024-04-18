// import Navbar from "./Navbar";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={user?.photoURL} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{user?.displayName}</h2>
                <p>Email: {user?.email}</p>
                <p>PhotoURL: {user?.photoURL.slice(0, 25)}........</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default UserProfile;