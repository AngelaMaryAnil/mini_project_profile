import React from 'react';
import './Profile.css';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
  const farmer = {
    name: 'John Doe',
    position: 'Organic Farmer | Sustainable Agriculture Expert',
    location: 'Springfield, USA',
    experience: '20 years',
    bio: 'John Doe is a seasoned farmer with over 20 years of experience in traditional farming. He specializes in organic farming and sustainable agriculture.',
    image: 'https://via.placeholder.com/150',
    crops: ['Wheat', 'Corn', 'Soybeans', 'Vegetables'],
    contact: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    state: 'Illinois',
    district: 'Sangamon'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="cover-photo"></div>
        <div className="profile-info">
          <img src={farmer.image} className="profile-image" alt=""/>
          <div className="profile-details">
            <h1>{farmer.name}</h1>
            <h2>{farmer.position}</h2>
            <p>{farmer.location}</p>
            <div className="profile-actions">
              <button className="follow-btn"><FaEdit /> Edit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-body">
        <h2>About</h2>
        <p>{farmer.bio}</p>
        <h2>Experience</h2>
        <p><strong>Years of Experience:</strong> {farmer.experience}</p>
        <h2>Contact Information</h2>
        <p><strong>Phone Number:</strong> {farmer.phoneNumber}</p>
        <p><strong>Email:</strong> {farmer.contact}</p>
        <h2>Location</h2>
        <p><strong>State:</strong> {farmer.state}</p>
        <p><strong>District:</strong> {farmer.district}</p>
        <h2>Crops</h2>
        <ul>
          {farmer.crops.map((crop, index) => (
            <li key={index}>{crop}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;