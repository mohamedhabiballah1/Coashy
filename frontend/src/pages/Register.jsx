import { useEffect, useState } from "react";
import api from "../api/axios";


const Register = () => {
    const [email, setEmail] = useState("habib1@gmail.com");
    const [password, setPassword] = useState("habiballah");
    const [firstName, setFirstName] = useState("mohamed");
    const [lastName, setLastName] = useState("habiballah");
    const [role, setRole] = useState("COACH");
    const [error, setError] = useState("");

    const sendCredentials = async () => {
        try {
            const res = await api.post("/auth/register", {
                email,
                password,
                firstName,
                lastName, 
                role
            });
            console.log("Registred Succefully", res.data.token);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        sendCredentials();
    }, []);

    return (
        <div className="register">

        </div>
    );
}
 
export default Register;