import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Nav from "./components/Nav";
import Home from './components/Home';
import Budget from "./components/Budget";
import PlanBudget from "./components/PlanBudget";

function App() {
  return (
      <Router>
          <div>
              <Nav></Nav>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/budget" element={<Budget/>}/>
                      {/*<Route path="/plan-budget" element={<PlanBudget />} />*/}
                  <Route path="/taxes" element={<Budget/>}/>
              </Routes>
          </div>

      </Router>
  );
}

export default App;
