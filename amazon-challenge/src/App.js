
import { Checkbox } from '@mui/material';
import './App.css';
import Home from './Home';
import Header from "./Header";
import Payment from "./Payment"
import { BrowserRouter as Router,Outlet,  Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51O71w1GORs4nLlbGzFjEX6PVjqwRCAif5IDevFFHnfush0G5YSgEgGgIrTdOKTW5zTDeqQAzLUP18OPYyT5k3Jxw00rFt4FiOm');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("This is the user >>>>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
