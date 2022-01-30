import { useSelector } from '../commons/hooks'

import Robot from './RobotItem'

import './robots-list.scss'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

function RobotsList() {
  const robots = useSelector(state => state.inventory.robots)

  const isEnd = robots.length === 4

  return isEnd ? (
    <div>
      <Typography>Bravo ! Vous avez fini !</Typography>
      <NavLink to="/stats">Voir les stats</NavLink>
    </div>
  ) : (
    <div className="robots-list-container">
      <div className="new-robot-container"></div>

      <div className="list">
        {robots.map(robot => (
          <Robot key={robot.uuid} {...robot} />
        ))}
      </div>
    </div>
  )
}

export default RobotsList
