import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'

function Users(props) {

  return (
    <table>
        <thead>
            <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users?.map((user, index) => {
                if(user.role !== "admin"){
                return (
                    <UserItem 
                    key={index}
                    user={user}
                    index={index}
                    categories={props.categories}
                    dispatch={props.dispatch}
                    usersActions={props.usersActions}
                    categoriesActions={props.categoriesActions}
                    users={props.users}
                    />
                )
                }
            })}
        </tbody>
    </table>
  )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    usersActions: PropTypes.object.isRequired,
    categoriesActions: PropTypes.object.isRequired
}

export default Users
