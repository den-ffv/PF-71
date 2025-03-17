import { useEffect, useState } from "react"

function Project() {

    const [projectData, setProjectData] = useState([])
  
    const fatchData = async () => {
      const response = await fetch('http://localhost:4040/api/project')
      const data = await response.json()
      setProjectData(data)
      console.log(data)
    }
  
  
    useEffect(() => {
      fatchData()
    }, [])
  
    console.log(projectData);
    console.log('test');

  return (
    <>
    {projectData.map((project: any) => (
      <div style={{margin: "20px 0px"}}>
        <h2>{project.title}</h2>
        <p style={{color: 'silver', fontSize: 10}}>{project.date}</p>
        <p>{project.content}</p>
      </div>
    ))}
    </>
  )
}

export default Project