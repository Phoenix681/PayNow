import {Appbar} from "../components/Appbar"
import {Balance} from "../components/Balance"
import {Users} from "../components/Users"
import axios from "axios"
import { useState,useEffect } from "react"

export const Dashboard = ()=>{
    const [balance,setBalance]  = useState(10000);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
            Authorization: "Bearer "+localStorage.getItem("token")
        }
    }).then((response)=>{
        setBalance(response.data.balance);
    })},[balance])
    return <div>
        <Appbar/>
        <div className="m-8" >
            <Balance value={balance}/>
            <Users/>
        </div>
    </div>
} 