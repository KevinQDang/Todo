import  React from 'react'
import { Button, TextField, FormHelperText, FormControl } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'


const useStyles = makeStyles({
    button: {
        background: 'green',
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 10px',
        margin: '15px 0 0 20px',
    },
    label: {
        width: '50%',
        margin: 5
    },
    helper: {
        color: 'red',
        alignSelf: 'center',
    }
});


const TodoCreator = ({ theme, todo, setTodo, clearInput, inputRef, isInputEmpty }) => {
    const styles = useStyles()
    
    return (
        <div className="form_input">
            <ThemeProvider theme={theme}>
                <FormControl   className={styles.label}>
                    <TextField
                        id="outlined-basic"
                        label="What to do today?"
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        aria-describedby="component-error-text"
                    />

                    { !isInputEmpty ?
                        <></>
                        :
                        <>
                            <FormHelperText id="component-error-text" className={styles.helper}>Task can't be empty</FormHelperText>
                        </>
                    }
                </FormControl>
                <Button
                    type="submit"
                    className={styles.button}
                >
                    Add task
                </Button>
            </ThemeProvider>
        </div>
    )

}

export  default TodoCreator;