import { useDispatch, useSelector } from 'react-redux'
import {signOut} from '../redux/slices/userSlice'

function Profile() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p>
            <strong>Name: </strong>{user?.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user?.email}
          </p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
  )
}

export default Profile