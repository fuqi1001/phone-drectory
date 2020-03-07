import React from 'react';
import './List.scss';

function List({...props}) {
  const { userList, setSelectedUser } = props;

  const pickUser = (user) => {
    setSelectedUser(user);
  }
  const renderList = () => {
    return (
      userList.map(user => {
        return (
          <div className='row' key={user.id} onClick={() => pickUser(user)}>
            {user.firstName}&nbsp;{user.lastName}
          </div>
        )
      })
    )
  }
  return (
    <div className="list">
     {renderList()}
    </div>
  )
}

export default List;