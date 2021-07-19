import React, {useState,useEffect} from 'react';
import ListElement from './ListElement';
import axios from 'axios';
const styleSheet = {
    div: {
        paddingLeft: "50px",
        fontSize: "15px",
        fontFamily: "Rajdhani",
        position: "absolute",
        top: "100px",
        right: "100px"
    },
    top:{
        marginBottom: "0px",
    },
    bot:{
        marginTop: "0px"
    },

    box: {
        width: "250px",
        padding: "10px",
        border: "2px solid white",
        margin: "0"
    }
 }

 const TodoList = ()=>{
    const [currentEvents,setCurrentEvents]= useState([])
    const ISODateString =(d=new Date())=>{
        const pad=n=> (n<10 ? '0'+n : n);

        return (d.getUTCFullYear()+'-'
             + pad(d.getUTCMonth()+1)+'-'
             + pad(d.getUTCDate())+'T'
             + pad(d.getUTCHours())+':'
             + pad(d.getUTCMinutes())+':'
             + pad(d.getUTCSeconds())+'Z')
    }
    const getEvents = async()=>{
        const key = 'AIzaSyCFOr5Euh0KKBCf7-th7CaHtGuvv9yeq4A'
        const date = ISODateString()
        console.log(date)
        const data = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/shragvi@gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=${date}&key=${key}&maxResults=5`
            )
        console.log(data.data.items)
        const tempEvents= []
        for (let item in data.data.items){
            console.log(item)
            tempEvents.push(<ListElement content = {data.data.items[item].summary}key={item}/>)
           
        }
        console.log(tempEvents)
        setCurrentEvents(tempEvents)
    

    }
    useEffect(()=>{
        getEvents()

    }, []
    )
    return(
        <div style ={styleSheet.div}>
            
            <div style ={styleSheet.box}> 
            <h1> To-Do List  </h1>
           
            <div>
                {currentEvents}
            </div>

            </div>
        </div>
    )
}
export default TodoList