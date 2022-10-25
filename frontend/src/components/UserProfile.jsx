import React, { useState, useEffect } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { GoogleLogout } from '@react-oauth/google'
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery} from '../utils/data'
import { client } from '../client'
import MasonryLayout from './MansoryLayout';
import Spinner from './Spinner'

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null)
  const [text, setText] = useState('Created')
  const [activeBtn, setactiveBtn] = useState('created')
  const navigate = useNavigate()
  const { userId } = useParams();

  useEffect(() => {
    const query = userQuery(userId);
    
    client.fetch(query)
    .then((data) => {
      setUser(data[0])
    })
  }, [userId])
 
  if(!user) {
    return (
      <Spinner message="Loading profile..."/>
    )
  }

  return (
    <div className="relative">
      UserProfile
    </div>
  )
}

export default UserProfile
