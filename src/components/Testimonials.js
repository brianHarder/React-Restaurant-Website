import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jake',
      text: 'The grilled fish and lemon dessert tasted great. Highly recommend!',
      rating: 5,
      image: 'jake.jpg'
    },
    {
      id: 2,
      name: 'Raymond',
      text: 'It was very easy to make a reservation. The food and the ambiance were incredible. Will definitely go back again.',
      rating: 5,
      image: 'raymond.jpg'
    },
    {
      id: 3,
      name: 'Rosa',
      text: 'It was so easy to book a table online and their customer service was great!',
      rating: 5,
      image: 'rosa.jpg'
    },
    {
      id: 4,
      name: 'Gina',
      text: 'Little Lemon is my go-to restaurant with my family during important occasions although it can get pretty busy.',
      rating: 4,
      image: 'gina.jpg'
    }
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p style={{ color: "gold" }}>{'★'.repeat(testimonial.rating)}</p>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
