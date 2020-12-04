import axios from 'axios'

export const setCurrentInput = payload => ({
    type: 'SET_CURRENT_INPUT',
    payload,
});


export const setCurrentItem = payload => ({
    type: 'SET_CURRENT_ITEM',
    payload,
});


export const setLoading = payload => ({
    type: 'SET_LOADING',
    payload,
})

const API_KEY = '381397280a22a3d847804f46ac23b87e';
export const fetchWeather = (currentInput, setShowWeather) => dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentInput}&units=metric&appid=${API_KEY}`).then(({ data }) => {
        dispatch(setLoading(false));
        dispatch(setCurrentItem(data));
        setShowWeather(true);

    }).catch(err => {
        alert(err)
    });
};
