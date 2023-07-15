import { CREATE_TODO,REMOVE_TODO,COMPLETE_TODO } from "./actions";

export const todos = (state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case CREATE_TODO:{
            const {text}=payload;
            const newTodo ={
                text,
                isComplete:false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const {text}=payload;
            return state.filter(todo=>todo.text!==text);
        }
        case COMPLETE_TODO:{
            return state.map((todo)=>{
                if(todo.text===payload.text){
                    return {...todo,isComplete: true}
                }
                return(
                    todo
                )
            })
        }
        default:{
            return state
        }
    }
}