import React from 'react'
import Help from './Help'
import Activity from './Activity'
import Settings from './Settings'
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <nav>
        <Route path="Help" element={<Help/>}/>
        <Route path="Activity" element={<Activity/>}/>
        <Route path="Settings" element={<Settings/>}/>
        <Route path="*" element={<NotFound/>}/>
        </nav>
      </Routes>
    </div>
  )
}

export default MainRouter
