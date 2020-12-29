import Head from 'next/head'
import Nav from '../components/nav';
import Spacer from '../components/spacer';
import Hero from '../components/hero';
import About from '../components/aboutCard';
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Sectiontitle from "../components/sectionTitle"

const linkslist = [
  {label :'About', href: '/#about'},
  {label :'Skills', href: '/#skills'},
  {label :'Contact', href: '/#contact'}
]

export default function Home() {
  return (
    <div>
    <Head>
        <title>Nealle Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div id="home" className="container w-full m-0 bg-gray-200 dark:bg-gray-800 min-w-full">
      <section id="navigation">
        <div className="min-w-full">
        <Nav />
        </div>
      </section>
      <section id="hero">
        <Hero />
      </section>
      <Spacer />
      <div className="pt-8">
       <Sectiontitle title_text="About"/> 
      </div>
      <section id="about">
        <div>
        <About />
        </div>        
      </section>
      <Spacer />
      <div className="pt-8">
       <Sectiontitle title_text="Skills"/> 
      </div>
        <section id="skills">
          <Skills />  
        </section>
      <Spacer />
      <div className="pt-8">
       <Sectiontitle title_text="Contact"/> 
      </div>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <div className="pt-8">
        <Footer />
        </div>
      </section>
    </div>
    </div>
  )
  }