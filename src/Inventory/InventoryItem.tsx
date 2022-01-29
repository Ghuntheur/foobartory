import { useSelector } from '../commons/hooks'
import { ManufacturedProduct } from '../commons/models'

interface InventoryItemProps {
  name: ManufacturedProduct
}

function InventoryItem({ name }: InventoryItemProps) {
  const count = useSelector(state => state.inventory[name].length)

  return (
    <div className="inventory-item-container">
      <h5>{name}</h5>
      <span>{count}</span>
    </div>
  )
}

export default InventoryItem
