import {User} from '../../../types';
import React from 'react';
interface Props {
  user: User
}
const PersonItem:React.FC<Props> = ({user}) => {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <h4>{user.id}. {user.name}</h4>
      <p>{user.active}</p>
      <p>{user.roles}</p>
    </div>
  );
};

export default PersonItem;