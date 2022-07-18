import Navbar from "../components/Navbar";
import {getPageContentByUrl} from './api/cms'
import Header from '../components/sections/Header'
import Newsletter from '../components/sections/Newsletter'
import Testimonial from '../components/sections/Testimonial'

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

  return (
    <>
      <Navbar />
      <main>
        <Header text={header.text} img={header.img} />
        <Testimonial text={testimonial.text} author={testimonial.author} />
        <Newsletter />
      </main>
    </>
  )
}

export default Home