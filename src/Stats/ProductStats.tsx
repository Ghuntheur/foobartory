import { useMemo } from 'react'
import { useSelector } from '../commons/hooks'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { ManufacturedProduct } from '../commons/models'
import { getRanges, relativeTime } from 'src/commons/helpers'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface ProductStatProps {
  type: ManufacturedProduct
}

function ProductStats({ type }: ProductStatProps) {
  const rawDatas = useSelector(state => [
    ...state.inventory.garbage[type],
    ...state.inventory[type]
  ])

  const startAt = useSelector(state => state.chrono.startAt)
  const ellapsedTime = relativeTime()

  const ranges = getRanges(ellapsedTime)
  console.log(ranges)

  const data = useMemo(() => {
    return rawDatas.sort((a, b) => a.createdAt - b.createdAt)
  }, [rawDatas])

  console.log(data)

  return <div>ok</div>
}

export default ProductStats
