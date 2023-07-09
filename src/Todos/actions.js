export const CREATE_TODO ='CREATE_TODO'
export const REMOVE_TODO ='REMOVE-TODO'

export const createTodo=(text)=>{
    return(
        {
            type:CREATE_TODO,
            payload:{text}
        }
    )
}

export const removeTodo=text=>({
    type:REMOVE_TODO,
    payload:{text}
})