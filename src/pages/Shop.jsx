import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offers/Offer";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offer/>
      <NewCollections id='section1'/>
      <NewsLetter/>
    </div>
  );
}
