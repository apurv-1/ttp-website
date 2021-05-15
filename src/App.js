import React from 'react';
import Home from './Components/Home';
import Navigationbar from './Components/Navbar';
import Programme from './Components/Programme';
import Topics from './Components/Topics';
import Speakers from './Components/Speakers';
import Registrations from './Components/Registration';
import College from './Components/College';
import University from './Components/University';
import Coordinators from './Components/Coordinators';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigationbar />
      <Home />
      <Programme />
      <Topics />
      <Speakers />
      <Registrations />
      <College />
      <University />
      <Coordinators />
      <Footer />
    </div>
  );
}

export default App;
