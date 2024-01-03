import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Nav from "./components/Nav";
import Home from './components/Home';
import BudgetPage from "./components/Budget/BudgetPage";
import Taxes from "./components/Taxes";

function App() {
  return (
      <Router>
          <div>
              <Nav></Nav>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/budget" element={<BudgetPage/>}/>
                  <Route path="/taxes" element={<Taxes/>}/>
              </Routes>
          </div>

      </Router>
  );
}

export default App;
