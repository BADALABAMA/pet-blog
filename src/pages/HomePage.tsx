import React from 'react';
import { Forms } from '../components/Form/Form';
import { IUser } from '../interfaces/IUser';

const Home = () => {
  const onSubmitHandler = (data: IUser) => {
    return console.log(data, ' props works');
  };
  return <Forms onSubmitHandler={onSubmitHandler}></Forms>;
};

export default Home;
