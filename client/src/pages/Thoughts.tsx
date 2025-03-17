import { useEffect, useState } from "react";
import {NavLink} from "react-router";

function Thoughts() {

  const [thoughtsData, setThoughtsData] = useState([])
  
  const fatchData = async () => {
    const response = await fetch('http://localhost:4040/api/thoughts')
    const data = await response.json()
    setThoughtsData(data)
    console.log(data)
  }

  useEffect(() => {
    fatchData()
  }, [])

  console.log(thoughtsData);
  console.log('thoughts test');

  return (
    <>
      <h2>Thoughts</h2>
      {thoughtsData.map((thought: any) => (
        <div key={thought.id}>
          <NavLink to={`/thoughts/${thought.id}`} >
            <p>{thought.title}...........................{thought.id}</p>
          </NavLink>
        </div>
      ))}
    </>
  )
}

export default Thoughts