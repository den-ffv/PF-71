import {NavLink} from "react-router";

const data = [
  {id: 1, title: 'One', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},
  {id: 2, title: 'Two', text: 'Lorem Ipsum is simply dummy text oy. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},
  {id: 3, title: 'Three', text: 'Lorem Ipsum is simply ds been the industry\'s standard dummy text ever since the 1500s'},
  {id: 4, title: 'Fore', text: 'Lorem Ipsum is simply dummy text of the printins been the industry\'s standard dummy text ever since the 1500s'},
];
function Thoughts() {

  return (
    <>
      <h2>Thoughts</h2>
      {data.map((item) => (
        <div key={item.id}>
          <NavLink to={`/thoughts/${item.id}`} >
            <p>{item.title}...........................{item.id}</p>
          </NavLink>
        </div>
      ))}
    </>
  )
}

export default Thoughts