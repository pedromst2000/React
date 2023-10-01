import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function UserItem({ ...props }) {

  const [newRole, setNewRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  
useEffect(() => {
  // return the roles without duplicates and slice the admin role 
  const roles = props.users.map((user) => user.role).filter((role, index, self) => self.indexOf(role) === index)

  const adminIndex = roles.indexOf("admin");

  roles.splice(adminIndex, 1);
  
  setRoles(roles);

  console.log(roles);

  const role = props.users.find((user) => user.username === props.user.username).role;

  setRole(role);


}, [props.users, props.categories]);


 const handleChangeRole = (username, newRole) => {

  props.dispatch(props.usersActions.changeRole({
    username: username,
    newRole: newRole
  }));

  setNewRole("");

 };

    return (
    <tr key={props.index}>
      <td>{props.index + 1}</td>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>{props.user.role}</td>
      <th>
        <select
          value={role}
          
        onChange={(e) => {
          setNewRole(e.target.value);
          handleChangeRole(props.user.username, e.target.value);
        }}
        >
          {roles?.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}

        </select>
      </th>
    </tr>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  usersActions: PropTypes.object.isRequired,
  categoriesActions: PropTypes.object.isRequired,
};

export default UserItem;
