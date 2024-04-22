import axios from "axios"
import axiosistance from "./Axios"
import Otp from "../User/Otp"


export const signupapi=async(signupdata)=>{
    console.log(signupdata,'5656565323974')
    const data= await axiosistance.post('/myapi/signup/',signupdata)
    console.log(data,'>>>>>>>>>>>>>>>>>>>>>>')
    return data
}

export  const otpapi=async(otpdata)=>{
    console.log(otpdata)
    const data=await axiosistance.post('myapi/verifyotp/',otpdata)
    console.log(data)
    return data
}


export const loginapi=async(logindata)=>{
    console.log(logindata,'?????????????????')
    const data=await axiosistance.post('/myapi/login/',logindata)
    console.log(data,'5656565+++++++++++++++++++++++')
    return data
}