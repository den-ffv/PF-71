import { useEffect, useState } from "react";
import {useParams} from "react-router";

function ExperienceOne() {
  const {id} = useParams();

      const [experiencetOneData, setExperiencetOneData] = useState({})
    
      const fatchData = async () => {
        const response = await fetch(`http://localhost:4040/api/experience/${id}`)
        const data = await response.json()
        setExperiencetOneData(data)
        console.log(data)
      }
    
    
      useEffect(() => {
        fatchData()
      }, [])
    
      console.log(experiencetOneData);
      console.log('test');


  return (
    <>
      <h2>{experiencetOneData.title} {id}</h2>
      <h4>{experiencetOneData.date_start} ------- {experiencetOneData.date_end}</h4>
      <p>
        {experiencetOneData.content}
      </p>
    </>
  )
}

export default ExperienceOne