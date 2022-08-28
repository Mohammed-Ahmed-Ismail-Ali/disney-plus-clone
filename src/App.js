import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="" element={<Home/>} />
          <Route path="/index.html" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
