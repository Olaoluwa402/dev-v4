import React from 'react';
import styles from './Header.module.css';
import {FaUserFriends} from 'react-icons/fa';
import {HiBell} from 'react-icons/hi';
import {PiFinnTheHumanDuotone} from 'react-icons/pi';
import { BsSearch } from 'react-icons/bs';

const Header = () => {

  
    return (
      <div className={styles.container}>
        <BsSearch className={styles.search} />
        <div className={styles.header}>
          <FaUserFriends />
          <HiBell />
          <div className={styles.pic}>
            <PiFinnTheHumanDuotone className={styles.iconstyle} />
          </div>
        </div>
      </div>
    );
}
 
export default Header;