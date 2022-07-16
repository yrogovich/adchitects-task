import Image from 'next/image'
import Navbar from "../components/Navbar";
import {getPageContentByUrl} from './api/cms'

export async function getStaticProps() {
  const pageContent = await getPageContentByUrl()

  return {
    props: {
      sections: pageContent.sections,
    },
  }
}

function Home({sections}) {
  const header       = sections.find(section => section.type === 'hero')
  const testimonial  = sections.find(section => section.type === 'testimonial')

  return (
    <>
      <Navbar />
      <main>
        <header className="header">
          <div className="container">
            <div className="header__row">
              <div className="header__title">{header.text}</div>
              <div className="header__image">
                <Image
                  src={header.img}
                  layout="responsive"
                  alt="hero image"
                  width={516} height={384}
                />
              </div>
            </div>
          </div>
        </header>

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
              <div className="testimonial__text">{testimonial.text}</div>
              <div className="testimonial__author">{testimonial.author}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home