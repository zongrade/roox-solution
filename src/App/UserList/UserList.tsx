import React from 'react'
import { userRequest } from './UserListComp'
import classes from './userList.module.scss'
import { Link } from 'react-router-dom'
const UserList = (props: { 0: userRequest; loading: boolean }) => {
  return (
    <>
      {!props.loading ? (
        <>
          <span
            style={{
              marginLeft: '10%',
              position: 'fixed',
              zIndex: '2',
              top: '0.5vh',
              right: '35vw',
            }}
          >
            Список пользователей
          </span>
          <div
            style={{
              height: '90vh',
              position: 'relative',
              overflowY: 'scroll',
              marginTop: '4vh',
            }}
          >
            {props[0].map((e) => (
              <div key={e.id} className={classes.userBlock}>
                <div className={classes.metadata}>
                  <label htmlFor='name'>ФИО:</label>
                  <div id='name'>{e.name}</div>
                </div>
                <div className={classes.metadata}>
                  <label htmlFor='city'>город:</label>
                  <div id='city'>{e.address.city}</div>
                </div>
                <div className={classes.metadata}>
                  <label htmlFor='company'>компания:</label>
                  <div id='company'>{e.company.name}</div>
                </div>
                <Link
                  style={{ position: 'absolute', bottom: '1vh', right: '1vw' }}
                  to={`user/${e.id}`}
                >
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
          <span style={{ position: 'absolute', bottom: '1vh', right: '1vw' }}>
            {`Количество пользователей ` + props[0].length}
          </span>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default UserList
