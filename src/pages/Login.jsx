import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../routes/AuthProvider";
import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const { setLoading, signInUser, setUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((res) => {
                setUser(res.user);
                toast.success("Login Successful");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setLoading(false)
                toast.error(`${err?.code}`);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                toast.success("Login Successful");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.code)
            })
    }

    return (
        <section className="grid place-items-center m-6">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 border">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block">Email</label>
                        <input 
                        required type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                    </div>
                    <div className="space-y-1 relative">
                        <label htmlFor="password" className="block">Password</label>
                        <input 
                        required
                            type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                            <span onClick={()=>setShowPass(!showPass)} className="absolute right-2 top-[40%]">
                            {
                                showPass ? <FaEyeSlash className="w-5 h-5"/>
                                : <FaEye className="w-5 h-5"/>
                            }
                            </span>
                        <div className="flex justify-end text-sm ">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-xl font-semibold text-center rounded-md text-gray-50 bg-orange-500">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 ">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    
                </div>
                <p className="text-center sm:px-6">Don&apos;t have an account?
                    <Link to='/register' rel="noopener noreferrer" href="#" className="underline text-orange-600"> Register</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;