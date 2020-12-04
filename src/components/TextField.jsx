import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 350,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

function TextField({ handleChange, currentInput, handleClick }) {
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <Paper onSubmit={onSubmit} component="form" className={classes.root}>
            <InputBase onChange={handleChange}
                value={currentInput}
                className={classes.input}
                placeholder="Введите название города"
            />
            <IconButton onClick={handleClick} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
export default TextField;