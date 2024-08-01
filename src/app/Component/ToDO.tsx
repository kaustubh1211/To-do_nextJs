"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function ToDO() {
  const [data, setData] = useState();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="text-center pt-4 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setData(e.target.value)
          }
          className=" bg-slate-200"
          placeholder=" Data"
        />
        <button>submit</button>
        <h1> {data}</h1>
      </form>
    </div>
  );
}
