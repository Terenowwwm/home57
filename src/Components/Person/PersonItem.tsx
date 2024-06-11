import React from 'react';
import {User} from '../../../types';
interface Props {
  user: User;
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
    <div className="d-flex justify-content-around align-items-center">
      <h4>{user.id}. {user.name}</h4>
      <p className='active'>{active(user.active)}</p>
      <p>{user.roles}</p>
    </div>
  );
};

export default PersonItem;