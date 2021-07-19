import React from 'react';
import Clock from '../Clock'; 
import TodoList from '../TodoList';
import Greeting from '../Greeting';
import Weather from '../Weather';
import Quotes from '../Quotes';
import Login from '../Music';

const styleSheet = {
    div: {
        backgroundColor: '#C9CAE8',
        height: "100vh",
        margin: "0"
    }
}

const MainPage = ()=> {
    
    return(
        <div style = {styleSheet.div}>
            <Clock/>
            <TodoList/>
            <Greeting/>
            <Weather/>
            <Quotes/>  
            <Login/>          
    
        </div>
    ); 
}

export default MainPage;