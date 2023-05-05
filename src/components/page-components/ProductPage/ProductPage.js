import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  // Fetch the product details based on the id parameter
  // ...

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      {/* Render the product details */}
      // ...
      <Link to={"/product/:"+(id+1)}>Product 5</Link>

    </div>
  );
}
