import { useSelector } from '../commons/hooks'

import Robot from './RobotItem'
import NewRobotItem from './NewRobotItem'

import './robots-list.scss'

function RobotsList() {
  const robots = useSelector(state => state.inventory.robots)

  return (
    <div className="robots-list-container">
      <div className="list">
        {robots.map(robot => (
          <Robot key={robot.uuid} {...robot} />
        ))}
      </div>

      <NewRobotItem />
    </div>
  )
}

export default RobotsList
