import react,{useState} from "react"

const NewTodoForm = ()=>{
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
            <button className="new-todo-button">Create New</button>
        </div>
    )
}

export default NewTodoForm