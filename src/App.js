import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";

function App() {

  const [{ user }, dispatch] = useStateValue();

  // A piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in.
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logged out.
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any cleanup operations go in here.
      unsubscribe();
    }
  }, []);

  console.log('USER is >>>>', user);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            } />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            } />
          <Route
            path="/login"
            element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
