import Interface from '../Interface/Interface'
import Chrono from '../Interface/Chrono'

import './header.scss'

function Header() {
  return (
    <div className="header-container">
      <Chrono />
      <Interface />
    </div>
  )
}

export default Header
