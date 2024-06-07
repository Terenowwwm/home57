
import './App.css'
import ToolBar from './Components/ToolBar/ToolBar';
import PersonalForm from './Components/PersonalForm/PersonalForm';

function App() {

  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className='container-fluid'>
        <div className="row">
          <div className="d-flex col-6 mt-4">
            <PersonalForm/>
          </div>
          <div className="col-6">
          </div>
        </div>
      </main>
    </>
  )
}

export default App
