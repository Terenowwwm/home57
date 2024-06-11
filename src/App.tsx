
import {useState} from 'react';
import ToolBar from './Components/ToolBar/ToolBar';
import PersonalForm from './Components/PersonalForm/PersonalForm';
import {User} from '../types';
import Person from './Components/Person/Person';
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'john@gmail.com', active: true, roles: 'admin'},
    {id: '2', name: 'Stock', email: 'LAcoste@gmail.com', active: false, roles: 'user'},
    {id: '3', name: 'Manjas', email: 'Lalafo@gmail.com', active: true, roles: 'admin'},
    {id: '4', name: 'Drake', email: 'Dron@gmail.com', active: true, roles: 'admin'}
  ]);
  const addPerson = (user:User) =>{
    setUsers((prev) => [...prev, user]);
  }
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className='container-fluid'>
        <div className="row">
          <div className="d-flex col-4 mt-4 border border-primary p-4 w-style">
            <PersonalForm onSubmit={addPerson}/>
          </div>
          <div className="col-4 mt-4 border border-secondary-subtle p-4">
            <Person users={users}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
