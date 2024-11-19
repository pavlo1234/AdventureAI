import React from "react";

import "./resultsPage.sass";
import Header from "../../header";
import RecommendationItem from "../../recommendationItem";

const ResultsPage = () => {
  const recommendationItemsMock = [
    {
      header: "Must-Try Local Restaurants",
      description: "From hidden gems to popular eateries, these local restaurants are a must for any food lover. Taste the best the area has to offer!",
      isAdventureAIrecommendation: false,
      mockCardData: [
        {
          id: 1,
          title: "Rebernya",
          location: "Lviv, Ukraine",
          category: "Restaurant",
          image: "https://cdn-media.choiceqr.com/prod-eat-dniprovska-rebernya/menu/ldJwHru-iooktAK-DBtElYd.jpeg",
        },
        {
          id: 2,
          title: "Pasta House",
          location: "Rome, Italy",
          category: "Restaurant",
          image: "https://www.fest.lviv.ua/image.php?newsid=450&fileno=6&maxx=900&maxy=800",
        },
        {
          id: 3,
          title: "Bistro Central",
          location: "Paris, France",
          category: "Cafe",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bc/20/3f/summer-terrace-in-lviv.jpg?w=600&h=-1&s=1",
        },
      ],
    },
    {
      header: "Top Rated Local Cafes",
      description: "Discover the best cafes to relax and enjoy a great cup of coffee. These spots have become favorites for locals and visitors alike.",
      isAdventureAIrecommendation: false,
      mockCardData: [
        {
          id: 1,
          title: "Café Mocha",
          location: "Berlin, Germany",
          category: "Cafe",
          image: "https://cdn.pixabay.com/photo/2016/03/05/23/26/cafe-1239706_960_720.jpg",
        },
        {
          id: 2,
          title: "Coffee & Co.",
          location: "New York, USA",
          category: "Cafe",
          image: "https://cdn.pixabay.com/photo/2017/08/30/01/04/coffee-2695567_960_720.jpg",
        },
        {
          id: 3,
          title: "Brewed Awakening",
          location: "Toronto, Canada",
          category: "Cafe",
          image: "https://cdn.pixabay.com/photo/2018/03/22/16/06/cafe-3242531_960_720.jpg",
        },
      ],
    },
    {
      header: "We strongly recommend to visit",
      description: "adventures.ai has curated a list of must-visit destinations just for you! From breathtaking natural wonders to vibrant city escapes, these spots are guaranteed to leave you inspired and amazed.",
      isAdventureAIrecommendation: true,
      mockCardData: [
        {
          id: 1,
          title: "The Secret Garden",
          location: "London, UK",
          category: "Restaurant",
          image: "https://cdn.pixabay.com/photo/2016/05/01/05/24/garden-1424939_960_720.jpg",
        },
        {
          id: 2,
          title: "Baker's Corner",
          location: "Lisbon, Portugal",
          category: "Cafe",
          image: "https://cdn.pixabay.com/photo/2016/05/18/12/42/bread-1407576_960_720.jpg",
        },
        {
          id: 3,
          title: "La Petite Bistro",
          location: "Montreal, Canada",
          category: "Restaurant",
          image: "https://cdn.pixabay.com/photo/2017/12/18/13/21/restaurant-3021032_960_720.jpg",
        },
      ],
    },
  ];

  
  return (
    <div className="results-page">
      <Header />
      {recommendationItemsMock.map((item, index) => (
        <RecommendationItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ResultsPage;
