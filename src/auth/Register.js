/**
 * A function that is being exported to another file.
 * </code>
 * You are using <code>createUserWithEmailAndPassword</code> from <code>firebase/auth</code> but you
 * are not importing it.
 * You should import it like this:
 * <code>import { createUserWithEmailAndPassword } from 'firebase/auth'
 * </code>
 * @returns A function that is being exported to another file.
 */
import {useState} from 'react'
import '../css/Forms.css'
import {auth} from '../firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './AuthContext'

/* A function that is being exported to another file. */
function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Palabra clave no coincide')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Registro de Usuarios</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input 
            type='email' 
            value={email}
            placeholder="Digite el correo"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Digite la clave'
            onChange={e => setPassword(e.target.value)}/>

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirme la clave'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <button type='submit'>Registrar</button>
        </form>
        <span>
          Tienes cuenta ??  
          <Link to='/login'>Ingresar</Link>
        </span>
      </div>
    </div>
  )
}

export default Register