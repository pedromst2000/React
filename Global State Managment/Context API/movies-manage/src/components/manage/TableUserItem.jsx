import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useAuthProvider from '../../hooks/useAuthProvider'

function TableUserItem({...props}) {
  
  
const { users, changeRole } = useAuthProvider();
const [role, setRole] = useState("");

useEffect(() => {

    const user = users.find((user) => user.id === props.user.id);
    setRole(user.role);


}, [role]);


const handleChange = async (e) => {
    setRole(e.target.value);
    
    // get the response from the changeRole function
    const response = await changeRole(props.user.id, e.target.value);
    alert(
        `
        ${props.user.username}' ${response}
        `
    );
};


  
    return (
    <tr key={props.user.id}>
        <td>{props.index}</td>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>
            <select
                value={role}
                onChange={handleChange}
            >
                <option value="unsigned">unsigned</option>
                <option value="admin">admin</option>
                <option value="client">client</option>
            </select>
        </td>
    </tr>
    )
}

TableUserItem.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default TableUserItem
