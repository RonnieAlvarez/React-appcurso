import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { db } from "./../firebase"
import { getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import UserDetail from "./UserDetail"

export const UserDetailContainer = () => {
  const [usuarios1, setUsuarios1] = useState([])
  const { user } = useParams()
  const getUserById = async (id) => {
  const user1 = await getDoc(doc(db, "users", id))
  setUsuarios1({ ...user1.data(), id: user })
  }
  useEffect(() => {
    getUserById(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return ( <UserDetail user={usuarios1}  /> )
}

export default UserDetailContainer
