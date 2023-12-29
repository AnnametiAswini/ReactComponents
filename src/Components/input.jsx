import React from "react";
import './input.css';

const Input =() =>{
    const [email , setEmail] = React.useState("");
   const handleChange = (event) =>{
    setEmail(event.target.value);
   }
const handleSubmit = (event)=>{
    event.preventDefault()
    console.log("submitted");
};
    return (
        <div className="container" >
            <form onSubmit={handleSubmit} className="form"> 
                <input type ="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="input-field"
                />
                <button type ="submit" onClick={handleSubmit} className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Input;