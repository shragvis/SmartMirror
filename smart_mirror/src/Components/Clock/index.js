import React, {useState,useEffect} from 'react'; 
const styleSheet = {
    paddingLeft: "50px"
    
}
const Clock = ()=>{

    // creates a state storing the current time string
    const [currentTime,setCurrentTime] = useState(new Date()); 
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun" ];

    // setInterval runs a function (first parameter) ever 1000 (second parameter)
    const interval = setInterval( ()=>setCurrentTime(new Date()),1000); 

    // the useEffect will run when the component mounts
    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the inteval function above from being run
        }
    },[]); 

    return (<h1>{currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}/ {day[currentTime.getDay()]} {months[currentTime.getMonth()]} /{currentTime.getDate()},{currentTime.getFullYear()} </h1>); // displays the current time and date and is updated everytime currentTime is updated
};

export default Clock; 