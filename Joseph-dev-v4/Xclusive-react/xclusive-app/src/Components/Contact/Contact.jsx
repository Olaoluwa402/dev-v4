import React from 'react'
import styles from './Contact.module.css'
import Advert from '../Advert/Advert'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import CountDownTimer from '../Home/CountDownTimer/CountDownTimer'

const Contact = () => {
  return (
    <div className={styles.container}>
       <Advert />
       <Navigation />
       <div className={styles.page_title}>
          <h4>Home</h4>
          <h4>/</h4>
          <p>Cart</p>
        </div>
        <section className={styles.hero}>
            <div>
                <div>

                </div>
                <h5></h5>
                <h5></h5>
                <hr/>
                <div></div>
                <h5></h5>
                <h5></h5>
                <h5></h5>
            </div>
            <div>
                <div>
                    <input type='text' placeholder='Your Name' value={""} id=''></input>
                    <input type='email' placeholder='Your Email' value={""} id=''></input>
                    <input type='number' placeholder='Your Phone' value={""} id=''></input>
                </div>
                <div>
                <input type='textarea' placeholder='Your Message' value={""} id=''></input>
                </div>

            </div>

        </section>
        <Footer />
    </div>
  )
}

export default Contact