import { IUser } from './IUser';

export interface IFormsProps {
  onSubmitHandler: (data: IUser) => void;
}
