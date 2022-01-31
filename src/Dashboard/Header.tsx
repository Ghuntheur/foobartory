import Hud from '../Hud/Hud'
import Chrono from '../Hud/Chrono'

import './header.scss'

function Header() {
  return (
    <div className="header-container">
      <Chrono />
      <Hud />
    </div>
  )
}

export default Header
