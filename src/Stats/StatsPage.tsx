import ProductionsStats from './ProductionStats'
import RobotStats from './RobotsStats'
import StatContainer from './StatContainer'

import './stats-page.scss'

function StatsPage() {
  return (
    <div className="stats-page-container">
      <StatContainer title="Production totale">
        <ProductionsStats />
      </StatContainer>

      <StatContainer title="Production par robots">
        <RobotStats />
      </StatContainer>
    </div>
  )
}

export default StatsPage
