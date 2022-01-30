import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <Typography variant="h4">Foobartory</Typography>

      <ul className="links-container">
        <li>
          <NavLink to="/">Robots</NavLink>
        </li>
        <li>
          <NavLink to="/stats">Statistiques</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
