import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import bgCold from '../assets/img/weather-bg.jpg';
import bgSunny from '../assets/img/sunny.jpg';


const useStyles = makeStyles({
    root: temp => ({
        width: 840,
        height: 550,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: temp < 10 ? `url(${bgCold})` : `url(${bgSunny})`,
        backgroundRepeat: 'no - repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: '3px 3px 8px 4px rgba(34, 60, 80, 0.2)',

    }),
    topContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: '0 0 50%',
        borderBottom: '1px solid #fff'

    },
    text: {
        color: '#fff',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)',
        textAlign: 'center'
    },
    borderBottom: {
        borderBottom: '1px solid #fff',
    },

    bottomContent: {
        flex: '0 0 50%',

    },
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },


});

const WeatherCard = ({ currentItem }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const temp = parseInt(currentItem.main.temp)
    const classes = useStyles(temp)
    let date = new Date;
    console.log(days[date.getDay()], date.getDate(), months[date.getMonth()], date.getFullYear())
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.topContent}>
                    <Box ml={5}>
                        <Typography className={`${classes.text} ${classes.borderBottom}`} variant="h1">
                            {temp + '°c'}
                        </Typography>
                        <Typography className={classes.text} variant="h4">{currentItem.weather[0].description}</Typography>
                        <div className={classes.row}>
                            <Box mr={2}>
                                <Typography className={classes.text} variant="h6">{`humidity: ${currentItem.main.humidity} %`}</Typography>
                            </Box>
                            <Box ml={2}>
                                <Typography className={classes.text} variant="h6">{`wind: ${currentItem.wind.speed} K/M`}</Typography>
                            </Box>
                        </div>
                    </Box>
                    <Box mr={5}>
                        <Typography className={classes.text} variant="h3">
                            {`${currentItem.name}, ${currentItem.sys.country}`}
                        </Typography>
                    </Box>

                </div>
                <div className={classes.bottomContent}>
                    <Box mt={10}>
                        <Typography className={classes.text} variant="h3">
                            {`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
                        </Typography>
                    </Box>
                </div>

            </div>
        </div>
    )
}

export default WeatherCard
