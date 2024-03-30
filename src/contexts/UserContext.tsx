import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../interfaces/IUser';
import { UserContextType } from '../interfaces/ContextTypes';

const uuid = uuidv4();

const UserContext = createContext<UserContextType>({
  users: [],
  currentUser: {
    id: uuid,
    email: '',
    password: '',
    isAuthorized: false,
  },
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
  const addUser = (user: IUser) => {
    user.id = uuid;
    defineCurrentUser(user);

    setUsers([...users, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
