
import './App.css';
import React,{useState} from 'react'
import  Navbar  from './Components/Navbar';
import News from './Components/News';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
 const pageSize=8;
 const apiKey=process.env.REACT_APP_NEWS_API;
 const[progress,setProgress]=useState(0)

    return (
      <>
      <div>
        <Router>
       <Navbar/>
       < div className="container">
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
      </div>
       <Routes>
        <Route  path="/"element={<News setProgress={setProgress} apiKey={apiKey}   key='general' pageSize={pageSize} country="in" category="General"/>}/>
        <Route path="/business"element={<News setProgress={setProgress} apiKey={apiKey}   key='business' pageSize={pageSize} country="in" category="Business"/>}/>
        <Route path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey}   key='entertainment' pageSize={pageSize} country="in" category="Entertainment"/>}/>
        <Route path="/health"element={<News setProgress={setProgress}  apiKey={apiKey}  key='health' pageSize={pageSize} country="in" category="Health"/>}/>
        <Route path="/science"element={<News setProgress={setProgress}  apiKey={apiKey}  key='science' pageSize={pageSize} country="in" category="Science"/>}/>
        <Route path="/sports"element={<News setProgress={setProgress}  apiKey={apiKey}  key='sports' pageSize={pageSize} country="in" category="Sports"/>}/>
        <Route path="/technology"element={<News setProgress={setProgress}apiKey={apiKey}key='technology' pageSize={pageSize} country="in" category="Technology"/>}/>
       </Routes>
       </Router>
       
      </div>
      </>
    )
  
}


export default App
