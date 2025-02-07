import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User Logged in')
            alert('Anda berhasil masuk')
            navigate('/menu')
        } catch (error) {
            console.error('Error logging in:', error.message);            
        }
    };

return (
    <div className="flex flex-col items-center rounded-lg">
        <div className="flex justify-between mb-6">
                <button className="bg-white text-black py-2 px-4 rounded-full w-32 font-semibold focus:outline-none">
                    Login
                </button>        
            <Link to="/signup">
                <button className="bg-transparent text-white py-2 px-4 rounded-full w-32 font-semibold focus:outline-none">
                    Signup 
                </button>
            </Link>
        </div>
    
        <form className="space-y-4 flex flex-col items-center">
            <div className="flex flex-col items-center w-72">
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full p-3 bg-white text-gray-700 rounded-full focus:outline-none"
                />
                </div>

                <div className="flex flex-col items-center w-72">
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="w-full p-3 mb-48 bg-white text-gray-700 rounded-full focus:outline-none"
                />
                </div>

                <button 
                onClick={handleLogin}
                className="w-72 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
                >
                    Login
                </button>
                </form>
            </div>
        );
};

export default Login;