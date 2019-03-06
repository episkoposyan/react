import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";

const App = () => {
    return (
      <div className="App">
          <Header />
          <Aside />
          <Main />
          <Footer />
      </div>
    );
};

export default App;
