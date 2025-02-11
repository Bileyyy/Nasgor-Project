import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gambarA from "./asset/gambarA.png";
import gambarB from "./asset/gambarB.png";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const db = getFirestore();

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db,'users',user.uid), {
                email: user.email,
                createdAt: new Date(),
            });

            console.log('User created successfully');
            alert('Anda telah terdaftar')
            navigate('/login')
        } catch (error) {
            console.error('Error signing up:', error.message)
        }
    };

    return (
        <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-no-repeat bg-center bg-white relative overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-black text-white p-8 rounded-lg" id="signup">

            <div className="absolute right-96 mr-8 bottom-32">
                <img 
                src={gambarB}
                alt="gambarB"
                className="w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60" 
                />
            </div>

            <div className="absolute left-96 ml-8 top-24">
                <img
                src={gambarA}
                alt="gambarA"
                className="w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60" 
                />
            </div>

            <div className="flex justify-between mb-6">
                <Link to="/login">
                    <button className="bg-transparent text-white py-2 px-4 rounded-full w-32 font-semibold focus:outline-none">
                        Login 
                    </button>
                </Link>
                <button className="bg-white text-black py-2 px-4 rounded-full w-32 font-semibold focus:outline-none">
                    Signup
                </button>
            </div>

            <form className="space-y-4">
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
                    className="w-full p-3 bg-white text-gray-700 rounded-full focus:outline-none"
                    />
                </div>

                <div className="flex flex-col items-center w-72">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full p-3 mb-48 bg-white text-gray-700 rounded-full focus:outline-none"
                    />
                </div>

                <button 
                onClick={handleSignup}
                type="submit"
                className="w-72 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
                >
                    Signup
                </button>
            </form>
        </div>
        </div>
    );
};

export default Signup;