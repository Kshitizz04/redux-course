import react from "react"
import TodoListItem from "./TodoListItem.js"
import NewTodoForm from "./NewTodoForm.js"
import { connect } from "react-redux"
import { removeTodo } from "./actions.js"

const TodoList = ({todos=[],onRemovePressed})=>{
    return(
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map((todo)=>{
                return(
                    <TodoListItem 
                        todo={todo}
                        onRemovePressed={onRemovePressed}
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
            onRemovePressed:(text)=>{dispatch(removeTodo(text))}
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);