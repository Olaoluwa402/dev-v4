import React from 'react';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import Sidebar from '../components/Sidebar/Sidebar';
import './Home.css';

const Home = () => {
    return (
      <div className="Main">
        <div className="Side">
          <Sidebar />
        </div>
        <div className="Hero">
          <div className="Header">
            <Header />
          </div>
          <div className='Content'>
            <MainContent />
          </div>
        </div>
      </div>
    );
}
 
export default Home;