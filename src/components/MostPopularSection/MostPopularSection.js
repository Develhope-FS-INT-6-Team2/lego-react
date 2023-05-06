import React from "react";
import Carousel from "./Carousel";
import PopularSetItem from "./PopularSetItem";
import "./mostpopular.css";


const MostPopularSection = () => {
  const popularItemsData = [
    {
        id: 1,
        imageUrl: "../assets/images/mostPopularSets/slide1.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (6).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },
      {
        id: 2,
        imageUrl: "../assets/images/mostPopularSets/slide2.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (2).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® Star Wars™ Adventure",
        description: "Explore the galaxy with this amazing LEGO® Star Wars™ set.",
      },
      {
        id: 3,
        imageUrl: "../assets/images/mostPopularSets/slide3.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® City Skyline",
        description: "Build your own LEGO® city skyline with this impressive set.",
      },
      {
        id: 4,
        imageUrl: "../assets/images/mostPopularSets/slide4.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (6).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® Technic Racing Car",
        description: "Speed through the track with this high-performance LEGO® Technic racing car.",
      },
      {
        id: 5,
        imageUrl: "../assets/images/mostPopularSets/slide5.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (5).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® Creator Expert Roller Coaster",
        description: "Experience the thrill of a roller coaster with this LEGO® Creator Expert set.",
      },
      {
        id: 6,
        imageUrl: "../assets/images/mostPopularSets/slide6.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (6).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® Harry Potter™ Hogwarts™ Castle",
        description: "Discover the magic of Hogwarts™ Castle with this stunning LEGO® Harry Potter™ set.",
      },
      {
        id: 7,
        imageUrl: "../assets/images/mostPopularSets/slide7.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (7).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® Ideas Tree House",
        description: "Create an amazing treetop hideaway with this LEGO® Ideas set.",
      },
      {
        id: 8,
        imageUrl: "../assets/images/mostPopularSets/slide8.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/logo (8).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "LEGO® Super Heroes Batmobile™",
        description: "Join the fight against crime with this iconic LEGO® Super Heroes Batmobile™.",
      }
      
    
    // ... Additional popular item data objects ...
  ];
  
  return (
    
    <div className="most-popular-section">
      <Carousel>
        {popularItemsData.map((item) => (
          <PopularSetItem
            key={item.id}
            imageUrl={item.imageUrl}
            logo1={item.logo1}
            logo2={item.logo2}
            title={item.title}
            description={item.description}
          />
        ))}
      </Carousel>
    </div>
  );
  
};

export default MostPopularSection;
