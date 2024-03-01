import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import axios from 'axios'
import { useEffect } from 'react';
const AdminPanel = () => {
   
   const fetchData=async()=>{
      try{
        let data=await axios.get('https://question-bank-backend-1.onrender.com/api/all');
        console.log("data",data)
      }
      catch(error){
        console.log(error)
      }
  
    }
  
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div style={{marginTop:'20px',padding:'10px',height:'70%'}}>
    <div style={{height:'100%',padding:"10px",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
     
     {/* for heading  */}
     <div>
        <div style={{fontSize:'18px',fontWeight:600}}>View or Reject Question-Papers</div>
     </div>

     {/* for scrollable data  */}
     <div style={{padding:'10px'}}>

        <div style={{width:"fit-content",padding:'20px',background:'white',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
           <div style={{width:"fit-content",fontWeight:'600',fontSize:'18px',padding:"5px",borderRadius:'5px'}}>New Request</div>
            <div>Branch : <span style={{fontSize:"14px",fontWeight:"500",color:"rgb(164, 18, 18)"}}>Computer Science & Engineering</span></div>
            <div>Year : <span style={{fontSize:"14px",fontWeight:"500",color:"rgb(164, 18, 18)"}}>4</span></div>
            <div>Subject : <span style={{fontSize:"14px",fontWeight:"500",color:"rgb(164, 18, 18)"}}>Operating System</span></div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <button style={{display:"flex",alignItems:"center",marginTop:"10px",border:'1px solid',borderRadius:'5px'}}><FaRegEye style={{marginRight:'5px'}}/> View Pdf</button>
                <button style={{background:"rgb(164, 18, 18)",color:'white',display:"flex",alignItems:"center",border:'1px solid',marginTop:'10px',borderRadius:"5px"}}><MdClear style={{fontSize:"22px"}}/> Reject</button>
                <button style={{display:"flex",alignItems:"center",background:"#271c88e8",marginTop:'10px',color:"white",borderRadius:"5px"}}><MdOutlineLibraryAdd style={{fontSize:"18px",marginRight:'5px'}}/>Accept</button>
            </div>
        </div>

     </div>
    </div>
    </div>
  )
}

export default AdminPanel
