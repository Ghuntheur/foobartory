import { Route, Routes } from 'react-router-dom'

import StatsPage from '../Stats/StatsPage'
import Header from './Header'
import Sidebar from './Sidebar'
import RulesPage from './RulesPage'
import RobotsList from '../Robot/RobotsList'

import './dashboard.scss'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="main">
        <Header />

        <div className="router">
          <Routes>
            <Route path="/" element={<RobotsList />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/regles" element={<RulesPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
