import { useState, useRef, useEffect } from 'react'

const useForm = () => {
    const [ todos, setTodos ] = useState([])
    const fetchData = async() => {
        const data = await fetch('http://localhost:4000/')
        const todos = await data.json()
        setTodos(todos)
    }
    const [ newTodo, setNewTodo ] = useState('');
    const [ isInputEmpty, setInputEmpty ] = useState(false)
    const noteRef = useRef({});
    useEffect(() => {
        fetchData()
    }, [])


    const addTodo = text => {
        if ( text !== '') {
            setNewTodo('')
            setTodos((prev) => [...prev, { text }])
        } else {
            setInputEmpty(true)
        }
    };

    const removeTodo = inx => {
        setTodos((prev) => {
            prev.splice(inx, 1)
            return [...prev]
        })
    }

    const completeTodo = inx => {
        setTodos((prev) => {
            prev[inx].isCompleted = !prev[inx].isCompleted
            return [...prev]
        });
    };

    const editTodo = inx => {
        setTodos((prev) => {
            prev[inx].isEditing = !prev[inx].isEditing
            return [...prev]
        });
    }

    const saveTodo = (inx) => {
        setTodos((prev) => {
            prev[inx].isEditing = !prev[inx].isEditing
            prev[inx].text = noteRef.current[inx].value
            return [...prev]
        });
    }

    const clearInput = () => {
        setNewTodo('')
    }

    const setTodo = todo => {
        setInputEmpty(false)
        setNewTodo(todo)
    }

    return {
        newTodo,
        setTodo,
        clearInput,
        saveTodo,
        editTodo,
        completeTodo,
        removeTodo,
        addTodo,
        isInputEmpty,
        todos,
        noteRef
    }
}

export default useForm