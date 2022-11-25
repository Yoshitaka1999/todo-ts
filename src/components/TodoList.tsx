import React from "react";

const TodoList = (props: { handleEdit: any; handleChecked: any; handleDelete: any; todos: any; }) => {
    const { handleEdit, handleChecked, handleDelete, todos } = props;
    return (
        <>
            <ul className="todoList">
                {todos.map((todo: { id: React.Key | null | undefined; inputValue: string | number | readonly string[] | undefined; checked: boolean | undefined; }) => (
                    <li key={todo.id}>
                        <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} className="inputText" value={todo.inputValue} disabled={todo.checked} />
                        <input type="checkbox" onChange={() => handleChecked(todo.id, todo.checked)} />
                        <button onClick={() => handleDelete(todo.id)} className="deleteButton">delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;