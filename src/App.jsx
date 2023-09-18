import logo from './logo.svg';
import './App.css';
import { LaudspeakerProvider } from '@laudspeaker/react';
import Banner from './Banner.tsx';
//import Modal from './modal.jsx';
import React, { useRef } from 'react'

function App() {
//const modal = useRef(null);

  return (
    <LaudspeakerProvider apiKey='4dgCU9owFGJS31mCO3eMjG5oLZPm1SPD4ZLNrOJh' apiHost='https://api.laudspeaker.com'>
      <div className="App">

        

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* 
          <div>
            <button onClick = {() => modal.current.open()}> Product Tour </button>
          </div>
          <Modal ref={modal}>
	          Hello World
          </Modal>
          */}
          
          <Banner />
          <a
            className="App-link"
            href="https://laudspeaker.com/onboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Laudspeaker
          </a>
        </header>
      </div>


    </LaudspeakerProvider>
  );
}

export default App;
