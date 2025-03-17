import { useEffect, useState } from "react";
import {useParams} from "react-router";


function Thought() {
  const { id} = useParams();


  const [thoughtsData, setThoughtsData] = useState([])
  
  const fatchData = async () => {
    const response = await fetch(`http://localhost:4040/api/thoughts/${id}`)
    const data = await response.json()
    setThoughtsData(data)
    console.log(data)
  }


  useEffect(() => {
    fatchData()
  }, [])

  console.log(thoughtsData);
  console.log('thoughts test');

  console.log(id)
  return (
    <div>
      <h1>{thoughtsData.title} {id}</h1>
      <p>{thoughtsData.content}</p>
    </div>
  );
}

export default Thought