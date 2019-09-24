import React from 'react';
import './App.css';

import SideBar from './components/SideBar.js'
import TopBar from './components/TopBar.js'
import Footer from './components/Footer.js'
import ModalLogout from './components/ModalLogout.js'
import Routes from './routes'


function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
      <ModalLogout />
    </div>
  );
}

export default App;
