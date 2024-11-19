import React from "react";
import Header from "../../header";
import CardDetails from "../../cardDetails";

import "./cardDetailsPage.sass";

const CardDetailsPage = () => {
  const cardData = {
    header: "Rebernya",
    location: "Lviv, Ukraine",
    type: "Restaurant",
    aboutTitle: "About",
    description: `Ribs and more. We have been testing our ribs recipe for three years. 
                  And for them to be true, we designed special mangals (the ones and only) 
                  which enable to cook over an open fire for the ribs to be crispy and have 
                  a smoky taste. Prefer cooking ribs on your own? No problems! You may buy 
                  our marinade separately. It tastes well, not only for ribs. Rebernia is 
                  a democratic restaurant where there\`s no tableware and everyone eats 
                  with their hands (after all, it’s more delicious). And, of course, there 
                  is no entrance in ties. But if someone wants his tie to be publicly cut 
                  and added to our collection - why not?`,
    images: <div>Images Component or Placeholder</div>,
  };

  return (
    <div className="card-details-page">
      <Header />
      <CardDetails {...cardData} />
    </div>
  );
};

export default CardDetailsPage;
