import {NavLink} from "react-router";

function Experience() {
  return (
    <>
      <h2>Experience</h2>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <NavLink to={'/experience/1'}>Apple..........................................Sep.2026</NavLink>
        <NavLink to={'/experience/2'}>Google.........................................Sep.2026</NavLink>
        <NavLink to={'/experience/3'}>Meta...........................................Sep.2026</NavLink>
        <NavLink to={'/experience/4'}>SDE-Group......................................Sep.2026</NavLink>
      </div>
    </>
  )
}

export default Experience