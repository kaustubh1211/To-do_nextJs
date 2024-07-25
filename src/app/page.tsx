"use client"
import { useState } from "react";
export default function Home() {
  const [name ,setName]=useState();
  return (
   <div className="flex-col justify-center items-center">

    <h1 className=" font-semibold  text-center  text-4xl ">Todo - app </h1>
    <form action=" " className="text-center">
       <input type="text"  placeholder="Write your data"/>

    </form>
   </div>
  );
}
