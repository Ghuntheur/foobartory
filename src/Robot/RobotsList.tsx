import { useSelector } from '../commons/hooks'
import { IRobot } from '../commons/models'

import RobotItem from './RobotItem'
import End from '../Hud/End'
import NewRobotItem from '../Robot/NewRobotItem'

import './robots-list.scss'

function RobotsList() {
  const robots = useSelector(state => state.inventory.robots)

  const isEnd = robots.length === 20

  return isEnd ? (
    <End />
  ) : (
    <div className="robots-list-container">
      <div className="new-robot-container">
        <NewRobotItem />
      </div>

      <div className="list">
        {robots.map((robot: IRobot) => (
          <RobotItem key={robot.uuid} {...robot} />
        ))}
      </div>
    </div>
  )
}

export default RobotsList
