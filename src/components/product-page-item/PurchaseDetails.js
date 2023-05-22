import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr"
import { BsBoxSeam } from "react-icons/bs"
import { SiReacthookform } from "react-icons/si"
import {BiErrorAlt} from "react-icons/bi"

export function PurchaseDetails(props){
    let {title,price,id}= props;

    let [count, setCount] = useState(1)

    const increase = ()=>{
        if(count < 5){
        setCount(c => c+1)
        }
        else{
            alert("Cant buy more than 5")
        }
    
    } 
    const decrease = ()=>{
        if(count > 1){
        setCount(c => c-1)
        }
        else{
            alert("Cant buy less than 1")
        }

    } 

    return (
    <div className="purchase-details-container">
        <div className="details-yellow">
            <p>New</p>
            <p>Exclusives</p>
        </div>
        <h1>{title}</h1>
        <h1>{(price * count).toFixed(2)}$</h1>
        <p>Available now</p>
        <div className="purchase-count">
            <button className="count-button" onClick={()=> decrease()}>-</button>
            <p>{count}</p>
            <button className="count-button" onClick={()=> increase()}>+</button>
        </div>
        <button className="add-to-bag">Add to Bag</button>
        <div className="gift-info">
            <img src="../assets/images/product-page/truck.png" alt="truck"/>
            <p>
                Get the Moving Truck gift with LEGO® purchases over £160, 
                valid 11/05/2023-21/05/2023 while stocks last.*
            </p>
        </div>
        <div className="warning-part">
            <ul>
                <li>Warning!</li>
                <li>Choking hazard.</li>
                <li>Small parts.</li>
            </ul>
            <BiErrorAlt className="danger-icon"/>
        </div>
        <div className="details-links">
            <a href={"./"+id}>
                <IoLocationOutline className="detail-links-icons"/>
                <p>Check Store Stock</p>
                <GrNext className="detail-links-icons-2"/>
            </a>
            <a href={"./"+id}>
                <BsBoxSeam className="detail-links-icons"/>
                <p>Deliveries and Returns</p>
                <GrNext className="detail-links-icons-2"/>
            </a>
            <a href={"./"+id}>
                <SiReacthookform className="detail-links-icons"/> 
                <p>Building Instructions</p>
                <GrNext className="detail-links-icons-2"/>
            </a>
        </div>
    </div>
    )

}