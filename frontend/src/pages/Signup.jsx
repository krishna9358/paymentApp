import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const  [firstName, setFirstName]  = useState("");
  const  [lastName, setLastName]  = useState("");
  const  [username, setUsername]  = useState("");
  const  [password, setPassword]  = useState("");
  const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create account "} />
        <InputBox onChange={(e) => {setFirstName(e.target.value );}} placeholder="Krishna" label={"First Name : "} />
        <InputBox onChange={(e) => {setLastName(e.target.value );}} placeholder="Mohan" label={"Last Name : "} />
        <InputBox onChange={(e) => {setUsername(e.target.value );}} placeholder="xyz@example.com" label={"Email"} type={"email"} />
        <InputBox onChange={(e) => {setPassword(e.target.value );}} placeholder="123456" label={"Password"} type={"password"} />
        <div className="pt-4">
          <Button onClick={async () => {
             const response =  await axios.post("http://localhost:3000/api/v1/user/signup", {
                username, password, firstName, lastName 
              });

              //thing to learn
               localStorage.setItem("token", response.data.token)    
               navigate("/dashboar")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/login"} />
      </div>
    </div>
  </div>
}