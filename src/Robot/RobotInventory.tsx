import { Typography, Chip } from '@mui/material'
import { useSelector } from '../commons/hooks'
import { IRobot } from '../commons/models'

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

  const Item = ({ name, count }: ItemProps) => (
    <div>
      <Typography variant="body2">{name}</Typography>
      <Chip label={count} />
    </div>
  )

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
        <Item key={item.name} {...item} />
      ))}
    </>
  )
}

export default RobotInventory
