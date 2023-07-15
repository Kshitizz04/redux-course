import react from "react"

const TodoListItem = ({todo,onRemovePressed,onCompletePressed})=>{
    return(
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="button-container">
                {todo.isComplete 
                ? null 
                : <button className="completed-button" onClick={()=>{onCompletePressed(todo.text)}}>Mark as completed</button>}
                <button className="remove-button" onClick={()=>{onRemovePressed(todo.text)}}>Remove</button>
            </div>
        </div>
    )
}

export default TodoListItem