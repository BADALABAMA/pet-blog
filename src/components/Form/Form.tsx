import * as React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { UserContext } from '../../contexts/UserContext';

import Form from 'react-bootstrap/Form';
import { Button } from '../Button/Button';
import { Alert } from 'react-bootstrap';
import { UserInputs } from '../../utills/types';
import { IFormsProps } from '../../interfaces/IFormProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './Form.css';

export const Forms: React.FC<IFormsProps> = ({ onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,

    formState: { errors },
  } = useForm<UserInputs>();
  const onSubmit: SubmitHandler<UserInputs> = (data) => onSubmitHandler(data);

  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);

  const { currentUser } = React.useContext(UserContext);
  const email = watch('email');
  const password = watch('password');

  const toggleVisability = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <div className="d-flex justify-content-center   align-items-center form-container">
      <Form className=" mt-3  w-50" onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          autoComplete="on"
          className="mb-3 mt-3 w-100 p-3"
          defaultValue=""
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <Alert className="error" variant="danger">
            Email is required
          </Alert>
        )}

        <Form.Control
          autoComplete="on"
          defaultValue=""
          className="d-flex  mb-3  w-100 p-3"
          type={isVisiblePassword ? 'text' : 'password'}
          {...register('password', {
            required: true,
            // minLength: 8,
            // pattern:
            //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          })}
          placeholder="Password"
        />
        {errors.password && (
          <Alert className="error" variant="danger">
            password shoud be minimum 8 lenght and contain A-z, numbers and
            special symbols
          </Alert>
        )}
        {!currentUser.isAuthorized ? (
          <Form.Control
            className="mb-3 mt-3 w-100 p-3"
            defaultValue=""
            type={isVisiblePassword ? 'text' : 'password'}
            {...register('confirmPassword', {
              required: true,
              validate: (value) => {
                return (
                  value === getValues('password') || 'passwords  do not match'
                );
              },
            })}
            placeholder="Confirm Password"
          />
        ) : null}

        {errors.confirmPassword && (
          <Alert className="error" variant="danger">
            {errors.confirmPassword.message || 'confirm password is required'}
          </Alert>
        )}

        <Button disabled={!email || !password} className="m-3 " type="submit">
          Submit
        </Button>
      </Form>

      <button className="password-icon-btn" onClick={toggleVisability}>
        <FontAwesomeIcon
          className="password-icon"
          //   changing show password icon
          icon={isVisiblePassword ? faEyeSlash : faEye}
        />
      </button>
    </div>
  );
};
