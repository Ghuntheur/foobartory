import { Route, Routes } from 'react-router-dom'

import StatsPage from '../Stats/StatsPage'
import Header from './Header'
import Sidebar from './Sidebar'
import RobotsList from 'src/Robot/RobotsList'

import './dashboard.scss'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>
      <main className="main-container">
        <Header />

        <div className="router-container">
          <Routes>
            <Route path="/" element={<RobotsList />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
