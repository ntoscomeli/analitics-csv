import { restclientGet } from '@logistics/restclient'
import { transformUsers } from './transform.js'

const scope = 'prod'

const getUsersInfoById = (ids) => {
  return restclientGet(`/internal/kraken/auth-core/legacy/users`, {
    timeout: 15000,
    params: {
      ids,
      scope,
    },
    cache: {
      maxAge: 60 * 2,
    },
  }).then(transformUsers)
}


export default getUsersInfoById