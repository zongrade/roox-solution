import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { userRequest } from '../UserList/UserListComp'
import classes from './userBlock.module.scss'
const UserBlock = (props: {
  isYour: () => userRequest[0] | false | undefined
  updateUserData: (data: userRequest[0]) => void
}) => {
  //TODO: сделать контролируемые компоненты
  const [edit, setfirst] = useState(false)
  console.log(props)
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    //TODO: доделать типы под запрос
    userData ? props.updateUserData(userData) : 1
  }
  const userData = props.isYour()
  const ss = { ...userData, ...{ name: 'Alex Mercer' } }
  console.log(ss)
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <span style={{ position: 'absolute', top: '1vh', left: '9vw' }}>
        Профиль пользователя
      </span>
      <button
        onClick={() => setfirst((prev) => !prev)}
        style={{ position: 'absolute', top: '1vh', right: '1vw' }}
      >
        Редактировать
      </button>
      <form onSubmit={handleSubmit}>
        <div className={classes.home}>
          {userData ? (
            <>
              <div>
                <label htmlFor='name'>Name</label>
                {!edit ? (
                  <input
                    id='name'
                    type='text'
                    disabled
                    placeholder={userData.name}
                  />
                ) : (
                  <input id='name' type='text' value={userData.name} />
                )}
              </div>
              <div>
                <label htmlFor='username'>username</label>
                {!edit ? (
                  <input
                    id='username'
                    type='text'
                    disabled
                    placeholder={userData.username}
                  />
                ) : (
                  <input id='name' type='text' value={userData.username} />
                )}
              </div>
              <div>
                <label htmlFor='email'>email</label>
                {!edit ? (
                  <input
                    id='email'
                    type='email'
                    disabled
                    placeholder={userData.email}
                  />
                ) : (
                  <input id='name' type='text' value={userData.email} />
                )}
              </div>
              <div>
                <label htmlFor='street'>street</label>
                {!edit ? (
                  <input
                    id='street'
                    type='text'
                    disabled
                    placeholder={userData.address.street}
                  />
                ) : (
                  <input
                    id='name'
                    type='text'
                    value={userData.address.street}
                  />
                )}
              </div>
              <div>
                <label htmlFor='city'>city</label>
                {!edit ? (
                  <input
                    id='city'
                    type='text'
                    disabled
                    placeholder={userData.address.city}
                  />
                ) : (
                  <input id='name' type='text' value={userData.address.city} />
                )}
              </div>
              <div>
                <label htmlFor='zipcode'>zipcode</label>
                {!edit ? (
                  <input
                    id='zipcode'
                    type='text'
                    disabled
                    placeholder={userData.address.zipcode}
                  />
                ) : (
                  <input
                    id='name'
                    type='text'
                    value={userData.address.zipcode}
                  />
                )}
              </div>
              <div>
                <label htmlFor='tel'>tel</label>
                {!edit ? (
                  <input
                    id='tel'
                    type='tel'
                    disabled
                    placeholder={userData.phone}
                  />
                ) : (
                  <input id='name' type='text' value={userData.phone} />
                )}
              </div>
              <div>
                <label htmlFor='site'>site</label>
                {!edit ? (
                  <input
                    id='site'
                    type='url'
                    disabled
                    placeholder={userData.website}
                  />
                ) : (
                  <input id='name' type='text' value={userData.website} />
                )}
              </div>
              <div style={{ marginBottom: '1vh' }}>
                <label htmlFor='comments'>comments</label>
                {!edit ? (
                  <input id='comments' disabled />
                ) : (
                  <input id='name' type='text' />
                )}
              </div>
            </>
          ) : (
            <span style={{ margin: '50%' }}>No user</span>
          )}
        </div>
        <button type='submit'>Отправить</button>
      </form>
    </div>
  )
}

export default UserBlock
