import React from "react";
import './UpperSection.css'
const UpperSection=()=>{
    return(
        <>
        <section className="container">
                <div className="container-body">
                    <button className="branch-btn"><a href="https://drive.google.com/drive/folders/1b1aACegLbp2we5rLwSRKhhPVINtPw_5H?usp=share_link">First Year</a> </button>
                    <div class="btn-group ">
  <button type="button" class="btn btn-secondary dropdown-toggle branch-btn ece" data-bs-toggle="dropdown" aria-expanded="false">
    ECE
  </button>
  <ul class="dropdown-menu menu">
    <button className="child-btn">

 <a className="ece-link" href="https://drive.google.com/drive/folders/1msJzUZTWU61hJQpLjptXwUjF5WW_zbfi?usp=share_link">Second Year</a>
    </button>
    <button className="child-btn"> <a className="ece-link" href="https://drive.google.com/drive/folders/1AZmp969IFZPRTHmrzH-Mqifv9YkSB49I?usp=share_link">Third Year</a>
    </button>
    <button className="child-btn">

 <a className="ece-link" href="https://drive.google.com/drive/folders/1MDPsy3mRYlzwU4apB3Ih7mvxuyl5nYUV?usp=share_link">Fourth Year</a>
    </button>
    
  </ul>
</div>
           </div>
        </section>
        
        </>
    )
}
export default UpperSection;
