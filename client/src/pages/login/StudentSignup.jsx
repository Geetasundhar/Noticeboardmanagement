import LoginInput from "../../components/LoginInput.jsx";
import { useState } from "react";
import { domain } from '../../utils/constants.js';

function StudentSignup() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            console.log(form.name, form.password);
            const response = await fetch(domain + '/api/auth/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    role: 'STUDENT'
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("Signup successful!");
            } else {
                alert("Signup failed: " + data.message);
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
            <div className="bg-blue-300 w-[380px] m-auto p-6 flex flex-col gap-0 rounded-md">
                <h1 className="text-center font text-xl font-bold mb-4">Student Signup</h1>

                <LoginInput 
                    type="text" 
                    placeHolder="Enter your name" 
                    value={form.name} 
                    onChange={handleChange} 
                    name="name" 
                /> <br />

                <LoginInput 
                    type="email" 
                    placeHolder="Enter your email" 
                    value={form.email} 
                    onChange={handleChange} 
                    name="email" 
                /> <br />

                <LoginInput 
                    type="password" 
                    placeHolder="Enter your password" 
                    value={form.password} 
                    onChange={handleChange} 
                    name="password" 
                /> <br />

                <LoginInput 
                    type="password" 
                    placeHolder="Confirm password" 
                    value={form.confirmPassword} 
                    onChange={handleChange} 
                    name="confirmPassword" 
                /> <br />

                <button 
                    onClick={handleSubmit} 
                    className="bg-[#ff7200] text-white w-1/2 m-auto p-2 rounded-full font-bold"
                >
                    Sign Up
                </button>

                <div className="flex items-center self-center mt-4">
                    <span>Already have an account?</span>
                    <button className="ml-2 text-blue-600 hover:underline">Log in</button>
                </div>
            </div>
        </div>
    );
}

export default StudentSignup;
