import React from 'react';
import PersonItem from './PersonItem';
import {User} from '../../../types';
interface Props{
  users: User[]
}
const Person:React.FC<Props> = ({users}) => {
  return (
    <div>
      <h4>Person</h4>
      <div>
        {users.map((user) =>(
            <PersonItem key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default Person;