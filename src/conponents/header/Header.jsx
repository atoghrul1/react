import React from 'react';
import classNames from 'classnames';
import styles from './header.module.css';


const Header = () => {
  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.header_up)}>
        <div className={classNames(styles.header_up_contacts)}>222222</div>
        <div className={classNames(styles.header_up_search)}>33333333</div>
        <div className={classNames(styles.header_up_soscials)}>4444444444</div>
      </div>
      <div className={classNames(styles.header_down)}>
        <div className={classNames(styles.header_down_logo)}></div>
        <ul className={classNames(styles.header_down_nav)}>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Grooming</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Pages</a></li>
        </ul>
        <div className={classNames(styles.header_down_selling)}></div>
      </div>
    </div>
  )
}

export default Header
