import React from 'react';
import { FC } from 'react';
import { TErrors } from '../../utils/types';

interface IListErrors {
  errors: TErrors | undefined;
}

const ListErrors: FC<IListErrors> = ({ errors }) => {
  console.log('ERRORS from ListErrors', errors);

  return errors ? (
    <ul className="error-messages">
      {Object.keys(errors).map((key) => {
        return (
          <li key={key}>
            {key}: {errors[key]}
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default ListErrors;
