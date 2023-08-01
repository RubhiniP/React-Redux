import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

function AsyncActions({ fetchUsersData, usersData }){
    
    useEffect(() => {
        fetchUsersData()
    }, [fetchUsersData])

    return(
        <div>
        {usersData.loading 
            ? <h2>Loading</h2>
            : usersData.errorMessage 
            ? <h2>{usersData.errorMessage}</h2>
            : <div>
                <h2>Users List</h2>
                {usersData?.users 
                ? usersData.users.map(user => <p key={user.id}>{user.username}</p>) 
                : <h2>No users found</h2>}
            </div>} 
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        usersData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsersData: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncActions);