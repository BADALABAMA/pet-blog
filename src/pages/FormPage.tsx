import React, { useState } from 'react';
import { Forms } from '../components/Form/Form';
import { IUser } from '../interfaces/IUser';
import { Spinner } from '../components/Spinner/Spinner';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSpinner = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };
  const onSubmitHandler = (data: IUser) => {
    toggleSpinner();

    return console.log(data, ' props works');
  };
  return (
    <>
      <Forms onSubmitHandler={onSubmitHandler}></Forms>
      <Spinner isVisible={isVisible} />
    </>
  );
};

export default Home;
