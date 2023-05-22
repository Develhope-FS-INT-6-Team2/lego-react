import React,{useState} from "react";
import { PurchaseDetails } from "./PurchaseDetails";
import "./ProductPageItem.css";
import { ProductItemMain } from "./ProductItemMain";

function ProductPageItem(props){
    let{image, title, price, id} = props;

    return(
         <div className="product-page-item-container">

            <ProductItemMain image={image} id={id}/>

            <PurchaseDetails title={title} price={price} id={id}/>

         </div>
    );
}
export default ProductPageItem;