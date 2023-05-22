import { useParams, Link } from 'react-router-dom';
import "./ProductPage.css";

import data from "../../FeaturedSets/featured-sets-components/Products.json"
import Footer from '../../Footer/Footer';
import ProductPageItem from '../../product-page-item/ProductPageItem';

export default function ProductDetail() {
  let { id } = useParams();
  
  let foundItem = data.sets.find(item => item.id === Number(id));

  // console.log((foundItem));
  return (
    <div className='product-page'>
      <h1>{id}</h1>
      <ProductPageItem  image={foundItem.image} title={foundItem.title} price={foundItem.price} id={id} />
      
      <Footer/>

    </div>
  );
}
