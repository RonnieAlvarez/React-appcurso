import './css/Profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Perfil</h1>
          <p><strong>Correo: </strong>{currentUser?.email}</p>
          <p>
            <strong>Correo Verificado: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Salir de la cuenta</span>
        </div>
      </div>
  )
}

export default Profile