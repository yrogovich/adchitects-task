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

function sectionsPrint(sections) {
  return sections.map((section, i) => {
    switch (section.type) {
    case 'hero':
      return <Header text={section.text} img={section.img} key={section.type + i}/>
    case 'newsletter':
      return <Newsletter key={section.type + i}/>
    case 'testimonial':
      return <Testimonial text={section.text} author={section.author} key={section.type + i}/>
    default:
      return null
    }
  })
}

function Home({sections}) {
  return (
    <>
      <Navbar />
      <main>
        {sectionsPrint(sections)}
      </main>
    </>
  )
}

export default Home