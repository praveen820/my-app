import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [Mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null)

 const showAlert = (message , type) =>{
   setAlert({
     msg: message,
     type: type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
 }
  const toggleMode = () => {
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#071f43';
      showAlert("Dark mode has been enabled" , "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled" , "success");
    }
  }
  return (
    <>
    
      <Navbar title="Textchanger" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
       <TextForm showAlert={showAlert} heading="Enter the text area below" mode={Mode} />
      </div>
       
    </>
  );
}


export default App;
