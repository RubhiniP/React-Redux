import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
function UserContainer(){

    const userData = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return(
        <div>
            <h2>List of all users</h2>
            {userData.loading ? <h3>Loading</h3>
            : userData.errorMessage
            ? <h3>{userData.errorMessage}</h3>
            : userData?.users 
            ? userData.users.map(user => <p key={user.id}>{user.username}</p>)
            : <h3>No results</h3>      
            }
        </div>
    );
}

export default UserContainer;