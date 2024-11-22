// import Routes, Route from react-router-dom library
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'

// take in all the pages
// Aside: if didn't export function as default -- need to destructure within file where it's being imported
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

import Animations from './pages/Animations.jsx';
import Name_Ani from './pages/Name_Ani.jsx';
import Literary_Works from './pages/Literary_Works.jsx';
import Title_LW from './pages/Title_LW.jsx';

// bring in navigation links to App.jsx rather than individual pages (more efficient & App.jsx is the brain of the operation)
import NavBar from './components/NavBar.jsx';

function App() {

  // const [drama, setDrama] = useState(null); // for later 3rd party API use
  console.log(import.meta.env.VITE_apiKey);

  // const url = `` // for API URL later

  return (
    // functional components outside of <Routes> components DN change per page, each Route/page may change
    <>
    {/* Note: <NavBar /> component is OUTSIDE of <Routes> */}
      <NavBar />
      {/* <Routes> will only contain <Route> which has attributes of path & element (value = functional component) */}
      <Routes>
        {/* Order routes from most specific to vague */}
        <Route path='/' element={<Home />} />
        <Route path='/animations/animation/:id' element={<Name_Ani />} />
        <Route path='/literary_works/literary_work/:id' element={<Title_LW />} />
        <Route path='/animations' element={<Animations />} />
        <Route path='/literary_works' element={<Literary_Works />} />
        <Route path='/about' element={<About />} />
        
        {/* catch all route for any unforeseen URL paths (should be last in order otw may interfere w/ other routes) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>Started from the bottom now we here</footer>
    </>
  )
}

export default App
