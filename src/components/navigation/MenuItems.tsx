import '../../shared/global/css/Global.css'

export const MenuItems = (props: { menuItem: string, onclick: any }) => {
  return (
    <li className='menu-item' onClick={props.onclick}>{props.menuItem}</li>

  )
}
