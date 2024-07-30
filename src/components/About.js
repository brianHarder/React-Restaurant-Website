import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About Little Lemon</h1>
        <p className="about-description">
          Welcome to Little Lemon, a charming Mediterranean restaurant located in the heart of Chicago. We pride ourselves on serving fresh, authentic dishes made with love and passion. Our cozy atmosphere and friendly staff will make you feel right at home. Come and experience the flavors of the Mediterranean like never before!
        </p>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2 className="section-title">Our Story</h2>
          <p className="section-description">
            Founded in 2005, Little Lemon started as a small family-run restaurant with a big dream: to share the rich culinary heritage of the Mediterranean with the world. Our journey began with a single family recipe and has grown to include a wide variety of dishes that celebrate the vibrant and diverse cultures of the Mediterranean region.
          </p>
        </div>
        <img src="chicago.jpg" alt="Our Story" className="about-image" />
      </div>

      <div className="about-section reverse">
        <div className="about-content">
          <h2 className="section-title">Meet the Chef</h2>
          <p className="section-description">
            Our head chef, Maria, brings a wealth of experience and creativity to Little Lemon. With a passion for fresh ingredients and traditional techniques, she crafts each dish with care and precision, ensuring every bite is a taste of the Mediterranean.
          </p>
        </div>
        <img src="chef.jpg" alt="Chef Maria" className="about-image" />
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2 className="section-title">Our Philosophy</h2>
          <p className="section-description">
            At Little Lemon, we believe that food is more than just sustenance; it's a way to connect with others and celebrate life. Our philosophy is simple: use the freshest ingredients, prepare each dish with care, and serve with love. We invite you to join us in this journey of flavor and community.
          </p>
        </div>
        <img src="food.jpg" alt="Our Philosophy" className="about-image" />
      </div>
    </div>
  );
}

export default About;
