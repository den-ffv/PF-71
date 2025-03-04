import { Routes, Route } from "react-router";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<p>Home</p>} />
        <Route path="about" element={<p>About</p>}/>

        <Route path='auth' element={<p>LAST home</p>}>
          <Route path="login" element={<p>login</p>}/>
          <Route path="register" element={<p>register</p>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
