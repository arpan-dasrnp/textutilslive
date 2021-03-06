import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from "react";
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode enabled", "Success");
      // document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "Success");
      // document.title = 'TextUtils - LightMode';
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} />
    <div className="container my-3">
    <Switch>
          <Route exact path="/" component={TextForm} >
            <TextForm showAlert={showAlert} heading="Enter the text below to analyse" mode={mode}/>
          </Route>
          <Route exact path="/about" component={About} >
            <About mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
