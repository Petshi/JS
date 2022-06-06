import React from "react"
import './App.css';
import { Header } from './ui/Header';

const SearchContext = React.createContext("");

function App() {
  return (
    <SearchContext>
       <div className="App">
          <Header/>
      </div>
    </SearchContext>
  );
}

export default App;
