import { useState, FormEvent } from "react";

import { Button } from "../Button";
import { Title } from "../Title";

export function Test() {
    const [count, setCount] = useState(0);

    function handleCountIncrement() {
        setCount(count + 1);
    }

    const [todos, setTodos] = useState<string[]>([]);
    const [todoText, setTodoText] = useState("");

    function handleCreateTodo(event: FormEvent) {
        event.preventDefault();

        setTodos([...todos, todoText]);
        setTodoText("");
    }

    return (
        <div>
        <Button onClick={handleCountIncrement}>clique aqui agora por favor</Button>
        <div>{count}</div>

        <div>
            <form onSubmit={handleCreateTodo}>
            <input
                type="text"
                id="todo-input"
                onChange={(event) => setTodoText(event.target.value)}
                value={todoText}
            />
            <Button type="submit">Criar TODO</Button>
            </form>
        
            <ul>
            {/* ALGORITMO DE RECONCILIAÇÃO - REACT */}
            {todos.map((todo, index) => {
                return (
                <li key={index}>{todo}</li>
                );
            })}
            </ul>
        </div>

        <Title description="Hello World"></Title>
        <Title description="Ednaldo" />
        </div>
    );
}