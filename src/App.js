import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Slogan from "./Components/Slogan/Slogan";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="portfolioWrap">
<Header/>
<Main/>
<Skills/>
<Projects/>
<Slogan/>
<Contacts/>
<Footer/>
      </div>
    </div>
  );
}

export default App;
