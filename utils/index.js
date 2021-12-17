import getUsersInfoById from '../services/index'

const buildInfo = (list) => {

  const ids = list.map(({ UserID }) => UserID)

  console.log("ID", ids.join())

  getUsersInfoById(ids.join())
    .then(response => {
      console.log("RESPONSE", response)
    })
    .catch(error => {
      console.log("[ERROR]", error)
    })

}

export default buildInfo