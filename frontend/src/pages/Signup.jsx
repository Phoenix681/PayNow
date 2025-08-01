import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"
import axios from "axios" 
import { useState } from "react"
import { useNavigate } from "react-router"
export const Signup = () => {
    const navigate = useNavigate();
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={(e)=>{
          setFirstName(e.target.value);
        }} placeholder="Anukul" label={"First Name"} />
        <InputBox  onChange={(e)=>{
          setLastName(e.target.value);
        }} placeholder="jain" label={"Last Name"} />
        <InputBox  onChange={(e)=>{
          setUsername(e.target.value);
        }} placeholder="anukul@gmail.com" label={"Email"} />
        <InputBox  onChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div class Name="pt-4">
          <Button onClick={async()=>{
           const response = await axios.post(
              "http://localhost:3000/api/v1/user/signup",{
                username,
                password,
                firstName,
                lastName
              }

            )
           localStorage.setItem("token",response.data.token); 
           navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}