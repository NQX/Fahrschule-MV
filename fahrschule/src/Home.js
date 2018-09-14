import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Maps from './components/Maps';
import Slides from './components/Slides';
import Features from './components/Features';
import Features2 from './components/Features2';
import Testimonias from './components/Testimonials';
import Course from './components/Course';
import Message from './components/Message';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        
        <Slides />
        <Features />
        <Features2 />
        {/* <Testimonias /> */}
        <Course />
        <Message />
        <Maps />
        {/* <News /> */}
        <Footer />
        
      </div>
    );
  }
}

export default App;
