import react, { useEffect } from "react"
import TodoListItem from "./TodoListItem.js"
import NewTodoForm from "./NewTodoForm.js"
import { connect } from "react-redux"
import { completeTodoRequest, displayAlert, loadTodos, removeTodoRequest } from "./thunks.js"
import { getTodos, getTodosLoading } from "./selectors.js"

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
        {todos:getTodos(state),isLoading:getTodosLoading(state)}
    )
}

const mapDispatchToProps=(dispatch)=>{
    return(
        {
            onRemovePressed:(id)=>{dispatch(removeTodoRequest(id))},
            onCompletePressed:(id)=>{dispatch(completeTodoRequest(id))},
            startLoadingTodos:()=>{dispatch(loadTodos())},
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);