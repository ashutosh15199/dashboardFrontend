import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const ProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      let response = await Axios.get("http://localhost:4000/products");
      
      
      if (response.status === 200) {
        const result = response.data;
        setProduct(result);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  console.warn(product);

  const deleteProduct = async (id) => {
    try {
      let response = await Axios.delete(`http://localhost:4000/product/${id}`);
      if (response.status === 200) {
        const result = response.data;
        getProduct();
        console.log(result);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

   const searchHandle=async(e)=>{
    try{
      let key=e.target.value;
      
     
        let response=await Axios.get(`http://localhost:4000/search/${key}`);
        // 
        if(response.status === 200){
         const result = response.data;
        console.log(result);
        if(response){
          setProduct(result);
        }
      }
      else{
        getProduct();
      }
    }catch(e){
      console.log(e.message);
    }
    
   }

  return (
    <div className="product">
      <h3>ProductList</h3>
      <input className="Box" type="text" name=""  placeholder="Enter the projectname" onChange={searchHandle}/>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {product.length>0 ?product.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to={`/update/${item._id}`}>Update</Link>
          </li>
        </ul>
      )):<h1>No Product</h1>
    }
       
    </div>
  );
};

export default ProductList;
