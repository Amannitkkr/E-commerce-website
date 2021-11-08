
import './App.css';
import Header from './header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' ;
import Login from './login';
import Home from './Home';
import Products from './Products';
import React from 'react';
import Checkout from './Checkout';







function App() {
  return (
    
    <Router>
    <div className="App">
      <Header/>
      </div>
      <Routes> 
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/checkout" element={<Checkout/>}/>

      
      
        
        
      
        
      

      
      
      
      
      
      
      </Routes>
      
    
    
    
    </Router>
    
  );
}

export default App;
