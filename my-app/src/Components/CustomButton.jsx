import React from 'react'
import { useState } from 'react';
import "./CustomButton.css"

const CustomButton = () => {

    const [text, setText] = useState(false);

    const toggleText = () => {

        setText(current => !current);
    };
    const toggleWarnMessage = () => {
       alert("Warning!")
       let mess = document.querySelector('.warning').style.color = "red";
 
    };
    const toggleHint = () => {
        let hover = document.querySelector(".hover").innerHTML = "Heyatda ugurlar!";
        
    };
    const toggleHint2 = () => {
        let hover = document.querySelector(".hover").innerHTML = "";
    };
    return (

        <div>
            <button onClick={toggleText}>Text</button>
            {text && <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dicta!</h2>}
            <br />
            <br />
            <button className="warning" onClick={toggleWarnMessage}>warnMessage</button>
            <br />
            <br />
            <button onMouseOver={toggleHint} onMouseLeave={toggleHint2}>hint</button>
            <h2 className='hover'></h2>
        </div>

    )
}

export default CustomButton




