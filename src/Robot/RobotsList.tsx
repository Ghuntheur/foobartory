import { useSelector } from '../commons/hooks'

import Robot from './RobotItem'

function RobotsList() {
  const robots = useSelector(state => state.inventory.robots)

  return (
    <div className="robots-list-container">
      {robots.map(robot => (
        <Robot key={robot.uuid} {...robot} />
      ))}
    </div>
  )
}

export default RobotsList
