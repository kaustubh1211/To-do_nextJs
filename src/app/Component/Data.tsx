
"use client"
import { createContext, ReactNode } from "react"
import { useState } from "react";
export const todoContex= createContext(null);

export type todo={

    Id: Number;
    task:String;
    complete:boolean;
    date: Date; 
}

export const todoProvoider= (children:ReactNode)=>{
    const [todo , setTodo]=useState();
    const handleTodo=(task:String)=>{
        setTodo(()=>{
            const newTodo ={
                Id: Math.random().toString(),
                task,
                complete:false, 
                date: new Date
            }
            ...prev
        })
        return newTodo;
    } 

}