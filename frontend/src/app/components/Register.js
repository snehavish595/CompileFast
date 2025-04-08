import React from "react";
import api from "../api";

const Register = () =>{
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await api.post("/register/", {
            username,
            email,
            password,
        });
        console.log("Registration successful:", response.data);
        alert(response.data.message);
    } catch (error){
        alert("Registration failed:", error.response.data);
    }
  };

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register;