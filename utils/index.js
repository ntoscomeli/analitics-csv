import getUsersInfoById from '../services/index'

const compileList = (list, names) => {
  list.map((item) => {
    const personalData = names?.find(({ meli_user }) => meli_user === item.UserID);
    const { name, last_name } = personalData || {}
    item.Nombre = personalData ? `${name} ${last_name}` : 'ROOT'
    return item
  })
  return list
}

const buildInfo = async (list) => {
  const ids = list.map(({ UserID }) => UserID)
  console.log("BUILDING", ids.length)
  try {
    const response = await getUsersInfoById(ids.join())
    return compileList(list, response)
  } catch (error) {
    console.log("ERROR", error)
  }
}

export default buildInfo