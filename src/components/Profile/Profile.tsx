import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { IUser } from '../../interfaces/IUser';

export const Profile = () => {
  const [user, setUser] = useState<IUser>();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser.isAuthorized) {
      setUser(currentUser);
      console.log(currentUser);
    }
  }, [currentUser]);
  return (
    <div>
      <p>{currentUser.email}</p>
      <p>{currentUser.name}</p>
    </div>
  );
};

export default Profile;
