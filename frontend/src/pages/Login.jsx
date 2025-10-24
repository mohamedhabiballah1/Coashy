import { useEffect, useState } from "react";
import api from "../api/axios";

const Login = () => {
    const [email, setEmail] = useState("hello");
    const [password, setPassword] = useState("hello");
    const [error, setError] = useState("");

    const sendCredentials = async () => {
        try {
          const res = await api.post("/auth/login", {
            email,
            password,
          });
          console.log("✅ Logged in successfully:", res.data);

          localStorage.setItem("token", res.data.token);
        } catch (err) {
          console.error("❌ Login failed:", err.response?.data?.message || err.message);
          setError(err.response?.data?.message || "Login failed");
        }
    };

    useEffect(() => {
        sendCredentials();
    }, []);
    return (
        <div className="auth">
            
        </div>
    );
}

export default Login;