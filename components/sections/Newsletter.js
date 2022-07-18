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
    </>
  )
}

export default Newsletter