import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './container/nav/Nav';
import List from './container/list/List';
import Detail from './container/detail/Detail';
import axios from 'axios';

function App() {
  const listFromLocalStorage = window.localStorage.getItem('contact');
  const [userList, setUserList] = useState(
    listFromLocalStorage ? JSON.parse(listFromLocalStorage) : []
  );
  const [selectedUser, setSelectedUser] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  async function fetchUserList() {
    try {
      // set up proxy in package.json file to deal with CORS problem.
      axios.defaults.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': 'GkwUbWhmDS5teATL3l6724mI4JUMT3OWa5PnmJVf'
      }
      const response = await axios.get('/v1');
      const data = response.data;
      data.sort((a, b) => {
        if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
        return 0;
      });
      const formatData= JSON.stringify(data);
      setUserList(data);
      window.localStorage.setItem('contact', formatData);
    } catch (err) {
      window.alert(err);
    }
  }
  if (!userList.length) {
    fetchUserList();
  }
  // useEffect(() => { fetchUserList() }, []);
  const pickUser = (user) => {
    setSelectedUser(user);
    setShowDetail(true);
  }
  const goBack = () => {
    setShowDetail(false);
  }
  const updateContact = (updateInfo) => {
    const idx = userList.findIndex(item => {return item.id === updateInfo.id})
    userList.splice(idx, 1, updateInfo);
    userList.sort((a, b) => {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
      if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
      return 0;
    });
    setShowDetail(false);
    setSelectedUser({});
    window.localStorage.setItem('contact', JSON.stringify(userList));
  }

  const renderList = () => {
    return !showDetail && (<List userList={userList} setSelectedUser={pickUser}/>);
  }
  const renderDetail = () => {
    return showDetail && (<Detail user={selectedUser} updateContact={updateContact}/>)
  }

  return (
    <div className="App">
      <Nav goBack={goBack} showDetail={showDetail}/>
      {renderList()}
      {renderDetail()}
    </div>
  );
}

export default App;
