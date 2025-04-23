import React from 'react';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePages from './components/pageConent/HomePages';
import './App.css';

function App() {
  return (

    <Router>
      <Header />
        <Route path='/' exact component= {HomePages} />
    </Router>
  );

}

export default App;