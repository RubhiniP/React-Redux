import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../redux/slices/userSlice'

function SignIn(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const signin = e => {
    e.preventDefault()
    dispatch(signIn({name, email}))
  }

  return(
    <div className='center'>
      <div className='signin'>
        <h2>Sign In</h2>
        <form onSubmit={signin} name='signin_form'>
        <input 
          type='text'
          value={name}
          required
          placeholder="Enter your name"
          onChange={e => setName(e.target.value)}/><br />

          <input 
            type='email'
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/><br />

          <button type='submit'>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn