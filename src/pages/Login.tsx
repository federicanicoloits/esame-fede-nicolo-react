import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sessionStorage.setItem("uid", userCredential.user.uid);
        sessionStorage.setItem("email", email);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode + ": " + errorMessage);
      });
  };
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <form className="w-[60%] bg-white p-3 rounded-lg">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(n) => setEmail(n.target.value)}
            className="w-full mb-3"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(n) => setPassword(n.target.value)}
            className="w-full mb-3 "
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black px-4 py-3 rounded-lg text-white"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
