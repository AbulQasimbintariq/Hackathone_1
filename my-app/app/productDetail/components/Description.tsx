import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    comment: "I'm blown away by the quality and style of the clothes I received from this store. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    width:"100"
  },
  {
    id: 2,
    name: 'Alex K.',
    comment: "Finding clothes that align with my personal style used to be a challenge until I discovered this store. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    width:"100"
  }, 
];

const DescriptionSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="descriptionSection flex flex-wrap justify-center">
      <div className="carousel">
        <button onClick={prevSlide} className= "arrow">
          ←
        </button>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={` "testimonial" ${index === current ?  "active" : ''}`}
          >
            <div className= "rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <h3>{testimonial.name}</h3>
            <p className='para'>{testimonial.comment}</p>
          </div>
        ))}
        <button onClick={nextSlide} className= "arrow">
          →
        </button>
      </div>
    </section>
  );
};

export default DescriptionSection;
