import '../../shared/global/css/Global.css'
import { menuItems } from './data/menu-items-data'

export const MenuItems = () => {
  return (
    <div>
      <ul className='font-black'>
        <li className='menu-item'>{menuItems.menuItem1}</li>
        <li className='menu-item'>{menuItems.menuItem2}</li>
        <li className='menu-item'>{menuItems.menuItem3}</li>
        <li className='menu-item'>{menuItems.menuItem4}</li>
        <li className='menu-item'>{menuItems.menuItem5}</li>
        <li className='menu-item'>{menuItems.menuItem6}</li>
      </ul>
    </div>
  )
}
