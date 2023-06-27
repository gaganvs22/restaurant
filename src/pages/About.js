import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our pizza restaurant! We are passionate about creating the best pizza possible, using only the finest ingredients and time-honored techniques.

        Our journey began with a simple dream of bringing authentic, delicious pizza to our community. From our humble beginnings, we have grown to become a beloved destination for pizza lovers from all over.

        We take great pride in our menu, which features a wide variety of mouth-watering pizzas, from classic Margherita to gourmet pizza. Our crusts are hand-tossed and baked to perfection in our wood-fired ovens, ensuring every slice is crispy and satisfying.
        </p>
      </div>
    </div>
  );
}

export default About;