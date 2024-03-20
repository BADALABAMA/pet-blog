import * as React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { UserInputs } from '../../utills/types';

import Form from 'react-bootstrap/Form';

import { IFormsProps } from '../../interfaces/IFormProps';

export const Forms: React.FC<IFormsProps> = ({ onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm<UserInputs>();
  const onSubmit: SubmitHandler<UserInputs> = (data) => onSubmitHandler(data);

  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);

  const toggleVisability = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          className="mb-3 w-100 p-3"
          defaultValue=""
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && <span className="error">Email is required</span>}
        <Form.Control
          defaultValue=""
          className="mb-3 w-100 p-3"
          type={isVisiblePassword ? 'text' : 'password'}
          {...register('password', {
            required: true,
          })}
          placeholder="Password"
        />
        {errors.password && <span className="error">Password is required</span>}
        <Form.Control
          className="mb-3 w-100 p-3"
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

        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}

        <input className="m-3 " type="submit" />
        <button
          className="m-3 "
          onClick={() => {
            toggleVisability();
          }}
        >
          see password
        </button>
      </Form>
    </div>
  );
};
