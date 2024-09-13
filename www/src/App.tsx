import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header.tsx";

function App() {

  return (
      <div className='wrapper'>
          <Header/>
          <Routes>
              <Route path='/user' element={<p>user11</p>} />
              <Route path='/' element={<p>home</p>} />
              <Route path='/test' element={<p>test</p>} />
          </Routes>
      </div>
  )
}

export default App
