import  { useEffect, useState } from 'react'
import axios from "axios"
import './userdetails.css'


function UserDetails(){
const [datalist,setdatalist]=useState([])

const fetchdata=async()=>{
    try{

        const data=await axios.get("http://localhost:8070/")
        console.log(data.data.success)
        if(data.data.success){
           setdatalist(data.data.data)
        }
       
    }catch(err){
            alert(err)
    }
}

useEffect(()=>{
   fetchdata()   
},[])




const handledelete=async(id)=>{
const data=await axios.delete("http://localhost:8070/delete/"+id) 
if(data.data.success){
    fetchdata();
    console.log(data.data.message);
    alert("delete data successful");
}
}

    return(
        <div>
<h2>Registered Users List</h2>
            <table id="user-details">
                <tr>
                <th>Name</th>
                <th>Place </th>
                <th>Your Location </th>
                <th>Your Hotel </th>
                <th>Start Date </th>
                <th>End Date </th>
                <th>Booking Details </th>
                <th>Food Details</th>
                <th>Choose Option</th>
                 </tr>

                 
                 <tbody>
                            { 
                               datalist.map((e1)=>{
                                return(
                                    <tr> 
                                      <td> {e1.name}</td> 
                                      <td> {e1.place}</td> 
                                      <td> {e1.ur_location}</td> 
                                      <td> {e1.hotel}</td> 
                                      <td> {e1.start_date}</td>
                                      <td> {e1.end_date}</td>
                                      <td> {e1.booking_details}</td>
                                      <td> {e1.food_details}</td>
                                      


                                      <td>
                                       <button> <a href={`/update/${e1._id}`}> edit </a> </button> <br></br><br></br>
                                        <button onClick={()=>handledelete(e1._id)}> delete </button>
                                      </td>
                                    </tr>
                                )

                        })
                            }
                        </tbody>
            </table>

        </div>
    )
}
export default UserDetails;