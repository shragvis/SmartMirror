import React, {useState} from 'react'; 
const styleSheet = {
    div: {
        paddingLeft: "50px",
        fontSize: "20px",
        fontFamily: "Rajdhani",
        position: "absolute",
        top: "100px",
        left: "540px"
    },
    top:{
        marginBottom: "0px",
    },
    bot:{
        marginTop: "0px"
    }
    
}
const Greeting = ()=>{
    const [name,setName] = useState("Shragvi!");  // this is a state storing the user's name
    const [promptOpen,setPromptOpen] = useState(false); // this is a state that is false if the prompt is closed and true if the prompted is open
    const [inputValue, setInputValue] = useState("");  // this keeps track of the user inputted value of the prompt

    const clickHandler = e =>{ // runs when the user right clicks to set a new name
        e.preventDefault(); // stops a default action from running (if there is one )
        setPromptOpen(true); // opens the prompt

    }
    // runs when the submit button is clicked
    const buttonSubmit = ()=>{
        setPromptOpen(false); 
        setName(inputValue);
        setInputValue(""); 
    }

    // updates the input value
    const onChange = ({target: {value}})=>{ // {target: {value}} would be the same thing as writting e (short for event) 
        setInputValue(value);  // and then using e.target.value here but this is generally better practice
    } // this is called object destructuring

    return (
        <div style = {styleSheet.div}>
            <h1>Hello <span onContextMenu={clickHandler}> {name} </span></h1> 
            {/*this will only render what is in the "{}" when promptOpen is true*/}
            { promptOpen && <div>
                <input type="text" placeHolder="Input your name here" value={inputValue} onChange={onChange}/>
                <button onClick={buttonSubmit}>Submit</button>
            </div>
            }
        </div>
    );

}

export default Greeting;