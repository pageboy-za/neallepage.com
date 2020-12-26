import Head from 'next/head'
import Nav from '../components/nav';
import Spacer from '../components/spacer';
import Hero from '../components/hero';
import About from '../components/aboutCard';
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div>
    <Head>
        <title>Nealle Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div id="home" className="container w-full bg-gray-200 dark:bg-gray-800 min-w-full">
      <section id="navigation">
        <div className="min-w-full">
        <Nav />
        </div>
      </section>
      <section id="hero">
        <Hero />
      </section>
      <Spacer />
      <div className="pt-8"></div>
      <section id="about">
        <div>
        <About />
        </div>        
      </section>
      <Spacer />
        <section id="skills">
          <Skills />  
        </section>
      <Spacer />
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