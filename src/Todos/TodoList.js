import react, { useEffect } from "react"
import TodoListItem from "./TodoListItem.js"
import NewTodoForm from "./NewTodoForm.js"
import { connect } from "react-redux"
import { completeTodoRequest, loadTodos, removeTodoRequest } from "./thunks.js"
import { getCompleteTodos, getIncompleteTodos, getTodosLoading } from "./selectors.js"
import { styled } from "styled-components"

const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
`;

const TodoList = ({completedTodos,incompletedTodos,onRemovePressed,onCompletePressed,isLoading,startLoadingTodos})=>{

    console.log("completeTodos",incompletedTodos)
    useEffect(()=>{
        startLoadingTodos();
    },[])

    const loadingMessage = 
        <div>Loading todos...</div>;
    const  content =
        <ListWrapper>

            <NewTodoForm/>
            <h3>Incomplete</h3>
            {incompletedTodos.map((todo)=>{
                return(
                    <TodoListItem 
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletePressed={onCompletePressed}
                    />
                )
            })}
            <h3>Completed</h3>
            {completedTodos.map((todo)=>{
                return(
                    <TodoListItem 
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletePressed={onCompletePressed}
                    />
                )
            })}
        </ListWrapper>  
    return(
        isLoading ? loadingMessage : content
    )
}
const mapStateToProps=(state)=>{
    return(
        {
            completedTodos:getCompleteTodos(state),
            incompletedTodos:getIncompleteTodos(state),
            isLoading:getTodosLoading(state)}
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