import PropTypes from 'prop-types'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import {getPageContentByUrl} from './api/cms'
import Header from '../components/sections/Header'
import Newsletter from '../components/sections/Newsletter'
import Testimonial from '../components/sections/Testimonial'
import ResponseError from '../components/sections/ResponseError'

export async function getStaticProps() {
  const pageContent = await getPageContentByUrl()

  return {
    props: {
      sections: pageContent.sections || null,
    },
  }
}

function sectionsPrint(sections) {
  if (!sections) return <ResponseError />

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
      <Head>
        <title>Adchitects test task</title>
        <meta
          name="description"
          content="Adchitects test task on JS developer position"
          key="desc"
        />
        <meta property="og:title" content="Adchitects test task" />
        <meta
          property="og:description"
          content="Adchitects test task on JS developer position"
        />
      </Head>
      <Navbar />
      <main>
        {sectionsPrint(sections)}
      </main>
    </>
  )
}

Home.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
};

export default Home