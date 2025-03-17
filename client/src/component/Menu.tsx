import { MenuProps, TypeMenuItem } from '../type';
import './Menu.css'
import { NavLink } from "react-router";



function Menu({menuItems}:MenuProps): JSX.Element {
  return (
    <nav className='menu'>
      {menuItems.map((menuItem: TypeMenuItem) => (
        <NavLink to={menuItem.url} key={menuItem.id}>{menuItem.value}</NavLink>
      ))}
    </nav>
  )
}

export default Menu