
import { useEffect, useState } from 'react'
import axios from 'axios'



 const QuesRefrence = ({year, curYear}) => {
        const [second_year_data,setSecondYearData]=useState([]);
        const [third_year_data,setThirdYearData]=useState([]);
        const [fourth_year_data,setFourthYearData]=useState([]);
       
        let URI_SECOND_YEAR=`https://questionbank-backend.up.railway.app/second/${year}/${curYear}`;
        let URI_THIRD_YEAR=`https://questionbank-backend.up.railway.app/third/${year}/${curYear}`;
        let URI_FOURTH_YEAR=`https://questionbank-backend.up.railway.app/fourth/${year}/${curYear}`;

        useEffect(()=>{
            const fetchData=async()=>{
                try{
                    let reponse=await axios.get(URI_SECOND_YEAR);
                    setSecondYearData(reponse.data);
                    
                }
                catch(error){
                    console.log("error in axios",error)
                }
            }
            fetchData();
        },[URI_SECOND_YEAR])
        useEffect(()=>{
            const fetchData=async()=>{
                try{
                    let reponse=await axios.get(URI_THIRD_YEAR);
                    setThirdYearData(reponse.data);
                    
                }
                catch(error){
                    console.log("error in axios",error)
                }
            }
            fetchData();
        },[URI_THIRD_YEAR])
        useEffect(()=>{
            const fetchData=async()=>{
                try{
                    let reponse=await axios.get(URI_FOURTH_YEAR);
                    setFourthYearData(reponse.data);
                    
                }
                catch(error){
                    console.log("error in axios",error)
                }
            }
            fetchData();
        },[URI_FOURTH_YEAR])
// internal css 
    const Styles={
        subject:{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"row",
            marginTop:"6px",
            gap:"16px",
            marginRight:"12px",
            border:"1px solid #b0b0c9",
            marginLeft:"12px",
            // backgroundColor:"rgb(219 237 255)",
            cursor:"pointer",
            // backgroundColor:isHovering ? "brown" : "rgb(219 237 255)"   
           
        },
        
        
        li:{
            margin:"4px 0",
            listStyleType:"none", 
            padding:"1px 8px",
            
            "&:hover":{
                color:"white",
                backgroundColor:"brown",
             },
            
        },
        
        a:{
            fontSize:"14px",
            fontWeight:700,
            color:"black",
            // color:isHovering ? "white":"black",
            fontFamily:"Crete Round', serif",
            textDecoration:"none"
        }

    }
    return(
        
        <>
 {
        (year === "2" && curYear === "cse") &&
        
       second_year_data.map((c)=>{
            console.log('subj',c.sub)
            return (
                <div className='subject' style={Styles.subject}  >

               <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
     {
        (year === "2" && curYear === "ce") &&
        
        second_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

               <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
     {
        (year === "2" && curYear === "me") &&
        
        second_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

               <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
     {
        (year === "2" && curYear === "ee") &&
        
       second_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

               <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
        


    {/* for 3rd year....... */}
 {
         (year === "3" && curYear === "cse") &&
         third_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject} >
                     <li style={Styles.li}>
                <a style={Styles.a} href={c.link}>{c.sub}</a></li>
        
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ce") &&
        third_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "me") &&
        third_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ee") &&
        third_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
       


    {/* for 4 year........ */}

    {
        (year === "4" && curYear === "cse") &&
        fourth_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ce") &&
        fourth_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "me") &&
        fourth_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ee") &&
        fourth_year_data.map((c)=>{
            return (
                <div className='subject' style={Styles.subject}  >

                <li style={Styles.li}>
                 <a style={Styles.a} href={c.link}>{c.sub}</a></li>
         
                 </div>
            )
        })
        
    }
      
      </>
  )
}

export default QuesRefrence