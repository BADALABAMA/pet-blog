import React, { createContext, useEffect, useState } from 'react';

import { IUser } from '../interfaces/IUser';
import { UserContextType } from '../interfaces/ContextTypes';
import { json } from 'body-parser';

const UserContext = createContext<UserContextType>({
  users: [],
  currentUser: { email: '', password: '', isAuthorized: false },
  addUser: () => {},
});

const UserProvider = ({ children }: any) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser>({
    email: '',
    password: '',
    isAuthorized: false,
  });

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthorized(true);
    currentUser.isAuthorized = isAuthorized;
    if (currentUser.email !== '') {
      sessionStorage.setItem('user', JSON.stringify(currentUser));

      const user = sessionStorage.getItem('user');
      if (user) {
        setTimeout(() => {
          setIsAuthorized(false);
          const resetedUser: IUser = {
            email: '',
            password: '',
            isAuthorized: isAuthorized,
          };
          sessionStorage.removeItem('user');
          setCurrentUser(resetedUser);
          console.log(currentUser);
        }, 150000);
      }
    }
  }, [currentUser]);

  const defineCurrentUser = (user: IUser) => {
    if (currentUser.email === '') {
      setCurrentUser(user);
    } else {
      return;
    }
  };
  const addUser = (u: IUser) => {
    defineCurrentUser(u);

    setUsers([...users, u]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
