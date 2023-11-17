import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Bread from '../components/Bread/Bread';


export default function Product(props) {
  

 const {all_product} = useContext(ShopContext);
 const {productId} = useParams();

 
 

 
   



  return (
    <div>
    <Bread  />

    </div>
  )
}
