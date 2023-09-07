import React, {useContext} from 'react'
import Blog from '../Components/Blogs/Blogs';
import { GlobalContext } from '../contextparked';
import styles from '../Components/AboutPage/AboutPage.module.css'


const AboutPage = () => {

  const { blogData } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <Blog blogData={blogData}/>
    </div>
  )
}

export default AboutPage;
