
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const toggleMode = ()=>{
    if(mode==="light"){
     setMode('dark');
     document.body.style.backgroundColor="#191F22"
    
    } else{
      setMode('light');
      document.body.style.backgroundColor="white"  
   
    }
  }

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 900);
}


// function for custum theme
  // const customTheme = (cls)=>{
  //   if(cls==="black"){
  //    setMode('dark');
  //    document.body.style.backgroundColor="#1b191e"
  //   } 
  //   else if(cls==="blue"){
  //     setMode('dark');
  //     document.body.style.backgroundColor="#0e1726"
  //   }
  //   else{
  //     setMode('dark');
  //     document.body.style.backgroundColor="#141116"
  //   }
  // }


  return (
   <>
   <Navbar title={"TextUtils"} mode={mode}  toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm mode={mode}  showAlert={showAlert} />
   {/* <About/> */}

   </div>

   
   </>
  );
}

export default App;
