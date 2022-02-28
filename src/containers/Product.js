



/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProduct } from "../actions/ProductActions";
import { useEffect } from "react";
//import {useParams,useLocation}  from 'react-router-dom'
import _ from "lodash";
const Product = (props) => {
 // const {title}=useParams();
// const loc=useLocation();
// console.log()
 const product = props.match.params.product
 
 
 console.log(product)
 
 
  const dispatch = useDispatch();
 
 const product1 = useSelector((state) => state.Product);
 console.log(product1.data[product])

 useEffect(() => {
  dispatch(GetProduct(product))
 
// console.log(product1)
},[dispatch]);
 
 const handleSubmit=(e)=>{
   e.preventDefault()
   console.log("form submitted")

 }

const showData=()=>{

  if (!_.isEmpty(product1.data[product])) {
   // const pokeData = product1.dat[product]
    return(
     <>
  <h2>{product1.data[product].id}</h2>
  <h2>Name:{product1.data[product].title}</h2>
  <img src={product1.data[product].image} 
  height="200px" width="200px"
  alt="kk"/>
  <h2>Price: {product1.data[product].price}</h2>

  <form onSubmit={handleSubmit}>
    <label>Title</label><be/>
    <input type="text" value={product1.data[product].title}/><br/>
    <label>Category</label><be/>
    <input type="text" value={product1.data[product].category}/><br/>
    <label>Price</label><be/>
    <input type="number" value={product1.data[product].price}/><br/>
  </form>
      </>

    )

  
  }

}
  return (
    <div className={"poke"}>
   {showData()}
       
    </div>)

  }


export default Product;