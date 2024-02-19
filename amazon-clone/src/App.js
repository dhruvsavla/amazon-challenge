
import { Checkbox } from '@mui/material';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    // <Router>
    <div className="App">
      <Header/>
      <Checkout />
      
      
    </div>
   
  );
}

export default App;
