import Image from 'next/image'
import {useState} from 'react'
import Navbar from "../components/Navbar";
import {getPageContentByUrl, subcribeToNewsletter} from './api/cms'
import Button from '../components/Button'
import Input from '../components/Input'

export async function getStaticProps() {
  const pageContent = await getPageContentByUrl()

  return {
    props: {
      sections: pageContent.sections,
    },
  }
}

function Home({sections}) {
  const header        = sections.find(section => section.type === 'hero')
  const testimonial   = sections.find(section => section.type === 'testimonial')

  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [newsletterMsg, setNewsletterMsg]       = useState('');

  const newsletterHandler = async (e) => {
    e.preventDefault()

    const email    = e.target.querySelector('input[type="email"]').value
    const response = await subcribeToNewsletter(email)

    switch (response.status) {
    case 200:
      setNewsletterStatus('success')
      setNewsletterMsg(response.data.message)
      break;
    default:
      setNewsletterStatus( 'error')
      setNewsletterMsg(response.message)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <header className="header">
          <div className="container">
            <div className="header__row">
              <h1 className="header__title">{header.text}</h1>
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

        <section className="newsletter">
          <div className="container">
            <div className="newsletter__row">
              <div className="newsletter__title">Sign up for Newsletter</div>
              <form onSubmit={newsletterHandler}>
                <div className="newsletter__form">
                  <Input type="email" placeholder="Type your email" required={true}/>
                  <Button>Submit</Button>
                </div>
              </form>
              <div
                className={`newsletter__message newsletter__message--${newsletterStatus}`}
              >{newsletterMsg}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home