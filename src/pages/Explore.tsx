
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import '../components/styles/Explore.css';
import { cities } from '../data/cityData';
import { cityInfo, getDefaultCity, CityInfo } from '../data/exploreData';

const Explore = () => {
  const [selectedCity, setSelectedCity] = useState<number>(1); // Default to first city
  const [activeTab, setActiveTab] = useState<string>('hotels');
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const [cityData, setCityData] = useState<CityInfo>(getDefaultCity());
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  useEffect(() => {
    // Load city data when selected city changes
    if (cityInfo[selectedCity]) {
      setCityData(cityInfo[selectedCity]);
      // Reset filters and search
      setSearchTerm('');
      updateFilteredItems('', cityInfo[selectedCity]);
    }
  }, [selectedCity]);

  useEffect(() => {
    // Update filtered items when active tab or search term changes
    updateFilteredItems(searchTerm, cityData);
  }, [activeTab, searchTerm]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(Number(e.target.value));
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const updateFilteredItems = (query: string, data: CityInfo) => {
    const lcQuery = query.toLowerCase();
    let items: any[] = [];

    switch (activeTab) {
      case 'hotels':
        items = data.hotels;
        break;
      case 'places':
        items = data.places;
        break;
      case 'restaurants':
        items = data.restaurants;
        break;
      case 'transportation':
        items = data.transportation;
        break;
      default:
        items = data.hotels;
    }

    if (query) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(lcQuery) || 
        item.description.toLowerCase().includes(lcQuery)
      );
    }

    setFilteredItems(items);
  };

  const getSelectedCityName = () => {
    const city = cities.find(city => city.id === selectedCity);
    return city ? city.name : 'Unknown City';
  };

  return (
    <>
      <Navbar />
      
      <div className="explore-container">
        <Sidebar 
          isVisible={sidebarVisible}
          toggleSidebar={toggleSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <div className={`main-content ${sidebarVisible ? 'content-with-sidebar' : 'content-without-sidebar'}`}>
          <div className="city-selection">
            <h2>Select a City to Explore</h2>
            <select 
              className="city-selector" 
              value={selectedCity} 
              onChange={handleCityChange}
            >
              {cities.map(city => (
                <option key={city.id} value={city.id}>
                  {city.name}, {city.country}
                </option>
              ))}
            </select>
          </div>
          
          <SearchBar 
            onSearch={handleSearch}
            placeholder={`Search in ${activeTab}...`}
          />
          
          <h2 className="info-section-title">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} in {getSelectedCityName()}
          </h2>
          
          <div className="info-grid">
            {filteredItems.map(item => (
              <Card
                key={item.id}
                title={item.name}
                description={item.description}
                image={item.image}
                rating={item.rating}
                buttonText={activeTab === 'transportation' ? 'Details' : 'View'}
                onClick={() => {}}
              />
            ))}
            {filteredItems.length === 0 && (
              <p>No {activeTab} found for this search.</p>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Explore;
