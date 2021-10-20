import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        setText(praveen => praveen.toUpperCase())
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        //console.log("Uppercase was clicked");
        setText(praveen => praveen.toLowerCase())
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        //console.log("Uppercase was clicked");
        let newText = ''
        setText(newText)
        props.showAlert("Clear text!", "success");
    }

    const handleOnchange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert(" Copid Text!", "success");

    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Remove ExtraSpaces!", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="conatainer" style={{color: props.mode==='dark'?'white':'#071f43'}}>
                <h1>{props.heading}  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'lightblue':'white' , color: props.mode==='dark'?'white':'#071f43'}} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase </button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase </button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick} >clear Text </button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>handleExtraSpaces</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'#071f43'}}>
                <h2>your text summery</h2>
                <p>{text.split(" ").length} words and {text.length[" "]} characters </p>
                <p>{0.008 * text.split(" ").length} Munits read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}













 //<span id ="charcountWords">words</span> ==$0
 //<p>{text.split(" ").length} words and {text.length [" "]} characters </p>