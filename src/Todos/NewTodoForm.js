import react,{useState} from "react"
import { connect } from "react-redux"
import { addTodoRequest } from "./thunks.js"
import { getTodos } from "./selectors.js"
import { styled } from "styled-components"

const FormContainer = styled.div`
border-radius:8px;
padding:16px;
text-align:center;
box-shadow:0 4px 8px grey;
`;

const NewTodoInput=styled.input`
font-size:16px;
padding:8px;
border:none;
border-bottom:2px solid #ddd;
border-radius:8px;
width:70%;
outline:none;
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewTodoForm = ({todos,onCreatePressed})=>{
    const [inputValue,setInputValue] = useState("")
    
    return(
        <FormContainer>
            <NewTodoInput
            placeholder="Type your new todo here"
            type="text"
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <NewTodoButton
            onClick={()=>{
                const isDuplicate = todos.some((todo)=>{
                    return(todo.text===inputValue);
                })
                if(!isDuplicate){
                    onCreatePressed(inputValue);
                    setInputValue("");
                }
                else{
                    alert("Todo already exists");
                }
            }}
            >
                Create New
            </NewTodoButton>
        </FormContainer>
    )
}

const mapStateToProps = (state)=>{
    return(
        {
            todos: getTodos(state),
        }
    )
}

const mapDispatchToProps = (dispatch)=>{
    return(
        {
            onCreatePressed:(text)=>{dispatch(addTodoRequest(text))}
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);