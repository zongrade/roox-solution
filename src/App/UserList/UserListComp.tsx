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
export type KTaddress = keyof userRequest[0]['address']
export type KTcompany = keyof userRequest[0]['company']
const UserListComp = (props: {
  setSortingObj: (data: userRequest) => void
  first: userRequest
}) => {
  const [loading, setLoading] = useState(false)
  console.log(props)
  async function getUserData() {
    const responce = await fetch(
      'https://jsonplaceholder.typicode.com/users?_limit=10'
    )
    const data: userRequest = await responce.json()
    localStorage.setItem('users', JSON.stringify(data))
    localStorage.setItem('userDate', '' + Date.now())
    props.setSortingObj(data)
  }
  useEffect(() => {
    if (!props.first.length) {
      setLoading(true)
      getUserData().then(() => setLoading(false))
    }
  }, [])
  return <UserList {...[props.first]} loading={loading}></UserList>
}

export default UserListComp
