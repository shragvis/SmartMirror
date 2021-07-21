import React, {useState,useEffect} from 'react';
import axios from 'axios';

const styleSheet = {
    div: {
        paddingLeft: "50px",
        fontSize: "15px",
        fontFamily: "Rajdhani",
        textAlign: "center"
    },
    top:{
        marginBottom: "0px",
    },
    bot:{
        marginTop: "0px"
    }
}

const getEvents = async()=>{
    const u = await axios.get('http://localhost:8080/quotes')
    console.log(u)
    const s = u.data[0].a
    const t = u.data[0].q
    console.log(s)
    return {s,t}
}

const Quotes = ()=>{
    const [currentQuotes, setQuotes] = useState(0)
    const updateQuotes = async()=>{
        setQuotes(await getEvents())
    }
    const interval = setInterval( ()=>{updateQuotes()},3600000)
    useEffect(
        ()=>{
            updateQuotes()
            return(
                ()=>{clearInterval(interval)}
            )
        },[]
    )

    return(
        <div style ={styleSheet.div}>
        {currentQuotes.t}
        -
        {currentQuotes.s}
        </div>   
    )
}

export default Quotes