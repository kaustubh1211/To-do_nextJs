import { createContext, ReactNode } from "react"
import { useState } from "react";
export const todoContex= createContext(null);
const [todo , setTodo]=useState();

export const todoProvoider= (children:ReactNode)=>{
    const handleTodo=(task:String)=>{
        setTodo(()=>{
            const newTodo ={
                Id: Math.random().toString(),
                task,
                date: new Date
            }
        })
    } 

}