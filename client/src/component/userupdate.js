import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './userupdate.css'

function UserUpdate(){
    const { id } = useParams();

    const [userData, setUserData] = useState({
      
        name:"",
        place:"",
        ur_location:"",   
        hotel:"",             
        start_date:"",
        end_date:"",
        booking_details:"",
        food_details:""
    
        
      });
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:8070/user/${id}`);
          const data = await response.json();
          console.log(data);
  
          if (data.success) {
            setUserData(data.data);
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, []);
    const handleInputChange = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:8070/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: userData._id,
              ...userData,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('User updated successfully');
          alert("updated successfully")

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


return(
    <div className='update'>
  
    <lable>Name:</lable>
    <input type="text" id="name" name="name" onChange={ handleInputChange} value={userData?.name}/><br></br>
    <lable>What is You Want Place:</lable>
    <input type="text" id="place" name="place" onChange={ handleInputChange} value={userData?.place}/><br></br>
    <lable>Your Location:</lable>
    <input type="text" id="ur_location" name="ur_location" onChange={ handleInputChange} value={userData?.ur_location}/><br></br> 
    <lable id="lable">Choose Your Hotel : </lable> <br></br> 
    <select id="hotel" name="hotel" onChange={handleInputChange} value={userData?.hotel}>
  
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
    
    <lable>Start Date:</lable>
    <input type="text" id="start_date" name="start_date" onChange={ handleInputChange} value={userData?.start_date}/><br></br>
    <lable>End Date:</lable>
    <input type="text" id="end_date" name="end_date" onChange={ handleInputChange} value={userData?.end_date}/><br></br>
    <lable>How Spend  in Your Place (Rooma or Kabana ) :</lable>
    <input type="text" id="booking_details" name="booking_details" onChange={ handleInputChange} value={userData?.booking_details}/><br></br>
    <lable>What is You Want Food Recipy:</lable>
    <input type="text" id="food_details" name="food_details" onChange={ handleInputChange} value={userData?.food_details}/><br></br>

   
      <button onClick={handleUpdate}>update </button>
      
    </div>
)

}
export default UserUpdate