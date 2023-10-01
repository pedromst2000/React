import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categoriesActions } from '../store/CategoriesSlice'
import { usersActions } from '../store/UsersSlice'
import Users from '../components/manage/Users';


export default function Manage() {
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const categories = useSelector((state) => state.categories.categories);


  return (
    <div className='manage-container'>
      <div className="manage-users">
        <Users 
          users={users}
          categories={categories}
          dispatch={dispatch}
          usersActions={usersActions}
          categoriesActions={categoriesActions}
/>
      </div>
      <div className="manage-categories"></div>
    </div>
  )
}
