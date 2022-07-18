import Image from 'next/image'

const Testimonial = ({text, author}) => {
  return (
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
            <div className="testimonial__text">{text}</div>
            <div className="testimonial__author">{author}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial