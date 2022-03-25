import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { KTaddress, KTcompany, userRequest } from '../UserList/UserListComp'
import classes from './userBlock.module.scss'
const UserBlock = (props: {
  isYour: () => userRequest[0] | false | undefined
  updateUserData: (data: userRequest[0]) => void
}) => {
  const [edit, setfirst] = useState(false)
  const [comments, setComments] = useState('')
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    //TODO: доделать типы под запрос
    userData ? props.updateUserData(userData) : 1
  }
  const userData = props.isYour()
  const sa: userRequest[0] = userData
    ? userData
    : {
        address: {
          city: '',
          geo: {
            lat: '',
            lng: '',
          },
          street: '',
          suite: '',
          zipcode: '',
        },
        company: {
          bs: '',
          catchPhrase: '',
          name: '',
        },
        email: '',
        id: 0,
        name: '',
        phone: '',
        username: '',
        website: '',
      }
  type allKey = keyof userRequest[0] | KTaddress | KTcompany
  const [inputs, setInputs] = useState(userData as userRequest[0])
  const [canSend, setCanSend] = useState<allKey[]>([])
  function setUserInputs(e: allKey, newData: string) {
    !newData
      ? setCanSend((prev) =>
          prev.find((elem) => elem === e) ? prev : [...prev, e]
        )
      : setCanSend((prev) => prev.filter((elem) => elem !== e))
    if (e in inputs) {
      setInputs((prev: userRequest[0]) => {
        return {
          ...inputs,
          ...{
            [e]: newData,
          },
        }
      })
    } else if (e in inputs.address) {
      setInputs({
        ...inputs,
        ...{ address: { ...inputs.address, ...{ [e]: newData } } },
      })
    } else {
      setInputs({
        ...inputs,
        ...{ company: { ...inputs.company, ...{ [e]: newData } } },
      })
    }
  }
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <span style={{ position: 'absolute', top: '1vh', left: '9vw' }}>
        Профиль пользователя
      </span>
      <button
        onClick={() => {
          if (userData) setfirst((prev) => !prev)
        }}
        style={{ position: 'absolute', top: '1vh', right: '5vw' }}
        className={classes.beuBtn}
      >
        Редактировать
      </button>
      <form style={{ height: '80%' }} onSubmit={handleSubmit}>
        <div className={classes.home}>
          {userData ? (
            <>
              {/*TODO: переделать под map*/}
              <div>
                <label htmlFor='name'>Name</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.name
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='name'
                    type='text'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.name}
                  />
                ) : (
                  <input
                    style={
                      !inputs.name
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='name'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.name}
                  />
                )}
              </div>
              <div>
                <label htmlFor='username'>username</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.username
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='username'
                    type='text'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.username}
                  />
                ) : (
                  <input
                    style={
                      !inputs.username
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='username'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.username}
                  />
                )}
              </div>
              <div>
                <label htmlFor='email'>email</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.email
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='email'
                    type='email'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.email}
                  />
                ) : (
                  <input
                    style={
                      !inputs.email
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='email'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.email}
                  />
                )}
              </div>
              <div>
                <label htmlFor='street'>street</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.address.street
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='street'
                    type='text'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.address.street}
                  />
                ) : (
                  <input
                    style={
                      !inputs.address.street
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='street'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.address.street}
                  />
                )}
              </div>
              <div>
                <label htmlFor='city'>city</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.address.city
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='city'
                    type='text'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.address.city}
                  />
                ) : (
                  <input
                    style={
                      !inputs.address.city
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='city'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.address.city}
                  />
                )}
              </div>
              <div>
                <label htmlFor='zipcode'>zipcode</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.address.zipcode
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='zipcode'
                    type='text'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.address.zipcode}
                  />
                ) : (
                  <input
                    style={
                      !inputs.address.zipcode
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='zipcode'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.address.zipcode}
                  />
                )}
              </div>
              <div>
                <label htmlFor='phone'>tel</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.phone
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='phone'
                    type='tel'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.phone}
                  />
                ) : (
                  <input
                    style={
                      !inputs.phone
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='phone'
                    type='tel'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.phone}
                  />
                )}
              </div>
              <div>
                <label htmlFor='website'>site</label>
                {!edit ? (
                  <input
                    style={
                      !inputs.website
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='website'
                    type='text'
                    readOnly
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.website}
                  />
                ) : (
                  <input
                    style={
                      !inputs.website
                        ? { border: 'calc(0.1vh + 0.1vw) red solid' }
                        : {}
                    }
                    required
                    id='website'
                    type='text'
                    onChange={(e) => {
                      setUserInputs(e.target.id as allKey, e.target.value)
                    }}
                    value={inputs.website}
                  />
                )}
              </div>
              <div style={{ marginBottom: '1vh' }}>
                <label htmlFor='comments'>comments</label>
                {!edit ? (
                  <input
                    id='comments'
                    onChange={(e) => setComments(e.target.value)}
                    readOnly
                  />
                ) : (
                  <input
                    id='comments'
                    onChange={(e) => setComments(e.target.value)}
                    type='text'
                  />
                )}
              </div>
            </>
          ) : (
            <span style={{ margin: '0 0 0 50%' }}>No user</span>
          )}
        </div>
        {edit && canSend.length === 0 ? (
          <button className={classes.sbButn} type='submit'>
            Отправить
          </button>
        ) : (
          <button
            className={classes.sbButndis}
            title='Отредактируйте'
            type='submit'
            disabled
          >
            Отправить
          </button>
        )}
      </form>
    </div>
  )
}

export default UserBlock
