import Container from '../components/structural/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import About from '../components/about'
import SectionSeparator from '../components/structural/section-separator'
import Skills from '../components/skills'
import Contact from '../components/contact'
import MenuBar from '../components/menuBar'
import Script from 'next/script'

export default function Index(): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>Nealle Page – Product Manager</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <Script data-no-cookie async src="https://cdn.splitbee.io/sb.js" />
        </Head>
        <MenuBar />
        

        <Container>
        <div className='pt-20'>
          <Intro />
        </div>
          <SectionSeparator /> 
          <div className='container object-center'>
          <About />
          </div>
          <SectionSeparator />
          <Skills /> 
          <SectionSeparator />
          <Contact />
          <SectionSeparator />
        </Container>
      </Layout>
    </>
  )
}
