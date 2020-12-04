import React, { useState } from 'react';
// components
import TextField from './TextField';
import WeatherCard from './WeatherCard'
// components
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentInput, setLoading, fetchWeather } from '../redux/actions/weather';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Loader from './Loader';



const useStyles = makeStyles({
    root: {
        maxWidth: 840,

    },
    media: {
        height: 440,
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100vh - 65px)',
    }
});



const WeatherInfo = () => {

    const classes = useStyles()
    const [showWeather, setShowWeather] = useState(false)
    const currentInput = useSelector(({ weather }) => weather.currentInput);
    const currentItem = useSelector(({ weather }) => weather.item);
    const loading = useSelector(({ weather }) => weather.loading);
    const dispatch = useDispatch();



    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        dispatch(setCurrentInput(value));
    }



    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setCurrentInput(''))
        dispatch(setLoading(true))
        dispatch(fetchWeather(currentInput, setShowWeather))
    }


    return (

        <div className={classes.center}>
            <Box m={5} bgcolor="background.paper">
                <TextField handleClick={handleClick} currentInput={currentInput} handleChange={handleChange} />
            </Box>
            {loading ? <Loader /> : null}
            { showWeather && !loading &&
                <WeatherCard currentItem={currentItem} />}
        </div>
    )
}

export default WeatherInfo
