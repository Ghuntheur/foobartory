import { Route, Routes } from 'react-router-dom'

import RobotsList from '../Robot/RobotsList'
import Interface from '../Interface/Interface'
import StatsPage from '../Stats/StatsPage'

import Sidebar from './Sidebar'

import './dashboard.scss'

const RobotManagement = () => (
  <>
    <Interface />
    <RobotsList />
  </>
)

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<RobotManagement />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default Dashboard
