import RobotsList from '../Robot/RobotsList'
import Interface from '../Interface/Interface'

import './dashboard.scss'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar-container">A gauche</aside>
      <main className="main-container">
        <Interface />

        <RobotsList />
      </main>
    </div>
  )
}

export default Dashboard
