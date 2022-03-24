import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Sort from './Sort/Sort'
import UserBlockComp from './UserBlock/UserBlockComp'
import UserListComp from './UserList/UserListComp'

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '15vw 85vw',
        fontSize: 'calc(1vh + 1vw)',
      }}
    >
      <Sort></Sort>
      <Routes>
        <Route path='/' element={<UserListComp />} />
        <Route path='/user/:id' element={<UserBlockComp />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
