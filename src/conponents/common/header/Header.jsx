import React,{useState} from 'react';
import classNames from 'classnames';
import styles from './header.module.css';
import { SlEnvolopeLetter } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { MdOutlineArrowDropDown } from "react-icons/md";
import uplogo from'./Bowow_Logo_Design_1.avif';
import { FaRegHeart } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import useStore from '../../../utils/store';
import "./Poppins-Regular.ttf";
import zIndex from '@mui/material/styles/zIndex'; 
import Offcanvas from '../offcanvas' 

const Header = () => {
  const openOffcanvas = useStore(state => state.openOffcanvas);

  const productCount = useStore(state => state.count);
  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.header_up)}>
        <div className={classNames(styles.header_up_contacts)}>
          <a href="" className={classNames(styles.header_up_contacts_mail)}>
            <SlEnvolopeLetter className={classNames(styles.header_up_contacts_mail_icon)} />
            <p>supportblock@gmail.com</p>
          </a>
          <a href="" className={classNames(styles.header_up_contacts_phone)}>
            <TiMessages className={classNames(styles.header_up_contacts_phone_icon)} />
            <p>+91 987654321</p>
          </a>
        </div>
        <div className={classNames(styles.header_up_search)}>
          <input type="text" placeholder='Search' className={classNames(styles.header_up_search_item)} />
        </div>
        <div className={classNames(styles.header_up_soscials)}>
          <div className={classNames(styles.header_up_soscials_icons)}>
            <a href=""><SlSocialTwitter /></a>
            <a href=""><SlSocialPintarest /></a>
            <a href=""><SlSocialInstagram /></a>
            <a href=""><SlSocialFacebook /></a>
            <a href="">|</a>
            </div>
            
            <a href="">English 
            <MdOutlineArrowDropDown />
            </a>
        </div>
      </div>
      <div className={classNames(styles.header_down)}>
        <div className={classNames(styles.header_down_logo)}>
          <img src={uplogo} alt="" />
        </div>
        <ul className={classNames(styles.header_down_nav)}>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Grooming</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Pages</a></li>
        </ul>
        <div className={classNames(styles.header_down_selling)}>
          <a href=""><FaRegHeart  className={classNames(styles.header_down_selling_icon)}/></a>
          <a href=""><GrUpdate className={classNames(styles.header_down_selling_icon)} /></a>
          <span onClick={openOffcanvas} ><BsHandbag className={classNames(styles.header_down_selling_icon)} />{productCount}</span>
          <Offcanvas />
        </div>
      </div>
    </div>
  )
}

export default Header
