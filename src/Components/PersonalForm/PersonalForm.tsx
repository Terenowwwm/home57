
const PersonalForm = () => {
  return (
    <form action="#">
      <h5>Add Personal</h5>
      <div className="form-group mt-4">
        <label htmlFor="name" className='me-4'> Name </label>
        <input type="text"
               id="name"
               name="name"
               required
               placeholder="Name"/>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="email" className='me-4'> email </label>
        <input type="email"
               id="email"
               name="email"
               required
               placeholder="email"/>
      </div>
      <div className="selectBlock row mb-4">
        <div className="form-group mt-4 col-6">
          <label htmlFor="active" className=''> Active </label>
          <select name="active" id="active ">
            <option value="true">Да</option>
            <option value="false">Нет</option>
          </select>
        </div>
        <div className="form-group mt-4 col-6">
          <label htmlFor="role"> Role </label>
          <select name="role" id="role">
            <option value="user">user</option>
            <option value="editor">editor</option>
            <option value="admin">admin</option>
          </select>
        </div>
      </div>
      <button type='submit' className='btn btn-primary w-100'>Create</button>
    </form>
  );
};

export default PersonalForm;