import Image from 'next/image'
import PropTypes from 'prop-types'

const Testimonial = ({text, author}) => (
  <>
    <section className="testimonial">
      <div className="container">
        <div className="testimonial__row">
          <div className="testimonial__quote">
            <Image
              src="/quotation-mark.svg"
              alt="hero image"
              width={48} height={40}
            />
          </div>
          <blockquote className="testimonial__text">{text}</blockquote>
          <div className="testimonial__author">{author}</div>
        </div>
      </div>
    </section>
  </>
)

Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Testimonial