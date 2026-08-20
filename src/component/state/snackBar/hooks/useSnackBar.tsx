// 'use client'
// import { useState } from "react"

// export const useSnackBar=()=>{
//     const [isSnackBarOpen,setIsSnackBarOpen]=useState<boolean>(false)
//     const [valueSnackBar,setValueSnackBar]=useState<string>('')
//     const [colorSnackBar,setColorSnackBar]=useState<string>('')
//     const OpenSnackBar=(value:string,color:string)=>{
//         setIsSnackBarOpen(true)
//         setValueSnackBar(value)
//         setColorSnackBar(color)
//     }
//     const closeSnackBar=()=>{
//         setIsSnackBarOpen(false)
//     }
//     return{
//         OpenSnackBar,
//         closeSnackBar,
//         isSnackBarOpen,
//         valueSnackBar,
//         colorSnackBar
//     }
// }
import {create} from 'zustand'
import { useSnackBarType } from '../types/typesSnackBar'
export const useSnackBar=create<useSnackBarType>((set)=>({
    isSnackBarOpen:false,
    valueSnackBar:'',
    colorSnackBar:'',
    OpenSnackBar:(value,color)=>set({valueSnackBar:value,colorSnackBar:color,isSnackBarOpen:true}),
    closeSnackBar:()=>set({isSnackBarOpen:false})
}))