import React, { useState } from 'react'
// let et = prompt("Please enter your et");

export default function TextForm(props) {

    const handlerUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Successfully to UpperCase", "success")
        // console.log("UpperCase was Clicked" + text);
    }

    const handlerlowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Successfully to LowerCase", "warning")
        // console.log("UpperCase was Clicked" + text);
    }

    const handlerclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }


    const handlerCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy To Clicpboard!", "secondary")
    }

    const handlerSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Remove!", "danger")
    }

    const handlerOnChange = (event) => {
        setText(event.target.value);
        // console.log("Onchange was Clicked"); 
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="myBox">
                        {/* {et} */}
                        {/* Example Textarea */}
                    </label>
                    <textarea className='form-control border border-primary' value={text} onChange={handlerOnChange} row="9" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button type="submit" onClick={handlerUpClick} className="btn btn-primary mx-2">
                    Covert to UpCase
                </button>
                <button type="submit" onClick={handlerlowerClick} className="btn btn-warning mx-4">
                    Covert to LowerCase
                </button>
                <button type="submit" onClick={handlerCopy} className="btn btn-secondary mx-2">
                    Copy
                </button>
                <button type="submit" onClick={handlerSpace} className="btn btn-danger mx-2">
                    Remove  Extra Space
                </button>
                <button type="submit" onClick={handlerclearClick} className="btn btn-success mx-2">
                    Clear
                </button>

            </div >
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Simmary</h1>
                <p>{text.split("").length} and wrong Characters  {text.length}</p>
                <p>{0.008 * text.split("").length} Minute Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the Box above to Preview it here"}</p>
            </div>
        </>
    )
}
