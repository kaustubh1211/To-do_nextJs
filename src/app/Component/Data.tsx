"use client"
import { createContext, ReactNode, useState } from "react"

export type Todo = {
    id: string;
    task: string;
    complete: boolean;
    date: Date;
}

type TodoContextType = {
    todos: Todo[];
    handleTodo: (task: string) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleTodo = (task: string) => {
        setTodos((prev) => [...prev, {
            id: Math.random().toString(),
            task,
            complete: false,
            date: new Date()
        }]);
    }

    return (
        <TodoContext.Provider value={{ todos, handleTodo }}>
            {children}
        </TodoContext.Provider>
    );
}