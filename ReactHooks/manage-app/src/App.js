import Employeelist from './components/EmployeeList';

function App() {
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{' '}
                    <span>Add New Employee</span>
                  </a>
                </div>
              </div>
            </div>

            <Employeelist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
