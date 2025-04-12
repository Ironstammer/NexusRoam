
import React from 'react';
import './styles/Sidebar.css';

interface SidebarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ isVisible, toggleSidebar, activeTab, setActiveTab }: SidebarProps) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isVisible ? '×' : '☰'}
      </button>
      
      <div className={`sidebar ${isVisible ? '' : 'sidebar-hidden'}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">City Information</div>
          <button className="sidebar-close" onClick={toggleSidebar}>×</button>
        </div>
        
        <div className="sidebar-menu">
          <div 
            className={`sidebar-item ${activeTab === 'hotels' ? 'active' : ''}`}
            onClick={() => handleTabClick('hotels')}
          >
            Hotels
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'places' ? 'active' : ''}`}
            onClick={() => handleTabClick('places')}
          >
            Tourist Places
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'restaurants' ? 'active' : ''}`}
            onClick={() => handleTabClick('restaurants')}
          >
            Restaurants
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'transportation' ? 'active' : ''}`}
            onClick={() => handleTabClick('transportation')}
          >
            Transportation
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
