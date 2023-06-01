import React from "react";
import { useState } from "react";
import data from"../FeaturedSets/featured-sets-components/Products.json" ;
import ProductListOneSet from "./ProductListProducts/ProductListOneSet";
import "./ProductListMain.css"




function ProductListMain(){

    
    const [products, setProducts] = useState(data.sets);
    const [option1Checked, setOption1Checked] = useState(false);
    const [option2Checked, setOption2Checked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
  
      if (name === 'option1') {
        setOption1Checked(checked);
  
        if (checked) {
          setOption2Checked(false);
          const filteredProducts = data.sets.filter(item => item.price < 100);
          setProducts(filteredProducts);
        } else {
          setProducts(data.sets);
        }
      } else if (name === 'option2') {
        setOption2Checked(checked);
  
        if (checked) {
          setOption1Checked(false);
          const filteredProducts = data.sets.filter(item => item.price > 100);
          setProducts(filteredProducts);
        } else {
          setProducts(data.sets);
        }
      }
    };
    


    return(
    <div className="product-list-main">
      <div className="product-list-sidebar">
        <label>
          <input
            type="checkbox"
            name="option1"
            checked={option1Checked}
            onChange={handleCheckboxChange}
          />
          price &lt; 100
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="option2"
            checked={option2Checked}
            onChange={handleCheckboxChange}
          />
          price &gt; 100
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