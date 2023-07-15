import react from "react"
import TodoListItem from "./TodoListItem.js"
import NewTodoForm from "./NewTodoForm.js"
import { connect } from "react-redux"
import { completeTodo, removeTodo } from "./actions.js"

const TodoList = ({todos=[],onRemovePressed,onCompletePressed})=>{
    console.log("todos",todos)
    return(
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map((todo)=>{
                return(
                    <TodoListItem 
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletePressed={onCompletePressed}
                    />
                )
            })}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return(
        {todos:state.todos,}
    )
}

const mapDispatchToProps=(dispatch)=>{
    return(
        {
            onRemovePressed:(text)=>{dispatch(removeTodo(text))},
            onCompletePressed:(text)=>{dispatch(completeTodo(text))}
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);