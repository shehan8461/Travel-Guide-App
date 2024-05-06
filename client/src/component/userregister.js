import react, { useState } from 'react';
import axios from 'axios'
import './userregister.css'



function UserRegsiter(){

    const [formdata,setformdata]=useState({

            name:"",
            place:"",
            ur_location:"",  
            hotel:"",              
            start_date:"",
            end_date:"",
            booking_details:"",
            food_details:""
    })

const handleonchange=(e)=>{
    const {value,name}=e.target
    setformdata((preve)=>{
        return{
            ...preve,
            [name]:value
        }
    })
}

const handlesubmit=async(e)=>{
    e.preventDefault();
    const data=await axios.post("http://localhost:8070/create",formdata)
    console.log(data);
    
var name=document.getElementById("name").value
var place=document.getElementById("place").value
var ur_location=document.getElementById("ur_location").value
var start_date=document.getElementById("start_date").value
var end_date=document.getElementById("end_date").value
var booking_details=document.getElementById("booking_details").value
var food_details=document.getElementById("food_details").value





var ans=document.getElementById("ans")
ans.style.color="red"





try{
if(name==""&&place==""&&ur_location==""&&start_date==""&&end_date==""&&booking_details==""&&food_details=="")throw "please fill the details!"
if(name=="")throw "please enter your name!"
if(place=="")throw "please enter you want place!"
if(ur_location=="")throw "please enter your loaction!"
if(start_date=="")throw "please enter you want start date!"
if(end_date=="")throw "please enter you want end date!"
if(booking_details=="")throw "please enter you want room or hotel side!"
if(food_details=="")throw "please enter your want recipy list!"

if(name==name){
    ans.style.color="green"
   
    throw "successfully account  Created!"
}

    



}catch(err){
    ans.innerHTML="" + err
    
}

// highlight location according to Your place

var sigiriya=document.getElementById("sigiriya")
var pasikuda=document.getElementById("pasikuda")
var mirissa=document.getElementById("mirissa");
var nuwara=document.getElementById("nuwara");
var adams=document.getElementById("adams");
var pinnawala=document.getElementById("pinnawala");
var trinco=document.getElementById("trinco");
var anuradhapura=document.getElementById("anuradhapura")
var jaffna=document.getElementById("jaffna")
var horton=document.getElementById("horton")
var galle=document.getElementById("galle")
var dehiwala=document.getElementById("dehiwala")
var beach=document.getElementById("beach")
var forest=document.getElementById("forest")
var day=document.getElementById("day")
try{

    
    if(place=="sigiriya"){
        sigiriya.style.backgroundColor="green"
    }
    else if(place=="pasikuda"){
        pasikuda.style.backgroundColor="green"
    }
    else if(place=="mirissa"){
       mirissa.style.backgroundColor="green"
    }
    else if(place=="nuwara eliya"){
        nuwara.style.backgroundColor="green"
     }
     else if(place=="adams peak"){
       adams.style.backgroundColor="green"
     }
     else if(place=="pinnawala"){
        pinnawala.style.backgroundColor="green"
      }
      else if(place=="trinco"){
        trinco.style.backgroundColor="green"
      }
      else if(place=="anuradhapura"){
        anuradhapura.style.backgroundColor="green"
      }
      else if(place=="jaffna"){
        jaffna.style.backgroundColor="green"
      }
      else if(place=="horton"){
        horton.style.backgroundColor="green"
      }
      else if(place=="galle"){
       galle.style.backgroundColor="green"
      }
      else if(place=="dehiwala"){
        dehiwala.style.backgroundColor="green"
       }
       else if(place=="beach side"){
        beach.style.backgroundColor="green"
       }
       else if(place=="forest side"){
       forest.style.backgroundColor="green"
       }
       else if(place=="day out"){
        day.style.backgroundColor="green"
        }
        
       
       
       
      



}catch(err){
        sigiriya.style.backgroundColor="white"
        pasikuda.style.backgroundColor="blue"
       mirissa.style.backgroundColor="blue"
       nuwara.style.backgroundColor="blue"
       adams.style.backgroundColor="blue"
       pinnawala.style.backgroundColor="blue"
       trinco.style.backgroundColor="blue"
       anuradhapura.style.backgroundColor="blue"
       jaffna.style.backgroundColor="blue"
       horton.style.backgroundColor="blue"
       galle.style.backgroundColor="blue"
     dehiwala.style.backgroundColor="blue"
     beach.style.backgroundColor="blue"
     forest.style.backgroundColor="blue"
     day.style.backgroundColor="blue"
}


}



    return(
        <div>
            <h2 id="register-topic">Welcome Registration To Travel Life</h2>
            <form id="register-form" onSubmit={handlesubmit}>

    <lable id="lable">Name:</lable>
    <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
    <lable id="lable">What is You Want Place:</lable>
    <input type="text" id="place" name="place" onChange={handleonchange}/><br></br>
    <lable id="lable">Your Location:</lable>
    <input type="text" id="ur_location" name="ur_location" onChange={handleonchange}/><br></br> 

    <lable id="lable">Choose Your Hotel : </lable> <br></br> 
    <select id="hotel" name="hotel" onChange={handleonchange}>
  
      <option>Anantara Peace Haven Tangalle Resort</option>
      <option>innamon Grand Colombo</option>
      <option>Mandarina Colombo</option>
      <option>Granbell Hotel Colombo</option>
      <option>Taj Samudra, Colombo</option>
      <option>Amaya Lake Dambulla</option>
      <option>Le Grand Galle</option>
      <option>The Grand Kandyan Hotel</option>
      <option>Hikka Tranz by Cinnamon</option>
      <option>Galle Face Hotel</option>
      <option>Hotel Sigiriya</option>
      <option>The Golden Ridge Hotel</option>
      <option>Cinnamon Citadel Kandy</option>
      <option>Jetwing Sea</option>
      <option>Jetwing Blue</option>
      <option> Fox Kandy by Fox Resorts</option>
      <option> None</option>

    </select><br></br> 
    <lable id="lable">Start Date:</lable>
    <input type="date" id="start_date" name="start_date" onChange={handleonchange}/><br></br>
    <lable id="lable">End Date:</lable>
    <input type="date" id="end_date" name="end_date" onChange={handleonchange}/><br></br>
    <lable id="lable">How Spend  in Your Place (Room or Kabana) :</lable>
    <input type="text" id="booking_details" name="booking_details" onChange={handleonchange}/><br></br>
    <lable id="lable">What is You Want Food Recipy:</lable>
    <input type="text" id="food_details" name="food_details" onChange={handleonchange}/><br></br>

    <p id="ans"></p>
    <button>submit</button><br></br><br></br>
  <button> <a href="/userdetails">see users details</a></button>  <br></br><br></br>


  <button id="sigiriya"><a  href="https://www.britannica.com/topic/World-Heritage-site">sigiriya</a></button> <t></t>
  <button id="pasikuda"><a  href="https://www.ugaescapes.com/destinations/pasikudah.html">Pasikuda</a></button> <t></t>
  <button id="mirissa"><a  href="https://www.tripadvisor.com/Tourism-g1407334-Mirissa_Southern_Province-Vacations.html">Mirissa</a></button> <t></t>
  <button id="nuwara"><a  href="https://www.tripadvisor.com/Tourism-g608524-Nuwara_Eliya_Central_Province-Vacations.html">Nuwara Eliya</a></button> <t></t>
  <button id="adams"><a  href="https://www.britannica.com/place/Adams-Peak">Adams Peak</a></button><t></t>
  <button id="pinnawala"><a  href="https://www.booking.com/searchresults.en-gb.html?aid=311984&label=elephant-park-9S0kDh9OoIQ_jGKBG5HdQQS393002794279%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-42668025136%3Alp9069789%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXORK0YJiVoOxcWODxYDaAA&gclid=Cj0KCQiAqsitBhDlARIsAGMR1Rh0--CI_HKJCP7e-fsS0agO1LVBsGpqypCvWZNMWbZrdddAukUwrnoaAnSPEALw_wcB&highlighted_hotels=328542&redirected=1&city=-2233731&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=36f80eb6529e7740a13ce74fc749200e">Pinnawala</a></button> <t></t>
  <button id="trinco"><a  href="https://www.tripadvisor.com/Tourism-g424963-Trincomalee_Eastern_Province-Vacations.html">Trincomalee</a></button> <t> </t> <br></br><br></br>
  <button id="anuradhapura"><a  href="https://www.britannica.com/place/Anuradhapura-Sri-Lanka">Anuradhapura</a></button> <t></t>
  <button id="jaffna"><a  href="https://www.britannica.com/place/Jaffna-Sri-Lanka">jaffna</a></button> <t></t>
  <button id="horton"><a  href="https://www.srilankaview.com/horton_plains.htm">Horton Plains </a></button> <t></t> 
  <button id="galle"><a  href="https://www.tripadvisor.com/Tourism-g297896-Galle_Galle_District_Southern_Province-Vacations.html">Galle Fort </a></button> <t></t> 
  <button id="dehiwala"><a  href="https://www.tripadvisor.com/Tourism-g499079-Dehiwala_Mount_Lavinia_Western_Province-Vacations.html">Dehiwala </a></button> <t></t> 
  <button id="beach"><a  href="https://www.holidify.com/collections/beaches-in-sri-lanka">About Beach Side </a></button><br></br><br></br>
  <button id="forest"><a  href="https://www.tripadvisor.com/Attractions-g293961-Activities-c57-t57-Sri_Lanka.html">About Fores Side </a></button> <t></t> 
  <button id="day"><a  href="https://dayoutbooking.com/">About Dayout  Package</a></button> <t></t> 
    </form>
        </div>
    )
}
export default UserRegsiter;