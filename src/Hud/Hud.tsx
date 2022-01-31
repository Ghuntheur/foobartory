import InventoryItem from '../Inventory/InventoryItem'
import { ManufacturedProduct } from '../commons/models'
import { RootState } from '../App/app.store'

import { useSelector } from '../commons/hooks'

import './hud.scss'

function Hud() {
  const getCount = (store: RootState, name: ManufacturedProduct | 'robots') => {
    const value = store.inventory[name]
    return Array.isArray(value) ? value.length : value
  }

  const percentFoobarsSuccess = useSelector(state => {
    const failed = state.inventory.foobarsAttemptsFailed
    const all = state.inventory.foobarsAttempts

    if (all === 0) {
      return 0
    }

    return failed === 0 ? 100 : 100 - Math.round((failed / all) * 100)
  })

  return (
    <div className="hud-container">
      <InventoryItem
        name="foos"
        count={useSelector(state => getCount(state, 'foos'))}
      />
      <InventoryItem
        name="bars"
        count={useSelector(state => getCount(state, 'bars'))}
      />
      <InventoryItem
        name="foobars"
        count={useSelector(state => getCount(state, 'foobars'))}
      />
      <InventoryItem name="% success" count={percentFoobarsSuccess} />
      <InventoryItem
        name="robots"
        count={useSelector(state => getCount(state, 'robots'))}
      />
    </div>
  )
}

export default Hud
