import Head from 'next/head'
import Nav from '../components/nav';
import Spacer from '../components/spacer';
import Footer from "../components/footer";
import Sectiontitle from "../components/sectionTitle"
import CV_Card from "../components/CV_Card"



export default function Home() {
  return (
    <div>
    <Head>
        <title>Nealle Page - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div id="home" className="container w-full m-0 bg-gray-200 dark:bg-gray-800 min-w-full">
      <section id="navigation">
        <div className="min-w-full">
        <Nav />
        </div>
      </section>
      <Spacer />
      <Sectiontitle title_text="Overview" />
      <section id="overveiw" className="">
          <div className="container bg-gray-200 py-4 px-4 w-full h-full prose md:prose-xl mx-auto">
          I am a Product Guy, with global experience across new digital product innovation.  I’ve used knowledge and expertise in NFC, Global Platform and tokenisation to build systems  that power Apple Pay Google Pay.  I have managed a varied product set, from a suite of APIs and a web application for customer service and token lifecycle maintenance to an experimental machine learning based fraud detection system.  Experienced in managing vendors, and working with cross-functional teams working across many time zones to deliver results.
          </div>
      </section>
    <Spacer />
    <Sectiontitle title_text="Career History" />
      <div className="container bg-gray-200 mx-auto w-full h-full min-h-screen pt-8">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '10%'}} ></div>
                    <CV_Card />
                
            </div>
      <section id="footer">
        <div className="pt-8">
        <Footer />
        </div>
      </section>
    </div>
    </div>
    </div>
      )
      }

