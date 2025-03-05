import './Menu.css'
import { NavLink } from "react-router";


type TypeMenuItem = {
  id: number
  value: string,
  url: string,
}
function Menu({menuItems}:TypeMenuItem[]): JSX.Element {
  return (
    <ul className='menu'>
      {menuItems.map((menuItem: TypeMenuItem) => (
        <NavLink to={menuItem.url} key={menuItem.id}>{menuItem.value}</NavLink>
      ))}
    </ul>
  )
}

export default Menu
