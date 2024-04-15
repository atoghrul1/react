import './style.module.css';
import React from 'react'
import useStore from '../../../utils/store';
export default function Product({
    id,
    img,
    title,
    description,
    price,
    rating
}) {
    const addProduct = useStore(state => state.addProduct);
    const handleAdd = (e)=>{
        e.preventDefault();
        addProduct({ id, title,img, price: parseFloat(price) });
    }

  return (
    <div>
        <span>
        <img src={img} width={100}/>
        </span>
        <span>{title}</span>
        <span>{price}</span>
        <span>{rating}</span>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
