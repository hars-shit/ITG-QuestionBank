import React from 'react'
import { BsFacebook } from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import './FooterIcons.css'
 function FooterIcons() {
  return (
    <>
    <div className='icon-holder'>
      <div className='horiLine'><hr /></div>
      <div className='icons'>

        <div>
     <p> @ 2023 ITGopeshwar</p>
     </div>
    <a href="https://www.facebook.com/profile.php?id=100057266575783" id='faceIcon'><BsFacebook style={{color:"#5f1e1e",fontSize:"21px"}}/></a>
    <a href="mailto:itgopeshwar@gmail.com" id='mailIcon'><GrMail style={{color:"#5f1e1e",fontSize:"23px"}}/></a>
    <a href="https://www.instagram.com/itgopeshwar/" id='instaIcon'><AiFillInstagram style={{color:"#5f1e1e",fontSize:"23px"}}/></a>
    <a href="https://github.com/hars-shit/Question-Bank-IT-Gopeshwar" id='gitIcon'><AiFillGithub style={{color:"#5f1e1e",fontSize:"23px"}}/></a>
    </div>

    </div>


      
    </>
  )
}
export default FooterIcons;
