// import LandingPage from '../components/LandingPage';
// <LandingPage/>
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import redefineVH from '../styles/shared/resizeVH';

library.add(fab, faPinterestSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare)

function App() {
  redefineVH();

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
