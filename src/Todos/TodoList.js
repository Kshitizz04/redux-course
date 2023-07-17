import react, { useEffect } from "react"
import TodoListItem from "./TodoListItem.js"
import NewTodoForm from "./NewTodoForm.js"
import { connect } from "react-redux"
import { completeTodo, removeTodo } from "./actions.js"
import { displayAlert, loadTodos, removeTodoRequest } from "./thunks.js"

const TodoList = ({todos=[],onRemovePressed,onCompletePressed,isLoading,startLoadingTodos})=>{

    console.log("todos",todos)

    useEffect(()=>{
        startLoadingTodos();
    },[])

    const loadingMessage = 
        <div>Loading todos...</div>;
    const  content =
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
    return(
        isLoading ? loadingMessage : content
    )
}
const mapStateToProps=(state)=>{
    return(
        {todos:state.todos,isLoading:state.isLoading}
    )
}

const mapDispatchToProps=(dispatch)=>{
    return(
        {
            onRemovePressed:(id)=>{dispatch(removeTodoRequest(id))},
            onCompletePressed:(text)=>{dispatch(completeTodo(text))},
            startLoadingTodos:()=>{dispatch(loadTodos())},
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);