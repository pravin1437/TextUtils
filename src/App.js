import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const Toggle = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = '#0c0d21';
      document.body.style.color = "white";
      document.title = 'TextUtils - Dark Mode';
      showAlert("Dark Mode has been enabled", 'success')
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      document.title = 'TextUtils - Light Mode';
      showAlert("Light Mode has been enabled", 'success');
    }
  }
  return (
    <>
        <Navbar title="My TextUtils" mode={mode} toggle={Toggle} />
        <Alert alert={alert} />
        <div className="container">
        <Textform showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />
        {/* <About/> */}
        </div>
    </>
  );
}

export default App;