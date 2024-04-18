// import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from "react-helmet-async";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const UpdateProfile = () => {
    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    // const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    // const [displayName, setDisplayName] = useState('');
    // const [photoURL, setPhotoURL] = useState('');

    // useEffect(() => {

    //     if (user) {
    //         setDisplayName(user.displayName || '');
    //         setPhotoURL(user.photoURL || '');
    //     }
    // }, []);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        // const email = form.get('email');
        // const password = form.get('password');
        console.log(name, photo, email, password);

        // reset error and success
        setRegisterError('');
        setSuccess('');



        // create user
        createUser(photo, name)
            .then(result => {

                toast('Registration Successful');
                updateUserProfile(name, photo)
                    .then(() => { })
                console.log(result.user)
                
                // setReload(true)
            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        <div>
            <Helmet>
                <title>UpdateProfile</title>
            </Helmet>

            <div>
                <h2 className="text-3xl my-10 text-center">Update your account</h2>

                {
                    user ?
                        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder='' value={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder='' value={user?.email} className="input input-bordered text-black"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder='' value={user?.photoURL} className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative border">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
                            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div> */}
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3B7197]">Update</button>
                            </div>
                            <ToastContainer />
                        </form>
                        :
                        <div>
                            <h1>No user found</h1>
                        </div>
                }
                {/* <p className="text-center mt-4">Already have an account ? <Link className="text-[#FF8C47] font-bold" to='/login'>Login</Link> </p> */}
            </div>





        </div>
    );
};

export default UpdateProfile;