import React, { Component } from 'react';

import './Assets/css/default.min.css';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal/lib/css';

import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Footer from './components/footerComponent/footer';
import FooterSub from './components/footerComponent/footerSub.js';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        
        <Header />
        <Homepage />
        <Footer />
        <FooterSub />

      </div>
    );
  }
}

export default App;
