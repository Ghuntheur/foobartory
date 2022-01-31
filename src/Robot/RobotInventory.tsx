import { useSelector } from '../commons/hooks'
import { IRobot } from '../commons/models'
import InventoryItem from '../Inventory/InventoryItem'

interface RobotInventoryProps {
  uuid: string
}

interface ItemProps {
  name: string
  count: number
}

function RobotInventory({ uuid }: RobotInventoryProps) {
  const inventory =
    useSelector(state =>
      state.inventory.robots.find((robot: IRobot) => robot.uuid === uuid)
    )?.inventory || {}

  const elements: ItemProps[] = Object.entries(inventory).reduce(
    (acc: ItemProps[], [name, count]: [string, any]) => {
      if (['foos', 'bars', 'foobars'].includes(name)) {
        acc.push({ name, count: count || 0 })
      }

      return acc
    },
    []
  )

  return (
    <>
      {elements.map(item => (
        <InventoryItem isRobot={true} {...item} />
      ))}
    </>
  )
}

export default RobotInventory
