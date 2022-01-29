import { useState } from 'react'
import { useSelector, useDispatch } from '../commons/hooks'
import {
  Activity,
  Location,
  activityAccordingToLocation,
  SpendItem
} from '../commons/models'

import {
  createManufacturedElement,
  spendManufacturedElements
} from '../Inventory/Inventory.reducer'

import { randomBetween } from 'src/commons/helpers'

import ActionButton from './ActionButton'
import RobotInventory from './RobotInventory'

import Avatar from '@mui/material/Avatar'
import { Card, CardContent, Chip, Typography } from '@mui/material'

interface RobotItemProps {
  uuid: string
  name: string
}

function RobotItem({ name, uuid }: RobotItemProps) {
  const [activity, setActivity] = useState<Activity>('wait')
  const [location, setLocation] = useState<Location>('home')
  const [isWorking, setWorkingStatus] = useState(false)

  const dispatch = useDispatch()

  const work = async (type: Activity) => {
    setWorkingStatus(true)
    const newLocation = activityAccordingToLocation[type]

    if (location !== newLocation) {
      setActivity('walking')
      await keepBusy(5)
      setLocation(newLocation)
    }

    await processActivity(type)

    setWorkingStatus(false)
  }

  const processActivity = async (type: Activity) => {
    setActivity(type)

    switch (type) {
      case 'mineFoo':
        await mineFoo()
        break
      case 'mineBar':
        await mineBar()
        break
      case 'createFoobar':
        await createFoobar()
        break
    }

    setActivity('wait')
  }

  const keepBusy = async (amount: number) => {
    return new Promise(resolve => setTimeout(resolve, amount * 10))
  }

  const mineFoo = async () => {
    await keepBusy(1)
    dispatch(createManufacturedElement({ type: 'foos', createdBy: uuid }))
  }

  const mineBar = async () => {
    const productionTime = randomBetween(0.5, 2)
    await keepBusy(productionTime)

    dispatch(createManufacturedElement({ type: 'bars', createdBy: uuid }))
  }

  const createFoobar = async () => {
    keepBusy(2)

    const success = Math.random() <= 0.6
    const elementsToSpend: SpendItem[] = [{ type: 'foos', count: 1 }]

    if (success) {
      dispatch(createManufacturedElement({ type: 'foobars', createdBy: uuid }))
      elementsToSpend.push({ type: 'bars', count: 1 })
    }

    dispatch(spendManufacturedElements(elementsToSpend))
  }

  const enoughtElementsToCreateFoobar = useSelector(state => {
    const foos = state.inventory.foos.length
    const bars = state.inventory.bars.length

    return foos > 0 && bars > 0
  })

  const formatLocation = (): string => {
    switch (location) {
      case 'barFactory':
        return 'Usine de bars'
      case 'fooFactory':
        return 'Usine de foos'
      case 'foobarFactory':
        return "Usine d'assemblage"
      case 'home':
        return activity === 'walking' ? '...' : 'Maison'
      default:
        return 'Maison'
    }
  }

  const formatActivity = (): string => {
    switch (activity) {
      case 'walking':
        return 'En déplacement'
      case 'mineBar':
        return 'Minage de foo'
      case 'mineFoo':
        return 'Minage de bar'
      case 'wait':
      default:
        return 'Repos'
    }
  }

  return (
    <Card variant="outlined" className="robot-item-container">
      <CardContent>
        <div className="identity">
          <Typography variant="h5">{name}</Typography>
          <Avatar
            src={`https://robohash.org/${name}`}
            sx={{ width: '48px', height: '48px' }}
          />
        </div>
        <div className="inventory">
          <RobotInventory uuid={uuid} />
        </div>
        <div className="activity">
          <Typography variant="subtitle2">
            Localisation :
            <Chip label={formatLocation()} size="small" />
          </Typography>

          <Typography variant="subtitle2">
            Activité :
            <Chip label={formatActivity()} size="small" />
          </Typography>
        </div>
        <div className="actions">
          <ActionButton onClick={() => work('mineFoo')} disabled={isWorking}>
            Miner foo
          </ActionButton>
          <ActionButton onClick={() => work('mineBar')} disabled={isWorking}>
            Miner bar
          </ActionButton>
          <ActionButton
            onClick={() => work('createFoobar')}
            disabled={isWorking || !enoughtElementsToCreateFoobar}
          >
            Assembler foobar
          </ActionButton>
        </div>
        <div className="stats"></div>
      </CardContent>
    </Card>
  )
}

export default RobotItem
