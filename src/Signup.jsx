import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
    } else {
        setError("");
    }
    }, [password, confirmPassword]);

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
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
        <div className="flex flex-col items-center justify-center rounded-lg" id="signup">
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
                className="w-72 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;