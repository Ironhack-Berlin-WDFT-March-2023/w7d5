import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleHeadlineChange = (e) => setHeadline(e.target.value);

  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    // Prevent page reload on submit    
    e.preventDefault();
    // Create the body for the POST request    
    const body = { title: headline, pricePerDay: price, img: image };
    
    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        setPrice(1);
      
        // Navigate to the `/` page
        navigate('/');
      });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="headline" onChange={handleHeadlineChange} value={headline}/>

        <label>Price per Day</label>
        <input type="number" name="pricePerDay" onChange={handlePriceChange} value={price}/>
        
        <label htmlFor="image">Image</label>
        <input type="text" name="image" value={image} onChange={handleImageChange} />

        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;