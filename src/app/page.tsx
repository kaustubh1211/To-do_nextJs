
import { useState } from "react";
import ToDO from "./Component/ToDO";
export default function Home() {

  return (
  <><main>
    <h1 className="text-center font-sans text-3xl ">   To-do App</h1>
    <ToDO/>
    </main></>
  );
}
