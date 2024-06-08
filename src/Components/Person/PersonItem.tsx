import {User} from '../../../types';
import React from 'react';
interface Props {
  user: User
  active: (boolean:boolean) => void;
}
const PersonItem:React.FC<Props> = ({user}) => {
  const active = (active:boolean) =>{
    if(active){
      return 'активный';
    }else{
      return 'неактивный';
    }
  }
  return (
    <div className="d-flex justify-content-around">
      <h4>{user.id}. {user.name}</h4>
      <p className='active'>{active(user.active)}</p>
      <p>{user.roles}</p>
    </div>
  );
};

export default PersonItem;