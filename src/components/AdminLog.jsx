import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import styled from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";

const validUsers = [
    { username: "admin", password: "1212" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
`;

const AuthBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 2px solid white;
  padding: 5px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  width: 100%;
  margin-left: 10px;
`;

const Button = styled.button`
  background: #ff8c00;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
`;

const AdminLog = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Enables redirection

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Check if username and password match any stored credentials
        const userExists = validUsers.some(
            (user) => user.username === formData.username && user.password === formData.password
        );

        if (userExists) {
            navigate("/job"); // Redirects to next page
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <Container>
            <AuthBox>
                <h2 style={{ color: "white" }}>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <InputContainer>
                        <FaUser style={{ color: "white" }} />
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <FaLock style={{ color: "white" }} />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </InputContainer>

                    <Button type="submit">Login</Button>
                </form>
            </AuthBox>
        </Container>
    );
};

export default AdminLog;



// With signup page

// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(135deg, #1e3c72, #2a5298);
// `;

// const AuthBox = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   padding: 2rem;
//   border-radius: 10px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
//   border-bottom: 2px solid white;
//   padding: 5px;
// `;

// const Input = styled.input`
//   background: transparent;
//   border: none;
//   outline: none;
//   color: white;
//   font-size: 16px;
//   width: 100%;
//   margin-left: 10px;
// `;

// const Button = styled.button`
//   background: #ff8c00;
//   padding: 10px 20px;
//   border-radius: 5px;
//   color: white;
//   font-size: 18px;
//   cursor: pointer;
//   border: none;
//   margin-top: 20px;
// `;

// const ToggleText = styled.p`
//   margin-top: 10px;
//   cursor: pointer;
//   color: white;
//   text-decoration: underline;
// `;

// const AdminLog = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [formData, setFormData] = useState({ username: "", password: "", email: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`${isLogin ? "Logging in" : "Signing up"} as ${formData.username}`);
//     };

//     return (
//         <Container>
//             <AuthBox>
//                 <h2 style={{ color: "white" }}>{isLogin ? "Login" : "Sign Up"}</h2>
//                 <form onSubmit={handleSubmit}>
//                     {!isLogin && (
//                         <InputContainer>
//                             <FaEnvelope style={{ color: "white" }} />
//                             <Input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required={!isLogin}
//                             />
//                         </InputContainer>
//                     )}

//                     <InputContainer>
//                         <FaUser style={{ color: "white" }} />
//                         <Input
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             required
//                         />
//                     </InputContainer>

//                     <InputContainer>
//                         <FaLock style={{ color: "white" }} />
//                         <Input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </InputContainer>

//                     <Button type="submit">{isLogin ? "Login" : "Sign Up"}</Button>
//                 </form>

//                 <ToggleText onClick={() => setIsLogin(!isLogin)}>
//                     {isLogin ? "Create an account" : "Already have an account? Login"}
//                 </ToggleText>
//             </AuthBox>
//         </Container>
//     );
// };

// export default AdminLog;
