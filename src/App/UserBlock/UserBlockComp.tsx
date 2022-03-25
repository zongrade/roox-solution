import React from 'react'
import { useParams } from 'react-router-dom'
import { userRequest } from '../UserList/UserListComp'
import UserBlock from './UserBlock'

const UserBlockComp = () => {
  const user = useParams<{ id: string }>()
  function isYour() {
    const arr = JSON.parse(localStorage.getItem('users') || '[]') as
      | userRequest
      | []
    if (arr.length) return arr.find((e) => e.id.toString() === user.id)
    return false
  }
  function updateUserData(data: userRequest[0] | false | undefined) {
    async function sendUserData(data: userRequest[0]) {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/users/${data.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      if (!request.ok) throw new Error('error')
      const res = await request.json()
      console.log(res)
    }
    try {
      if (data) sendUserData(data)
    } catch (error) {
      console.log(error)
    }
  }
  return <UserBlock isYour={isYour} updateUserData={updateUserData}></UserBlock>
}

export default UserBlockComp
