import { useSelector } from '../commons/hooks'

interface RobotInventoryProps {
  uuid: string
}

function RobotInventory({ uuid }: RobotInventoryProps) {
  const inventory =
    useSelector(state =>
      state.inventory.robots.find(robot => robot.uuid === uuid)
    )?.inventory || {}

  return (
    <>
      {Object.entries(inventory).map(([element, count]: [string, any]) => (
        <div key={element}>
          <h5>{element}</h5>
          <span>{count}</span>
        </div>
      ))}
    </>
  )
}

export default RobotInventory
