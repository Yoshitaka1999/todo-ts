import React from "react";

const InputTodo = (props: { handleChange: any; handleSubmit: any; } ) => {
    const { handleChange, handleSubmit} = props;
    return (
        <div>
            <h2>Todo List</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="create-form">
                <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
                <input type="submit" value="create" className="submitButton" />
            </form>
        </div>
    );
}

export default InputTodo;