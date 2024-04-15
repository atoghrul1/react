import React,{useState,useEffect} from 'react'
import Product from '../conponents/common/product' 
import {getProductListLimit} from "../utils/productApi"

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    async function getData(){
       const list = await getProductListLimit(5); 
       setProducts(list)
    }
    getData();
  },[])

  return (
    <div>
      {products?.map((item,index) => (
        <Product 
          key={index} 
          id={item?.id}
          img={item?.image}
          title={item?.title}
          price={item?.price}
          description={item?.description}
        />
      ))} 
    </div>
  )
}
