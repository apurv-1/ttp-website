import React, { lazy, Suspense } from 'react';
import './App.css';

import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
//animations
import Fade from 'react-reveal/Fade';

//components
const Home = lazy(() => import('./Components/Home'));
const Navigationbar = lazy(() => import('./Components/Navbar'));
const Programme = lazy(() => import('./Components/Programme'));
const Topics = lazy(() => import('./Components/Topics'));
const Speakers = lazy(() => import('./Components/Speakers'));
const Registrations = lazy(() => import('./Components/Registration'));
const College = lazy(() => import('./Components/College'));
const University = lazy(() => import('./Components/University'));
const Faculty = lazy(() => import('./Components/Faculty'));
const Coordinators = lazy(() => import('./Components/Coordinators'));
const Footer = lazy(() => import('./Components/Footer'));

// import Home from "./Components/Home";
// import Navigationbar from "./Components/Navbar";
// import Programme from "./Components/Programme";
// import Topics from "./Components/Topics";
// import Speakers from "./Components/Speakers";
// import Registrations from "./Components/Registration";
// import College from "./Components/College";
// import University from "./Components/University";
// import Coordinators from "./Components/Coordinators";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <ProgressBar striped animated now={100} />
            <Spinner
              animation="border"
              role="status"
              style={{
                width: '5rem',
                height: '5rem',
                position: 'fixed',
                top: '-100%',
                right: '-100%',
                left: '-100%',
                bottom: '-100%',
                margin: 'auto',
              }}
            />
          </>
        }>
        <Navigationbar />
        <Fade delay={400}>
          <Home />
        </Fade>
        <Fade delay={500}>
          <Programme />
        </Fade>
        <Fade delay={600}>
          <Topics />
        </Fade>
        <Fade>
          <Speakers />
          <Registrations />
          <College />
          <University />
          <Faculty />
          <Coordinators />
        </Fade>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
