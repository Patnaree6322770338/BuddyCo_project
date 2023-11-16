import React, { useState } from 'react';
import './Apptwo.css'; // Import your CSS file here
import './SignUp.module.css';
import styles from '../pages/UserProfile.module.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {

  const navigate = useNavigate();
 
  

return (
  <div className={styles.profileContainer}>
  <div className={styles.profileImage} /> 
  <div className={styles.profileInfo}>
    <div><strong>ID:</strong> </div>
    <div><strong>Name:</strong> </div>
    <div><strong>Email:</strong> </div>
    <div><strong>Date of Birth:</strong> </div>
    <div><strong>Description:</strong> </div>
  </div>
</div>
  
);
}

export default Profile;