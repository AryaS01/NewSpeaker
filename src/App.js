
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
  pageSize=8;
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <Routes>
        <Route  path="/"element={<News key='general' pageSize={this.pageSize} country="in" category="General"/>}/>
        <Route path="/business"element={<News key='business' pageSize={this.pageSize} country="in" category="Business"/>}/>
        <Route path="/entertainment"element={<News key='entertainment' pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
        <Route path="/health"element={<News key='health' pageSize={this.pageSize} country="in" category="Health"/>}/>
        <Route path="/science"element={<News key='science' pageSize={this.pageSize} country="in" category="Science"/>}/>
        <Route path="/sports"element={<News key='sports' pageSize={this.pageSize} country="in" category="Sports"/>}/>
        <Route path="/technology"element={<News key='technology' pageSize={this.pageSize} country="in" category="Technology"/>}/>
       </Routes>
       </Router>
      </div>
    )
  }
}



