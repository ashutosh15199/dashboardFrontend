/* eslint-disable no-unreachable */
import React, { useState } from "react";
import  Axios from 'axios';
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);


  const addProduct = async () => {
    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.log(name, price, category, company);
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    try{
      let response = await Axios.post(
        "http://localhost:4000/add-product",
        JSON.stringify({ name, price, category, company, userId }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200 || response.status === 201) {
        const result = response.data;
        console.log(result);
        console.log("successfully added:");
      } else {
        console.log("error");
      }
      
    
    }catch(e){
      console.log(e.message);
    }
    
  };


  return (
    <div className="product">
      <h3>AddProduct</h3>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inputBox"
      />
      {error && !name && <span className="invalid">Enter Valid Name</span>}
      <input
        type="text"
        placeholder="Enter Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="inputBox"
      />
      {error && !price && <span className="invalid">Enter Valid Price</span>}

      <input
        type="text"
        placeholder="Enter Product category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="inputBox"
      />
      {error && !category && <span className="invalid">Enter Valid Category</span>}

      <input
        type="text"
        placeholder="Enter Product company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="inputBox"
      />
      {error && !company && <span className="invalid">Enter Valid company</span>}

      <button onClick={addProduct} className="btn">
        AddProduct
      </button>
    </div>
  );
};

export default AddProduct;
