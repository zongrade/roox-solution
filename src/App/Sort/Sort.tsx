import React from 'react'
import { Link } from 'react-router-dom'
import { userRequest } from '../UserList/UserListComp'
import classes from './sort.module.scss'
import { sortBy } from './sortObj'
const Sort = (props: {
  setSortingObj: (data: userRequest) => void
  first: userRequest
}) => {
  return (
    <div
      style={{
        backgroundColor: '#BDBDBDFF',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          height: '20vh',
          position: 'absolute',
          top: '1vh',
          left: '1vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Link to={'/'}>main</Link>
        <span>Sort by</span>
        <button
          className={classes.beuBtn}
          onClick={() => props.setSortingObj(sortBy('city', props.first))}
        >
          city
        </button>
        <button
          className={classes.beuBtn}
          onClick={() => props.setSortingObj(sortBy('name', props.first))}
        >
          name
        </button>
      </div>
    </div>
  )
}

export default Sort
