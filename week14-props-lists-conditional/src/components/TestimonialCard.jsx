
function TestimonialCard({ quote, name }) {
  return (
    <article className="testimonial">
      <p>"{quote}"</p>
      <h4>— {name}</h4>
    </article>
  );
}

export default TestimonialCard;
