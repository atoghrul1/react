import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import classNames from 'classnames';
import styles from './footer.module.css';
import logo from '../footer/Bowow_Logo_Footer_1.avif';

const Footer = () => {
  return (
    <div className={classNames(styles.footer)}>
      <div className={classNames(styles.footer_up)}>
        <div className={classNames(styles.footer_up_Aside)}>
          <div className={classNames(styles.footer_logoContainer)}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          <p>Cras eu pulvinar felis, vitae aliquet metus. 
           <br /> Class aptent taciti sociosqu ad 
            litora torquentper.</p>
          <div className={classNames(styles.contactInfo)}>
            <div className={classNames(styles.contactItem)}>
            <div className={classNames(styles.contactItem_logo)}>
              <img src="" alt="" />
            </div>
              <span>1234567890</span>
            </div>
            <div className={classNames(styles.contactItem)}>
            <div className={classNames(styles.contactItem_logo)}>
              <img src="" alt="" />
            </div>
              <span>example@mail.com</span>
            </div>
            <div className={classNames(styles.contactItem)}>
            <div className={classNames(styles.contactItem_logo)}>
              <img src="" alt="" />
            </div>
              <span>www.example.com</span>
            </div>
          </div>
          <div className={classNames(styles.socialIcons)}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className={classNames(styles.footer_up_center)}></div>
        <div className={classNames(styles.footer_up_Bside)}></div>
      </div>
      <div className={classNames(styles.footer_down)}></div>
    </div>
  );
}

export default Footer;
