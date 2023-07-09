import react,{useState} from "react"
import { Connect } from "react-redux"
import { createTodo } from "./actions"

const NewTodoForm = (todos,onCreatePressed)=>{
    const [inputValue,setInputValue] = useState("")
    
    return(
        <div className="new-todo-form">
            <input 
            className="new-todo-input"
            placeholder="Type your new todo here"
            type="text"
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <button className="new-todo-button"
            onClick={()=>{
                const isDuplicate = todos.some((todo)=>{
                    return(todo.text===inputValue);
                })
                if(!isDuplicate){
                    onCreatePressed(inputValue);
                    setInputValue("");
                }
                else{
                    alert("Todo already exists");
                }
            }}
            >
                Create New
            </button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return(
        {
            todos: state.todos,
        }
    )
}

const mapDispatchToProps = (dispatch)=>{
    return(
        {
            onCreatePressed:(text)=>{dispatch(createTodo(text))}
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);