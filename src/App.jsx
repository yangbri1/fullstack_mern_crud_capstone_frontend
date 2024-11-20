import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

// take in all the pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

import Animations from './pages/Animations.jsx';
// Aside: if didn't export function as default -- need to destructure within file where it's being imported
import { Literary_Works } from './pages/Literary_Works.jsx';

// bring in navigation links to App.jsx rather than individual pages (more efficient & App.jsx is the brain of the operation)
import NavBar from './components/NavBar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    // functional components outside of <Routes> components DN change per page, each Route/page may change
    <>
    {/* Note: <NavBar /> component is OUTSIDE of <Routes> */}
      <NavBar />
      {/* Routes will always be a container for route (can only have route) */}
      {/* Route CANNOT exist outside of Routes (can be self-closing & each rep a dif URL path) */}
      {/* Every Route component has 2 attributes "path" and "element" */}
      {/* Route's attribute "element" must of a <functional component /> */}
      <Routes>
        {/* Order routes from most specific to vague */}
        <Route path='/' element={<Home />} />
        <Route path='/animations' element={<Animations />} />
        <Route path='/literary_works' element={<Literary_Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/animations/animation/:name' element={<Animations />}></Route>
        {/* catch all route for any unforeseen URL paths (should be last in order otw may interfere w/ other routes) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>Started from the bottom now we here</footer>
    </>
  )
}

export default App
