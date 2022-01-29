import { useRef, useState } from 'react'
import { useSelector, useDispatch } from '../commons/hooks'
import { Activity, Location, SpendItem } from '../commons/models'

import {
  activitiesDurations,
  activityAccordingToLocation
} from '../commons/constants'

import {
  createManufacturedElement,
  spendManufacturedElements
} from '../Inventory/Inventory.reducer'

import ActionButton from './ActionButton'
import ActionProgress from './ActionProgress'
import RobotInventory from './RobotInventory'

import { Avatar, Card, CardContent, Chip, Typography } from '@mui/material'

interface RobotItemProps {
  uuid: string
  name: string
}

function RobotItem({ name, uuid }: RobotItemProps) {
  const activity = useRef<Activity>('wait')

  const [location, setLocation] = useState<Location>('home')
  const [isWorking, setWorkingStatus] = useState(false)

  const dispatch = useDispatch()

  const work = async (type: Activity) => {
    setWorkingStatus(true)
    const newLocation = activityAccordingToLocation[type]

    if (location !== newLocation) {
      activity.current = 'walking'
      await keepBusy('walking')
      setLocation(newLocation)
    }

    activity.current = type
    await keepBusy(activity.current)
    await processActivity()
    activity.current = 'wait'

    setWorkingStatus(false)
  }

  const processActivity = async () => {
    switch (activity.current) {
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
  }

  const keepBusy = async (activity: Activity) => {
    const duration = activitiesDurations[activity]
    const amount = typeof duration === 'function' ? duration() : duration
    return new Promise(resolve => setTimeout(resolve, amount * 1000))
  }

  const mineFoo = async () => {
    dispatch(createManufacturedElement({ type: 'foos', createdBy: uuid }))
  }

  const mineBar = async () => {
    dispatch(createManufacturedElement({ type: 'bars', createdBy: uuid }))
  }

  const createFoobar = async () => {
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
    if (activity.current === 'walking') return '...'

    switch (location) {
      case 'barFactory':
        return 'Usine de bars'
      case 'fooFactory':
        return 'Usine de foos'
      case 'foobarFactory':
        return "Usine d'assemblage"
      case 'home':
      default:
        return 'Maison'
    }
  }

  const formatActivity = (): string => {
    switch (activity.current) {
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

  // const showProgress = activity.current !== 'wait'
  // console.log(showProgress, activity.current)

  // const tempDuration = activitiesDurations[activity.current]
  // const progressDuration =
  //   typeof tempDuration === 'function' ? tempDuration() : tempDuration

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
            Localisation :{location}
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
          {/* {showProgress && <ActionProgress duration={progressDuration} />} */}
        </div>
        <div className="stats"></div>
      </CardContent>
    </Card>
  )
}

export default RobotItem
