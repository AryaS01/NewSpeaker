
import './App.css';
import React, { Component } from 'react'
import { Navbar } from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <Routes>
        <Route  path="/general"element={<News key='general' pageSize={8} country="in" category="General"/>}/>
        <Route path="/business"element={<News key='business' pageSize={8} country="in" category="Business"/>}/>
        <Route path="/entertainment"element={<News key='entertainment' pageSize={8} country="in" category="Entertainment"/>}/>
        <Route path="/health"element={<News key='health' pageSize={8} country="in" category="Health"/>}/>
        <Route path="/science"element={<News key='science' pageSize={8} country="in" category="Science"/>}/>
        <Route path="/sports"element={<News key='sports' pageSize={8} country="in" category="Sports"/>}/>
        <Route path="/technology"element={<News key='technology' pageSize={8} country="in" category="Technology"/>}/>
       </Routes>
       </Router>
      </div>
    )
  }
}



