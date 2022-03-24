import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import UserList from './UserList'
export type userRequest = {
  id: number
  name: string
  email: string
  phone: string
  username: string
  website: string
  address: {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
}[]
const UserListComp = () => {
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
  async function getUserData() {
    const responce = await fetch(
      'https://jsonplaceholder.typicode.com/users?_limit=10'
    )
    const data: userRequest = await responce.json()
    localStorage.setItem('users', JSON.stringify(data))
    localStorage.setItem('userDate', '' + Date.now())
    setfirst(data)
  }
  useEffect(() => {
    if (!first.length) getUserData()
  }, [])
  return <UserList {...[first]}></UserList>
}

export default UserListComp
