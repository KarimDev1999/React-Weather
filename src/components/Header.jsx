import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '28px',

    },
    row: {
        display: 'flex',
    }
});
const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <List className={classes.row}>
                    <ListItem>
                        <Typography variant="h6">
                            <Link to='/' className={classes.link}>Weather</Link>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">
                            <Link to='/info' className={classes.link}>Info</Link>
                        </Typography>
                    </ListItem>
                </List>
            </Toolbar>

        </AppBar>
    )
}

export default Header
