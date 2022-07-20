import { motion } from 'framer-motion'
import {useState} from 'react'
import Input from '../Input'
import Button from '../Button'
import {subcribeToNewsletter} from '../../pages/api/cms'

const Newsletter = () => {
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
      <section className="newsletter">
        <div className="container">
          <motion.div
            className="newsletter__row"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <h2 className="newsletter__title">Sign up for Newsletter</h2>
            <form onSubmit={newsletterHandler}>
              <div className="newsletter__form">
                <Input type="email" placeholder="Type your email" required={true}/>
                <Button>Submit</Button>
              </div>
            </form>
            <div
              className={`newsletter__message newsletter__message--${newsletterStatus}`}
            >{newsletterMsg}</div>
          </motion.div>
        </div>
      </section
        >
    </>
  )
}

export default Newsletter