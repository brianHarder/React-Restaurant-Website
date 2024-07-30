import React from "react";

const menuData = [
  {
    section: "Appetizers",
    items: [
      {
        title: "Hummus & Pita",
        description: "Creamy hummus served with warm pita bread and fresh vegetables.",
        price: "$7.50",
      },
      {
        title: "Dolmas",
        description: "Grape leaves stuffed with rice, pine nuts, and herbs.",
        price: "$6.00",
      },
    ],
  },
  {
    section: "Main Courses",
    items: [
      {
        title: "Lamb Souvlaki",
        description: "Grilled lamb skewers served with tzatziki sauce and a side of Greek salad.",
        price: "$14.00",
      },
      {
        title: "Moussaka",
        description: "Layered eggplant, minced beef, and béchamel sauce baked to perfection.",
        price: "$12.50",
      },
    ],
  },
  {
    section: "Desserts",
    items: [
      {
        title: "Baklava",
        description: "Flaky pastry layered with honey, nuts, and spices.",
        price: "$5.50",
      },
      {
        title: "Greek Yogurt with Honey",
        description: "Creamy Greek yogurt topped with pure honey and walnuts.",
        price: "$6.50",
      },
    ],
  },
];

function Menu() {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1 className="menu-title">Little Lemon Menu</h1>
        <p className="menu-subtitle">Discover the authentic flavors of the Mediterranean</p>
      </header>

      {menuData.map((section, index) => (
        <section className="menu-section" key={index}>
          <h2 className="section-header">{section.section}</h2>
          <div className="menu-items">
            {section.items.map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-text">
                  <h3 className="menu-item-title">{item.title}</h3>
                  <p className="menu-item-description">{item.description}</p>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Menu;
