import Interface from '../Interface/Interface'
import Chrono from '../Interface/Chrono'
import NewRobotItem from '../Robot/NewRobotItem'

import './header.scss'

function Header() {
  return (
    <div className="header-container">
      <Chrono />
      <Interface />
      <NewRobotItem />
    </div>
  )
}

export default Header
