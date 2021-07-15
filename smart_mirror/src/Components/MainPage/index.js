import React from 'react';
import Clock from '../Clock'; 
import TodoList from '../TodoList';
import Greeting from '../Greeting';
import Weather from '../Weather';
import Quotes from '../Quotes';
import Login from '../Music';



const MainPage = ()=> {
    
    return(
        <div>
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