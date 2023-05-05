import React from "react";
import Carousel from "./Carousel";
import PopularSetItem from "./PopularSetItem";
import "./mostpopular.css";


const MostPopularSection = () => {
  const popularItemsData = [
    {
      imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
      logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
      logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
      title: "New LEGO® Icons Rivendell™",
      description: "Build the One to rule them all with this epic creation.",
    },
    {
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },
      {
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },
      {
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },
      {
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },
      {
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },{
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },{
        imageUrl: "../assets/images/mostPopularSets/Ford-Technic.jpg",
        logo1: "../assets/images/mostPopularSets/Logo/ford_logo_pos_300w (3).png",
        logo2: "../assets/images/mostPopularSets/Logo/technic_logo_pos_100h (3).png",
        title: "New LEGO® Icons Rivendell™",
        description: "Build the One to rule them all with this epic creation.",
      },
    
    // ... Additional popular item data objects ...
  ];

  return (
    <div className="most-popular-section">
      <Carousel>
        {popularItemsData.map((item, index) => (
          <PopularSetItem
            key={index}
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
