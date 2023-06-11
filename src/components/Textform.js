import React, { useState } from 'react'

export default function TextForm(props) {
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handleonUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleonloclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleonclearclick = () => {
        let newText =('');
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const [text, setText] = useState("");
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
            </div>
            <button className=" btn btn-primary mx-3" onClick={handleonUpclick}>Convert to UpperCase</button>
            <button className=" btn btn-primary mx-3" onClick={handleonloclick}>Convert to LowerCase</button>
            <button className=" btn btn-primary mx-3" onClick={handleonclearclick}>Clear Text</button>
        </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.08 * text.split(" ").length} minutes read </p>
                <h2>Preview</h2>
                <b>{text}</b>
            </div>
            </>
    )
}
