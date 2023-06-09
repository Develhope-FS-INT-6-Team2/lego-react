import React, { useState, useEffect } from "react";
import "./Recommended.css";

// Importing Swiper components for creating a carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Importing Firestore methods to query data from the Firestore database
import { collection, getDocs } from "firebase/firestore";

// Importing the initialized Firestore instance
import db from '../../firebase-config';

// Importing custom components
import Card from './Recommended-components/Card';
import RecommendedSetsLeftButton from './Recommended-components/RecommendedSetsLeftButton';
import RecommendedSetsRightButton from './Recommended-components/RecommendedSetsRightButton';

function Recommended() {
  // State to store the sets/products fetched from Firestore
  const [sets, setSets] = useState([]);

  // State to keep track of loading status
  const [loading, setLoading] = useState(true);

  // State to store any errors that occur during the fetching process
  const [error, setError] = useState(null);

  // Using the useEffect hook to fetch sets from Firestore once the component mounts
  useEffect(() => {
    const fetchSets = async () => {
      try {
        // Querying the "products" collection in Firestore
        const setsCollection = collection(db, "products");

        // Fetching all documents in the "products" collection
        const setsSnapshot = await getDocs(setsCollection);

        // Mapping through the fetched documents and storing them in setsList
        const setsList = setsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        // Updating the state with the fetched sets
        setSets(setsList);
      } catch (err) {
        // If an error occurs, store it in the error state
        setError(err);
      } finally {
        // Once the fetching is done (whether successful or not), set loading to false
        setLoading(false);
      }
    };

    // Calling the fetchSets function to execute the fetching process
    fetchSets();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there was an error fetching data
  if (error) {
    return <div>Error loading data</div>;
  }

  // Mapping through the sets and creating a SwiperSlide component for each
  const products = sets.map(item => (
    <SwiperSlide key={item.id}>
      <Card image={item.image} title={item.title} price={item.price} id={item.id} />
    </SwiperSlide>
  ));

  // Returning the Swiper component with slides and custom navigation buttons
  return (
    <div className="recommended-sets">
      <h1>Recommended For You</h1>
      <div id="recommended-card-container" className="recommended-sets-slider">
        <Swiper
          freeMode={true}
          grabCursor={false}
          navigation={{
            nextEl: ".recommended-sets-right-arrow",
            prevEl: ".recommended-sets-left-arrow"
          }}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            // Breakpoints to adapt the number of slides depending on the screen width
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 2.2,
              spaceBetween: 20
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 18
            }
          }}
        >
          {products}
          {/* Adding custom navigation buttons */}
          <RecommendedSetsLeftButton />
          <RecommendedSetsRightButton />
        </Swiper>
      </div>
    </div>
  );
}

export default Recommended;
