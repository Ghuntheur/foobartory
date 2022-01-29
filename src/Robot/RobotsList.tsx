import { useSelector } from '../commons/hooks'

import Robot from './RobotItem'
import NewRobotItem from './NewRobotItem'

function RobotsList() {
  const robots = useSelector(state => state.inventory.robots)

  return (
    <div className="robots-list-container">
      {robots.map(robot => (
        <Robot key={robot.uuid} {...robot} />
      ))}

      <NewRobotItem />
    </div>
  )
}

export default RobotsList
