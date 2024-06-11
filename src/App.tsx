
import {useState} from 'react';
import ToolBar from './Components/ToolBar/ToolBar';
import PersonalForm from './Components/PersonalForm/PersonalForm';
import {User} from '../types';
import Person from './Components/Person/Person';
import './App.css'
import Alert from './Components/Alert/Alert';

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'john@gmail.com', active: true, roles: 'admin'},
    {id: '2', name: 'Stock', email: 'LAcoste@gmail.com', active: false, roles: 'user'},
    {id: '3', name: 'Manjas', email: 'Lalafo@gmail.com', active: true, roles: 'admin'},
    {id: '4', name: 'Drake', email: 'Dron@gmail.com', active: true, roles: 'admin'}
  ]);
  const addPerson = (user:User) =>{
    setUsers((prev) => [...prev, user]);
  }
  const cancelAlert = () =>{
    setShowAlert(false);
  }
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className='container-fluid'>
        <Alert show={showAlert} type="danger" onDismiss={() => {cancelAlert()}}/>
        <Alert show={showAlert2} type="success"/>

        <div className="row">
          <div className="d-flex col-6 mt-4 border border-primary p-4 w-style">
            <PersonalForm onSubmit={addPerson}/>
          </div>
          <div className="col-6 mt-4 border border-secondary-subtle p-4">
            <Person users={users}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
