
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import swal from 'sweetalert';
import { AuthContext } from "../authprovider/Authporvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { currentUser } = useContext(AuthContext);
    const [register, setRegister] = useState(' ');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const accept = form.get('checkbox')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, password);
        setRegister(" ");
        setSuccess(" ")
        if (password.length < 6) {
            setRegister(swal("Password should be at least 6 characters"));
            return
        }
        else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(password)) {
            setRegister(swal('password should contain atleast one number and one special character'))
        }
        else if (!accept) {
            setRegister(swal('accept our tarms and condition'));
            return
        }
        currentUser(email, password, photo, name )
            .then((result => {
                console.log(result.user)
                setSuccess(swal('Account Created SuccessFully'));

                // upadeted profile
                updateProfile(result.user ,{
                    displayName: name,
                    photoURL: photo,
                    
                })
                .then()
                .catch(error=>console.log(error))


            }))
            .catch(error => {
                setRegister(swal('You have already registed'), error.message)
            })
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="p-3  card flex-shrink-0 w-full lg:w-6/12 md:w-6/12 shadow-2xl bg-base-100">
                    <h1 className="text-center text-2xl  font-semibold mt-5 text-[#063B29] ">Register your account</h1> <hr className="mt-5" />
                    <form onSubmit={handleRegister} className="p-10 space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phto URl</span>
                            </label>
                            <input required type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" />
                        </div>
                        <div className="relative">
                            <input
                                required placeholder="Enter your password"
                                className="w-full border rounded-lg p-2 "
                                type={showPassword ? "text" : "password"}
                                name='password' />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-2 right-2 text-2xl">
                                {
                                    showPassword ? <AiOutlineEye></AiOutlineEye> :
                                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                }
                            </span>
                        </div>
                        <div className="flex items-center ">
                            <input type="checkbox" name="checkbox" id="terms" />
                            <label htmlFor="terms">Accept Our Terms and Condition</label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-lg mt-3 bg-red-600 text-white capitalize btn-outline">Register</button>
                            <p className="mt-5 text-center text-sm text-black font-medium">Already Have An Account ? <Link to='/login' className="text-red-600 font-bold">Login</Link></p>
                        </div><hr />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;