import { Activity } from '../commons/models'

import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import HandymanIcon from '@mui/icons-material/Handyman'
import PendingIcon from '@mui/icons-material/Pending'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'

interface ActivityIconProps {
  activity: Activity
}

function ActivityIcon({ activity }: ActivityIconProps) {
  if (activity === 'walking') return <DirectionsWalkIcon />
  if (activity === 'createFoobar') return <PrecisionManufacturingIcon />
  if (activity === 'mineBar' || activity === 'mineFoo') return <HandymanIcon />
  return <PendingIcon />
}

export default ActivityIcon
