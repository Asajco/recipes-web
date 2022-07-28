import './App.css';
import {useState, useEffect} from 'react'
import Card from './components/Card';
import Search from './components/Search';



function App() {


  return (
    <div className="app">
        <Search/>
        {/* <Card/> */}
    </div>
  );
}

export default App;
