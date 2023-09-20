/* eslint-disable no-unreachable */
import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Axios  from 'axios';
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigation = useNavigate();
  useEffect(()=>{
    const getUpdateProduct=async()=>{
      console.log(params);
      try{
        let response = await Axios.get(`http://localhost:4000/product/${params.id}`);
        if(response.status===200){
          const result = response.data;
          setName(result.name);
          setPrice(result.price);
          setCategory(result.category);
          setCompany(result.company);
        }
      }catch(e){
        console.log(e.message);
      }
      
  
    }
    if(params.id && (name==="" && price==="" && company==="" && company==="")){

      getUpdateProduct();
    }
  },[name,price,category,company,params]);

 

  const updateProduct = async () => {
    try{
      console.log(name, price, category, company);

      let response = await Axios.put(
        `http://localhost:4000/product/${params.id}`,
           JSON.stringify({ name,price,category,company }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200 || response.status === 201) {
        const result = response.data;
        console.log(result);
        console.log("successfully updated:");
        navigation('/');
      } else {
        console.log("error");
      }

      
    }catch(e){
        console.log(e.message)
    }
  
  }
  return (
    <div className="product">
      <h1>UpdateProduct</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inputBox"
      />
      <input
        type="text"
        placeholder="Enter Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="inputBox"
      />

      <input
        type="text"
        placeholder="Enter Product category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="inputBox"
      />

      <input
        type="text"
        placeholder="Enter Product company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="inputBox"
      />

      <button onClick={updateProduct} className="btn">
        UpdateProduct
      </button>
    </div>
  );
};

export default UpdateProduct;