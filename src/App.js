
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';


function App() {

  const [mode, setMode] = useState('light');// wheather dark mode is enable or not //state variable  

  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type:type,
  })

  setTimeout(() => {
    setAlert(null);
  }, 1000);
}

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled","success");
   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled.","success.");

    }
  }

  return (
   <>
<Navbar title="TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert = {alert} />
{/* <Navbar /> */}
<div className="container my-3">
<TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />
{/* <About/> */}

</div>
   </>
  );
}

export default App;
