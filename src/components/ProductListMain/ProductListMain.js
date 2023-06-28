import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
// import data from"../FeaturedSets/featured-sets-components/Products.json" ;
import ProductListOneSet from "./ProductListProducts/ProductListOneSet";
import "./ProductListMain.css";




function ProductListMain(){

    const [data1,setData1] = useState([{id:"",image:"",price:"",title:""}])
    const [products, setProducts] = useState([{id:"",image:"",price:"",title:""}]);
    const [option1Checked, setOption1Checked] = useState(false);
    const [option2Checked, setOption2Checked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
  
      if (name === 'option1') {
        setOption1Checked(checked);
  
        if (checked) {
          setOption2Checked(false);
          const filteredProducts = data1.filter(item => item.price < 100);
          setProducts(filteredProducts);
        } else {
          setProducts(data1);
        }
      } else if (name === 'option2') {
        setOption2Checked(checked);
  
        if (checked) {
          setOption1Checked(false);
          const filteredProducts = data1.filter(item => item.price > 100);
          setProducts(filteredProducts);
        } else {
          setProducts(data1);
        }
      }
    };
    

   

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3010/api/product/products');
        setData1((a) => response.data);
        setProducts((a) => response.data)
        console.log(data1)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };





    return(
    <div className="product-list-main">
      <div className="product-list-sidebar">
        <label >
        price &lt; 100
          <input
            type="checkbox"
            name="option1"
            checked={option1Checked}
            onChange={handleCheckboxChange}
          />
          
          
        </label>
        
        <label >
        price &gt; 100
          <input
            type="checkbox"
            name="option2"
            checked={option2Checked}
            onChange={handleCheckboxChange}
          />
          
          
        </label>
      </div>
  
        <div className="product-list-products">
          {products.map(item => (
            <ProductListOneSet key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
          ))}
        </div>
    </div>
    )
}
export default ProductListMain;