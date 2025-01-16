// ToDo.tsx
"use client"
import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { TodoContext } from "./Data";

export default function ToDo() {
    const [data, setData] = useState<string>("");
    const todoContext = useContext(TodoContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoContext && data.trim()) {
            todoContext.handleTodo(data);
            setData("");
        }
    };

    return (
        <div className="text-center pt-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={data}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setData(e.target.value)
                    }
                    className="bg-slate-200 p-2 rounded"
                    placeholder="Enter task"
                />
                <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>
            {todoContext?.todos.map((todo) => (
                <div key={todo.id} className="mt-2">
                    {todo.task}
                </div>
            ))}
        </div>
    );
}