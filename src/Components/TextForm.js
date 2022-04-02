import React, {useState} from 'react'


export default function TextForm(props) {


    const handelUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.","success");
    }
    const handelDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.","success");

    }
  
    const handelOnchange = (event)=>{
      
        setText(event.target.value)
    }

    const handel = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("The textbox is cleared.","success");

    }


    const handelCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success");

    }

    const handelExtraspaces = ()=> {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces cleared","success");

    }
    const [text, setText] = useState(' ');
const wlen = text.split(" ").length-1;
const clen = text.length;
const tclen = clen-wlen;
  return (
      <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='text-center' >{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnchange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} ></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handelUpClick}>UPPERCASE</button>
<button className="btn btn-primary mx-2" onClick={handelDownClick} >lowercase</button>
<button className="btn btn-primary mx-2" onClick={handel} >Clear</button>
<button className="btn btn-primary mx-2" onClick={handelCopy} >Copy</button>
<button className="btn btn-primary mx-2" onClick={handelExtraspaces} >Remove Extra spaces</button>

    </div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary.</h2>
    <p>{wlen} words and {tclen}.</p>
    <p>{0.008 * wlen} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to Preview"} </p>
</div>
    </>
  )
}

