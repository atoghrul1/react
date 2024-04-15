import React,{useState} from 'react'
import styles from './style.module.css';
import useStore from '../../../utils/store';

export default function Offcanvas() { 
    const { isOffcanvasOpen, closeOffcanvas } = useStore(state => ({
        isOffcanvasOpen: state.isOffcanvasOpen,
        closeOffcanvas: state.closeOffcanvas
      }));

      const {products,removeProduct,increaseQuantity,decreaseQuantity} = useStore(state => ({
        products:state.products,
        removeProduct:state.removeProduct,
        increaseQuantity:state.increaseQuantity,
        decreaseQuantity:state.decreaseQuantity
    }));

if (!isOffcanvasOpen) return null;
    return (
        <div> 
            <div className={isOffcanvasOpen ? `${styles.offcanvas} ${styles.open}` : styles.offcanvas}>
                <div className={styles.content}>
                    <span>    
                         <p >This is the offcanvas content!</p>
                        <span onClick={closeOffcanvas}>x</span>
                    </span> 
                 <hr />
                          {products?.map((item,index) => (
                               <div>
                               <span>
                               <img src={item.img} width={100}/>
                               </span>
                               <span>{item.title}</span>
                               <span>{item.price}</span>#
                               <span>{item.qty}</span>
                               <button onClick={() => increaseQuantity(item.id)}>+</button>
                             <button onClick={() => decreaseQuantity(item.id)}>-</button>
                               <button onClick={()=>removeProduct(item.id)}>x</button> 
                           </div> 
                        ))} 
                </div>
            </div>
        </div>
    );
}