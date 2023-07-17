export const CREATE_TODO ='CREATE_TODO'
export const REMOVE_TODO ='REMOVE-TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS'
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS'
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE'

export const createTodo=(todo)=>{
    return(
        {
            type:CREATE_TODO,
            payload:{todo}
        }
    )
}

export const removeTodo=todo=>({
    type:REMOVE_TODO,
    payload:{todo}
})

export const completeTodo = (text)=>{
    return(
        {
            type: COMPLETE_TODO,
            payload:{text},
        }
    )
}

export const loadTodosInProgress = ()=>{
    return(
        {
            type:LOAD_TODOS_IN_PROGRESS,
        }
    )
}

export const loadTodosSuccess = (todos)=>{
    return(
        {
            type:LOAD_TODOS_SUCCESS,
            payload:{todos},
        }
    )
}

export const loadTodosFailure = ()=>{
    return(
        {
            type:LOAD_TODOS_FAILURE,
        }
    )
}