import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alart from './components/Alart';
import About from './components/About';
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  const [mode,setmode]= useState("navbar navbar-expand-lg bg-light navbar-light");
  const [alart,setalart]= useState();
  const showalart=(message,type)=>
  {
    setalart(
      {
        mes:message,
        type:type
      }
    )
    setTimeout(()=>{
      setalart(null)
    }
    ,2000);
  }
  
  const handlemode=()=>{
    if(mode==="navbar navbar-expand-lg bg-dark navbar-dark")
    {
      document.body.style.backgroundColor = 'white';
      setmode("navbar navbar-expand-lg bg-light navbar-light");
      showalart("Light Mode is enabled💻","success")
      document.title="TextUtils/Light Mode"
      
    }
    else{
    setmode("navbar navbar-expand-lg bg-dark navbar-dark");
    document.body.style.backgroundColor = '#254378';
    showalart("Dark Mode is enabled💻","success")
    document.title="TextUtils/Dark Mode"
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} handlemode={handlemode}/>
    <Alart alart= {alart}/>
    <div className='container my-3' >
    <Routes>
    <Route path="/TextUtils" element={<TextForm heading="Enter Text below:" showalart={showalart}/>} />
    <Route path="/About" element={<About />} />
    </Routes>
    </div>



</BrowserRouter>
          
            
   
    </>
  );
}

export default App;
