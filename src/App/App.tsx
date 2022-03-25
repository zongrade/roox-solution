import React, { Dispatch, SetStateAction, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Sort from './Sort/Sort'
import UserBlockComp from './UserBlock/UserBlockComp'
import UserListComp, { userRequest } from './UserList/UserListComp'

const App = () => {
  const [first, setfirst]: [
    userRequest,
    Dispatch<SetStateAction<userRequest>>
  ] = useState(checkData())
  function checkData(): any[] {
    if (
      localStorage.getItem('users') &&
      localStorage.getItem('userDate') &&
      JSON.parse(localStorage.getItem('userDate') || '0') - Date.now() < 3.6e6
    )
      return JSON.parse(localStorage.getItem('users') || '[]')
    return []
  }
  function setSortingObj(data: userRequest) {
    setfirst([...data])
  }
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '15vw 85vw',
        fontSize: 'calc(1vh + 1vw)',
      }}
    >
      <Sort setSortingObj={setSortingObj} first={first}></Sort>
      <Routes>
        <Route
          path='/'
          element={<UserListComp setSortingObj={setSortingObj} first={first} />}
        />
        <Route path='/user/:id' element={<UserBlockComp />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
