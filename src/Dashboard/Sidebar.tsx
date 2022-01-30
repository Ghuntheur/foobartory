import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'

import './sidebar.scss'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Typography variant="h4" className="title">
        Foobartory
      </Typography>

      <ul className="links-container">
        <li>
          <NavLink to="/">
            <Typography variant="button">Robots</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats">
            <Typography variant="button">Statistiques</Typography>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
