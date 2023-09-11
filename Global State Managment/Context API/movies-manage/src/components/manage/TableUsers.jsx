import React from 'react'
import PropTypes from 'prop-types'
import TableUserItem from './TableUserItem'
import useAuthProvider from '../../hooks/useAuthProvider'

function TableUsers({...props}) {
  
  const {User} = useAuthProvider();
  
    return (
    <div className="table-users">
        <table border="2">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    // ignore the logged user
                    props.users.filter((user) => user.username !== User.username).map((user) => (
                        <TableUserItem key={user.id} 
                        index={
                            // ignore the logged user
                            props.users.filter((user) => user.username !== User.username).indexOf(user) + 1

                        }
                        user={user} />
                    ))
                }
            </tbody>

        </table>
    </div>
    )
}

TableUsers.propTypes = {
 users: PropTypes.array.isRequired,
}

export default TableUsers
