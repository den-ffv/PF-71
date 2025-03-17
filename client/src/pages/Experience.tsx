import { useEffect, useState } from "react";
import {NavLink} from "react-router";

function Experience() {

    const [experiencetData, setExperiencetData] = useState([])
  
    const fatchData = async () => {
      const response = await fetch('http://localhost:4040/api/experience')
      const data = await response.json()
      setExperiencetData(data)
      console.log(data)
    }
  
  
    useEffect(() => {
      fatchData()
    }, [])
  
    console.log(experiencetData);
    console.log('test');

  return (
    <>
      <h2>Experience</h2>
      {experiencetData.map((experience: any) => (
        <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <NavLink to={`/experience/${experience.id}`}>{experience.title}..........................................{experience.date_start}</NavLink>
        </div>
        </>
      ))}
    </>
  )
}

export default Experience