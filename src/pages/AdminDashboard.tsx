
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/styles/AdminDashboard.css';
import { cities } from '../data/cityData';
import { cityInfo } from '../data/exploreData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('places');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simple logout - just redirect to login page
    navigate('/admin');
  };

  // Get all items across all cities for the active tab
  const getAllItems = () => {
    let allItems: any[] = [];
    
    Object.values(cityInfo).forEach((city, index) => {
      const cityName = cities[index]?.name || 'Unknown';
      
      switch (activeTab) {
        case 'places':
          allItems = [...allItems, ...city.places.map(item => ({...item, city: cityName}))];
          break;
        case 'hotels':
          allItems = [...allItems, ...city.hotels.map(item => ({...item, city: cityName}))];
          break;
        case 'restaurants':
          allItems = [...allItems, ...city.restaurants.map(item => ({...item, city: cityName}))];
          break;
        default:
          break;
      }
    });
    
    return allItems;
  };

  const renderTableHeaders = () => {
    switch (activeTab) {
      case 'places':
      case 'hotels':
      case 'restaurants':
        return (
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Rating</th>
            {activeTab !== 'places' && <th>Price</th>}
            <th>Actions</th>
          </tr>
        );
      default:
        return null;
    }
  };

  const renderTableRows = () => {
    const items = getAllItems();
    
    return items.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.city}</td>
        <td>{item.rating}</td>
        {activeTab !== 'places' && <td>{item.price || 'N/A'}</td>}
        <td>
          <button className="action-button">Edit</button>
          <button className="action-button delete">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Navbar />
      
      <div className="admin-dashboard">
        <div className="admin-header">
          <h1 className="admin-title">Admin Dashboard</h1>
          <button className="admin-logout" onClick={handleLogout}>Logout</button>
        </div>
        
        <div className="admin-tabs">
          <div 
            className={`admin-tab ${activeTab === 'places' ? 'active' : ''}`}
            onClick={() => setActiveTab('places')}
          >
            Tourist Places
          </div>
          <div 
            className={`admin-tab ${activeTab === 'hotels' ? 'active' : ''}`}
            onClick={() => setActiveTab('hotels')}
          >
            Hotels
          </div>
          <div 
            className={`admin-tab ${activeTab === 'restaurants' ? 'active' : ''}`}
            onClick={() => setActiveTab('restaurants')}
          >
            Restaurants
          </div>
        </div>
        
        <div className="admin-content">
          <button className="admin-add-button">
            + Add New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
          </button>
          
          <table className="data-table">
            <thead>
              {renderTableHeaders()}
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AdminDashboard;
