import React from 'react';

function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons',
      price: '$12.99',
      image: 'greek_salad.jpg'
    },
    {
      id: 2,
      name: 'Lemon Dessert',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
      price: '$5.00',
      image: 'lemon_dessert.jpg'
    },
    {
      id: 3,
      name: 'Bruschetta',
      description: 'Our bruschetta is made from grilled bread, that has been smeared with garlic and seasoned with salt and olive oil that comes straight from Italy',
      price: '$5.99',
      image: 'bruschetta.jpg'
    }
  ];

  return (
    <section className="specials">
      <h2>This Week's Specials!</h2>
      <div className="specials-container">
        {specials.map((special) => (
          <div key={special.id} className="special-card">
            <img src={special.image} alt={special.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h4>{special.name}</h4>
            <p>{special.description}</p>
            <p style={{ color: '#d2691e' }}>{special.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
