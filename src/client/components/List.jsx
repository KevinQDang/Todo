import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,
} from '@material-ui/core'
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Save as SaveIcon
} from '@material-ui/icons'

const useStyles = makeStyles(() => ({
    root: {
        width: '50%',
        padding: 0
    },
    header: {
        textAlign: 'center',
        width: '50%'
    }
}));

const TodoList = ({ theme, todos, completeTodo, editTodo, removeTodo, saveTodo, noteRef }) => {
    const styles = useStyles()
    const [checked, setChecked] = React.useState([0])

    const handleToggle = (value, inx) => () => {
        const currentIndex = checked.indexOf(value)
        setChecked((prev) => {
            if (currentIndex === -1) {
                prev.push(value)
            } else {
                prev.splice(currentIndex, 1)
            }
            return [...prev]
        });
        completeTodo(inx)
    };


    return (
        <ThemeProvider theme={theme}>
            <h1 className={styles.header}>Today List</h1>
            <List className={styles.root}>
            {todos.map((todo, inx) => {
                return (
                    <ListItem
                        key={inx}
                        role={undefined}
                        dense
                        button
                        style={{
                            backgroundColor: todo.isCompleted ? "#ffffff" : "#fdfcce",
                            border: '1px solid black',
                            margin: 5
                        }}
                    >
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                checked={checked.indexOf(todo) !== -1}
                                onClick={handleToggle(todo, inx)}
                            />
                        </ListItemIcon>
                        {
                            (!todo.isEditing) ?
                                <>
                                    <ListItemText
                                        primary={`${todo.text}`}
                                        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                                    />
                                    <ListItemIcon>
                                        <IconButton
                                            edge="end"
                                            aria-label="edit"
                                            onClick={() => editTodo(inx)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </ListItemIcon>
                                </>
                                :
                                <>
                                    <label
                                        htmlFor="task"
                                        className="visuallyhidden"
                                    >
                                        {todo.text}
                                    </label>
                                    <input
                                        className="form__edit-input"
                                        defaultValue={todo.text}
                                        ref={(element) => noteRef.current[inx] = element}
                                        id="task"
                                    />
                                    <ListItemIcon>
                                        <IconButton onClick={() => saveTodo(inx)} edge="end" aria-label="delete">
                                            <SaveIcon/>
                                        </IconButton>
                                    </ListItemIcon>
                                </>
                        }
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => removeTodo(inx)} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
        </ThemeProvider>
    );
}

export default TodoList;