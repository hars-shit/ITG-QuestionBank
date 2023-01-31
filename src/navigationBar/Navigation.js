import './navigation.css'
import collageLogo from './cropped-ITG-LOGO-2-1-446x79.png'    //collageLogo Shown in nav-2
import {FcMenu} from "react-icons/fc"
import {GrFormClose} from "react-icons/gr"
import {MdMenuBook} from "react-icons/md"
import FooterIcons from './Footer/FooterIcons'
import {AiFillCaretRight} from "react-icons/ai"

// import MenuFotter from './MenuFotter.js'
// Second Navigation Bar 
function Navigation(){
return(
    <div className='main-cont'>

{/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid d-flex luis">
    <img src={collageLogo} alt="" /> */}
 
 <nav className="navbar lower navbar-dark bg-light  margin">
  <div className="container-fluid">
  <img src={collageLogo} alt="" /> 
    <button className="navbar-toggler   btn btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler  "><FcMenu className='iconReact'  /></span>
    </button>
    <div className="offcanvas offcanvas-end  " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
      <div>
        <button type="button" className='closeButton' data-bs-dismiss="offcanvas" ><GrFormClose style={{fontSize:"2.3rem",float:"left"}} data-bs-dismiss="offcanvas" className='closeButton'/></button>
        </div>
        <div style={{marginLeft: "3.5rem"}}>
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><MdMenuBook style={{color:"brown",fontSize:"1.5rem"}} />SAMPLE PAPERS </h5>
      </div>
      </div>

      {/* horizental line  */}
      <div id='horizentalLine'><hr /></div>
      
      <div className="offcanvas-body ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          
          <li className="nav-item dropdown ">
            <a className="nav-link branches  dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Computer Science Engineering 
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Second Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Third Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Fourth Year</a></li>
              
            
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link branches dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Civil Engineering
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Second Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Third Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Fourth Year</a></li>
              
            
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link branches dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mechanical Engineering
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Second Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Third Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Fourth Year</a></li>
              
            
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link branches dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Electrical Engineering
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Second Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Third Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Fourth Year</a></li>
              
            
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link branches dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Electronics and Comm. Engineering
            </a>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Second Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Third Year</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/"><AiFillCaretRight /> Fourth Year</a></li>
              
            
            </ul>
          </li>
        </ul>
      
      </div>
    <FooterIcons />
{/* <MenuFotter /> */}
<main />
    </div>
  </div>
</nav>

  </div>
// </nav>
//    </div>
)
}
export default Navigation;