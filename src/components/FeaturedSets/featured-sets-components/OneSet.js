import React,{useState, useContext, useEffect} from "react";
import { LoginContext } from '../../context/LoginContext';
import axios from  "axios"


function OneSet(props){
    let{image, title, price, id} = props;
    const { userId } = useContext(LoginContext);

    
   
    // const clickFeaturedSets = () => {
    //     console.log("added to wishlist")
    // }
    const handleAddWishlist = async (event) => {
        event.preventDefault();
        console.log(userId,id)
        try {
          const response = await axios.post('http://localhost:3010/api/user/wishlist/add', {
            "email":userId,
            "productID":id
            
          });
    
          if (response.status === 200) {
            console.log('Product added to wishlist');
            alert("Item added to the wishlist");
          }
        } catch (error) {
          console.log('Error adding product to wishlist');
          console.log(error);
        }
     };

    //  useEffect(() => {
    //     const fetchWishlist = async () => {
    //       try {
    //         const response = await axios.get(`http://localhost:3010/api/user/wishlist/${userId}`);
    //         console.log(response.data);
            
    //       } catch (error) {
    //         console.error('Error fetching wishlist:', error);
    //       }
    //     };
    
    //     fetchWishlist();
    //   }, []);
    
    return(
        <div  className="one-product">
            <a href={"/product/"+id} className="product-upper-section">
                <p><button onClick={handleAddWishlist}>Add to wish list</button></p>
                <div className="img-sec">
                <img 
                    src={image} 
                    alt="razor-crest"/>
                </div>
                <p>Hard to find</p>
            </a>
            <a className="product-title" href={"./product/:"+id}><h2>{title}</h2></a>
            <h2 className="price">{price}$</h2>
            <input
            className="add-to-bag-button"
            type="button"
            value="Add to Bag"
            onClick={handleAddWishlist}
            />
        </div>
    );
}
export default OneSet;