import React, {useState} from 'react';
import {User, UserMutation} from '../../../types';
import Modal from '../Modal/Modal'
interface PersonalForm {
  onSubmit: (user: User) => void;
}

const PersonalForm: React.FC<PersonalForm> = ({onSubmit}) => {
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [peopleMutation, setPeopleMutation] = useState<UserMutation>({
    id: '',
    name: '',
    email: '',
    roles:'user',
    active: false,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPeopleMutation((prev) => ({
        ...prev,
        [event.target.name]: event.target.value
      }
    ));
  }
  const checked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheck(isChecked);
    setPeopleMutation(prev => ({
      ...prev,
      active: isChecked
    }));
}
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...peopleMutation,
      id: Math.floor(Math.random() * 100).toString(),
      active: peopleMutation.active
    });
    setPeopleMutation({
      id: '',
      name: '',
      email: '',
      roles:'user',
      active: false,
    })
  };
  const closeModal = () =>{
    setShowModal(false);
  }
  return (
    <>
      <form action="#" onSubmit={onFormSubmit}>
        <h5>Add Personal</h5>
        <div className="form-group mt-4">
          <label htmlFor="name" className="me-4"> Name </label>
          <input type="text"
                 id="name"
                 name="name"
                 onChange={onChange}
                 required
                 placeholder="name"
                 value={peopleMutation.name}/>

        </div>
        <div className="form-group mt-4">
          <label htmlFor="email" className="me-4"> email </label>
          <input type="email"
                 id="email"
                 name="email"
                 onChange={onChange}
                 required
                 value={peopleMutation.email}
                 placeholder="email"/>
        </div>
        <div className="selectBlock row mb-4">
          <div className="form-group mt-4 col-6">
            <label htmlFor="active" className="me-2"> Active
            </label>
            <input type="checkbox" id="active" checked={check} name="active" onChange={checked}/>
          </div>
          <div className="form-group mt-4 col-6">
            <label htmlFor="roles" className="me-2"> Role </label>
            <select name="roles" id="roles" onChange={onChange} value={peopleMutation.roles}>
              <option value="user" defaultChecked>user</option>
              <option value="editor">editor</option>
              <option value="admin">admin</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">Create</button>
        <button className="btn bg-dark-subtle w-100" onClick={() => setShowModal(true)}>info</button>
      </form>
      <Modal show={showModal} onClose={closeModal}/>
    </>
  );
};

export default PersonalForm;