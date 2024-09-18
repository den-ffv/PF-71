import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Notes from "./pages/Notes.tsx";
import Works from "./pages/Works.tsx";


import Header from "./components/Header.tsx";

function App() {

  return (
      <div className='wrapper'>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/works' element={<Works/>} />
              <Route path='/notes' element={<Notes/>} />
          </Routes>
      </div>
  )
}

export default App
