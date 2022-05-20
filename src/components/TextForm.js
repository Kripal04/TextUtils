import React,{useState} from 'react'
export default function TextForm(props) {
  
  const handleupClick = ()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showalart("Converted into Upper case😉","success")
  }
  const handleloClick = ()=>{
    let newtext=text.toLowerCase()
    setText(newtext)
    props.showalart("Converted into Lower case😉","success")
  }
  const handleChange=(event)=>{
    setText(event.target.value)
    
  }
  const handlelReset =()=>{
    setText('')
    props.showalart("clear!start writing😉","success")
  }

  const handleCopy =()=>{
    navigator.clipboard.writeText(text);
    props.showalart("Text copied successfully ! 👌 ","success")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalart("listen!🤫","success")
  }

  const [text,setText]= useState('');
 

  return (

<>    <div className='container'>

<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" placeholder="Enter Text Here"  value={text} onChange={handleChange} id="textbox" rows="7"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleupClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowerscase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy to clipboard</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={speak}>Speak</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlelReset}>Reset</button>



    </div>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters Time to read {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Min</p>
      <h2>Preview</h2>
      <p>{text.length>1?text:"Enter the text above box to Preview here"}</p>
    </div>
    </>
  )
}
