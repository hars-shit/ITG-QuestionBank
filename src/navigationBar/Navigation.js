import './navigation.css'
import collageLogo from './cropped-ITG-LOGO-2-1-446x79.png'    //collageLogo Shown in nav-2
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
function Navigation() {
  const navigate = useNavigate();


  return (
    <div className='main-cont'>

      <nav className="navbar lower navbar-dark bg-light  margin">
        <div className="container-fluid">
          <img src={collageLogo} alt="" />

          {/* Admin modal */}
          <div data-bs-toggle="modal" data-bs-target="#adminModal">
            <RiAdminFill style={{ cursor: "pointer", fontSize: '20px' }} />
          </div>
          <div className="modal fade" id="adminModal" tabindex="-1" aria-labelledby="adminModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="adminModalLabel">Admin Login</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Admin has access to upcoming data, whether to accept or reject the papers.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn " style={{ border: "1px solid " }} data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn " onClick={() => navigate('/admin-login')} data-bs-dismiss="modal" style={{ color: 'white', background: '#a42424' }}>Admin Login</button>
                </div>
              </div>
            </div>
          </div>

          {/* User modal */}
          <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal" data-bs-whatever="@mdo">Add Question Papers</button>

            <div className="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="userModalLabel" style={{color:'#a42424',fontSize:'22px'}}>New message</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>

                      {/* username  */}
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label" style={{color:'#a42424',fontSize:'12px'}}>Name of the Student *</label>
                        <input type="text" className="form-control" id="recipient-name" />
                      </div>
                      {/* branch */}
                      <div>
                       
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label" style={{color:'#a42424',fontSize:'12px'}}>Branch*</label>
                        <div class="input-group">
                          {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
                          <select class="form-select" id="inputGroupSelect01" style={{margin:'0px'}}>
                            <option selected>Choose...</option>
                            <option value="CSE">Computer Science and Engineering</option>
                            <option value="EE">Electrical Engineering</option>
                            <option value="ME">Mechanical Engineering</option>
                            <option value="CE">Civil Engineering</option>
                            <option value="ECE">Electronics and Communication Engineering</option>
                          </select>
                        </div>
                      </div>
                      {/* year  */}
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label" style={{color:'#a42424',fontSize:'12px'}}>Year *</label>
                        <div class="input-group">
                          {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
                          <select class="form-select" id="inputGroupSelect01" style={{margin:'0px'}}>
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                      </div>
                      {/* subject  */}
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label" style={{color:'#a42424',fontSize:'12px'}}>Subject </label>
                        <div class="input-group">
                          {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
                          <select class="form-select" id="inputGroupSelect01" style={{margin:'0px'}}>
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                         {/*add subject  */}
                         <div className="mb-3">
                        <label for="recipient-name" className="col-form-label" style={{color:'#a42424',fontSize:'12px'}}>Add New Subject </label>
                        <div class="input-group">
                        <input type="text" className="form-control" id="recipient-name" />
                        </div>
                      </div>
                      {/* pdf link */}
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label" style={{color:'#a42424',fontSize:'12px'}}>Pdf Link *</label>
                        <input type="text" className="form-control" id="recipient-name" />
                      </div>
                      </div>

                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navigation;
