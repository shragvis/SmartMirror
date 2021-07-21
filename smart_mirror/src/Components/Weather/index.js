import React, {useState,useEffect} from 'react';
import axios from 'axios';

const styleSheet = {
    div: {
        paddingLeft: "30px",
        fontSize: "12px",
        fontFamily: "Rajdhani",
    },
    top:{
        marginBottom: "0px",
    },
    bot:{
        marginTop: "0px"
    }
}

const getEvents = async()=>{
    const d = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=San%20Jose&appid=6828380c7e987d91694584e49e049deb')
    const temp = d.data.main.temp
    const f = (temp - 273.15) * 9/5 + 32
    return Math.round(f)
}
    
const Weather = ()=>{
    const [currentWeather, setWeather] = useState(0)
    const updateWeather = async()=>{
        setWeather(await getEvents())
    }
    const interval = setInterval( ()=>{updateWeather()},3600000)
    useEffect(
        ()=>{
            updateWeather()
            return(
                ()=>{clearInterval(interval)}
            )
        },[]
    )

    return(
        <div style ={styleSheet.div}>
           <h1> {currentWeather}°F </h1> 
        </div>   
    )
}

export default Weather

