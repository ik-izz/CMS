import React from "react";
import Card from "./Card";
import subscriptionData from "./subsData"



function createCard(items){
  return(
    <Card 
    key = {items.title}
    title={items.title}
    price={items.price}
    text = {items.text}
    benefit1 = {items.benefit1}
    benefit2 = {items.benefit2}
    benefit3 = {items.benefit3}

    />
  )
}
function Subscription() {
  return (
    <div className="container subs-window">

      <div></div>
      <div className="d-flex flex-wrap">

       {subscriptionData.map(createCard)}
      

      </div>
    </div>
  );
}

export default Subscription;
