import { useState } from "react";
import InputField from "../components/common/InputField";
import axios from "axios";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if(email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        try {
            const response = axios.post("http://localhost:5000/api/login", {
                email,
                password
            });
            alert(response.data.message);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <form className="login-container" onSubmit={handleSubmit}>

            <h1>Welcome Back 👋</h1>

            <InputField
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default Login;