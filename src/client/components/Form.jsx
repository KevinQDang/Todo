import  React, { useRef } from 'react'
import FormInput from "./FormInput"
import List from "./List"
import { createTheme } from "@material-ui/core/styles"
import useForm from '../hooks/useForm'

const theme = createTheme({
    palette: {
        primary: { main: '#0102e8' },
    },
});

const Form = () => {
    const {
        newTodo,
        setTodo,
        clearInput,
        addTodo,
        isInputEmpty,
        todos,
        completeTodo,
        editTodo,
        removeTodo,
        saveTodo,
        noteRef
    } = useForm()
    
    const inputRef = useRef();


    const handleSubmit = e => {
        e.preventDefault()
        addTodo(newTodo)
        clearInput()
        inputRef.current.focus()
    };

    return (
        <form onSubmit={handleSubmit} className="form">

                <List
                    theme={theme}
                    todos={todos}
                    completeTodo={completeTodo}
                    editTodo={editTodo}
                    removeTodo={removeTodo}
                    saveTodo={saveTodo}
                    noteRef={noteRef}
                />
                <FormInput
                    theme={theme}
                    todo={newTodo}
                    setTodo={setTodo}
                    clearInput={clearInput}
                    inputRef={inputRef}
                    isInputEmpty={isInputEmpty}
                />
        </form>
    )
}

export default Form;