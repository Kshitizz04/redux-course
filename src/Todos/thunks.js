import { completeTodo, createTodo, loadTodosFailure, loadTodosInProgress, loadTodosSuccess, removeTodo } from "./actions.js"

export const loadTodos = ()=>{
    return(
        async(dispatch)=>{

            try{
                dispatch(loadTodosInProgress());
                const response = await fetch('http://localhost:8080/todos');
                const todos = await response.json(); 
    
                dispatch(loadTodosSuccess(todos));
            } catch(e){
                dispatch(loadTodosFailure());
                dispatch(displayAlert(e));
            }
        }
    )
}

export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = (id)=>{
    return(
        async (dispatch)=>{
            try{
                const response = await fetch(`http://localhost:8080/todos/${id}`,{
                    method:'delete',
                });
                const removedTodo = await response.json();
                dispatch(removeTodo(removedTodo));

            }catch(e){
                dispatch(displayAlert(e));
            }
        }
    )
}

export const completeTodoRequest = (id)=>{
    return(
        async (dispatch)=>{
            try{
                const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
                    method:'post',
                });
                const completedTodo = await response.json();
                dispatch(completeTodo(completedTodo));
            }catch(e){
                dispatch(displayAlert(e));
            }
        }
    )
}

export const displayAlert = (text)=>{
    return(
        ()=>{
            alert(text);
        }
    )
}