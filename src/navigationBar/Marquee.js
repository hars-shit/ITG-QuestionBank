// Using CSS animations instead of Marquee 
import './Marquee.css'
// import {GrAnnounce} from "react-icons/gr"
function Marquee(){
    return(
        <div className='marquee' >
            <div  className='text-wrapper'>
                <div className='announcement-div'>
                   📢
                </div>
             <div className='text'>
                <span id='text-1'>Data is being uploaded on regular basis</span>
                <span id='text-2'>PAPERS CONTAINING ALL THE PREVIOUS & CURRENT SYLLABUS DATA </span>
                  </div>
      </div>
</div>
    )
}
export default Marquee;