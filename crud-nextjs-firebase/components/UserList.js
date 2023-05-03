import { collection, orderBy } from "firebase/firestore"
import { useState } from "react"


const UserList = () => {
  
  const[usuarios,setUsuarios] = useState ([])


//
  useEffect(() => {
    const coleccion = collection(bd,"Usuarios")
  
    const consulta = query(collection,orderBy(""))
    return () => {
      second
    }
  }, [])
//

  return (
    <div>UserList</div>
  )
}

export default UserList