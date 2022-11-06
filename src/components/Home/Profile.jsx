import React from 'react'
import { Avatar } from '../Avatar'
import { ButtonMain, ButtonSec } from '../Button'
import { useNavigate } from 'react-router-dom'

const Profile = ({ user }) => {
  const navigate = useNavigate()
  
  const logoutHandler = (e) => {
    e.preventDefault()

    navigate('/login')
  }

  return (
    <div className='profile-section-wrapper'>
      <div className='profile-section-container'>
        <div className='profile-section-content-wrapper'>
          <Avatar url={user.accountInfo.imgUrl} />
          <div className='profile-section-content'>
            <h3 className='profile-section-content-title'>
              {user.name}
            </h3>
            <h3 className='profile-section-content-subtitle'>
              {user.username}
            </h3>
          </div>
        </div>
        <div className='profile-btn-wraper'>
          <ButtonMain text='Account' />
          <ButtonSec 
            text='Logout' 
            onClick={logoutHandler} 
          />
        </div>
      </div>
    </div>
  )
}

export default Profile