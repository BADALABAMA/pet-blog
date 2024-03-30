import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Forms } from '../components/Form/Form';
import { IUser } from '../interfaces/IUser';
import { Spinner } from '../components/Spinner/Spinner';
import { UserContext } from '../contexts/UserContext';

const FormPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const { addUser } = useContext(UserContext);

  const toggleSpinner = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };
  const onSubmitHandler = (user: IUser) => {
    toggleSpinner();

    addUser(user);

    navigate('/');
  };
  return (
    <>
      <Forms onSubmitHandler={onSubmitHandler}></Forms>
      <Spinner isVisible={isVisible} />
    </>
  );
};

export default FormPage;
