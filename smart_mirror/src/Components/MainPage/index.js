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
        height: "95vh",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    flex:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "0"
    
    },
    right:{
        paddingRight: "50px"
    }

}

const MainPage = ()=> {
    
    return(
        <div style = {styleSheet.div}>
            <div style = {{...styleSheet.flex}}>
            <Clock/> 
            <div style = {{paddingTop: "30px", paddingRight: "100px"}}><Greeting/></div>
            <div style = {styleSheet.right}>
            <Weather/>
            </div>
            </div>
            <div style = {styleSheet.flex}>
                <div></div>
            <div style = {{paddingTop: "100px", paddingRight: "50px"}}>
            <TodoList/>
            </div>
            </div>
            <div style = {{paddingTop: "-1000px"}}>
            <Login/>
            <div style = {{paddingTop: "10px", textAlign: "center"}}>
            <Quotes/>  
            </div>
            </div>
            
           
    
        </div>
    ); 
}

export default MainPage;