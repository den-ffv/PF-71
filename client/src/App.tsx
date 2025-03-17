import { Routes, Route } from "react-router";
import './App.css'
import Menu from "./component/Menu.tsx";
import Home from "./pages/Home.tsx";
import Thoughts from "./pages/Thoughts.tsx";
import Project from "./pages/Project.tsx";
import Thought from "./pages/Thought.tsx";
import Experience from "./pages/Experience.tsx";
import ExperienceOne from "./pages/ExperienceOne.tsx";
import Login from "./pages/Login.tsx";
import { TypeMenuItem } from "./type.ts";

const data: TypeMenuItem[] = [
  {id: 1, value: 'Home', url: '/'},
  {id: 2, value: 'Experience', url: '/experience' },
  {id: 3, value: 'Thoughts', url: '/thoughts' },
  {id: 4, value: 'Project', url: '/project'},
]

function App() {
  return (
    <div className="App">
      <Menu menuItems={data} />
      <div className='contend'>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="experience" element={<Experience/>}/>
          <Route path="experience/:id" element={<ExperienceOne/>}/>
          <Route path="thoughts" element={<Thoughts/>}/>
          <Route path="thoughts/:id" element={<Thought/>}/>
          <Route path="project" element={<Project/>}/>

          <Route path='admin' element={<Login/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
