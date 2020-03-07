import React, { Fragment } from 'react';
import './Nav.scss';

function Nav({...props}) {
  const {goBack,showDetail} = props;
  const goBackFunc = () => {
    goBack();
  }
  return (
    <div className="nav">
      
      <div className='back' onClick={goBackFunc}>{showDetail ? 'Back' : ''}</div>
      <div className='content'>
        Contacts
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Nav;