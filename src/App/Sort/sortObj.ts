import { userRequest } from '../UserList/UserListComp'

export function sortBy(type: 'city' | 'name', obj: userRequest) {
  switch (type) {
    case 'city':
      localStorage.setItem(
        'users',
        JSON.stringify(
          obj.sort((elem, next) =>
            elem.address.city > next.address.city ? 1 : -1
          )
        )
      )
      return obj.sort((elem, next) =>
        elem.address.city > next.address.city ? 1 : -1
      )
    case 'name':
      return obj.sort((elem, next) => (elem.name > next.name ? 1 : -1))
  }
}
