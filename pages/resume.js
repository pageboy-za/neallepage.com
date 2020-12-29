import Head from 'next/head'
import Nav from '../components/nav';
import Spacer from '../components/spacer';
import Footer from "../components/footer";
import Sectiontitle from "../components/sectionTitle"
import CV_Card from "../components/CV_Card"
import ButtonLink from "../components/buttonLink"



export default function Home() {
  return (
    <div>
    <Head>
        <title>Nealle Page - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div id="home" className="container w-full m-0 dark:bg-gray-800 min-w-full">
      <section id="navigation">
        <div className="min-w-full">
        <Nav />
        </div>
      </section>
      <Spacer />
      <Sectiontitle title_text="Overview" />
      <section id="overveiw" className="">
          <div className="container bg-gray-200 py-4 px-4 w-full h-full prose md:prose-xl mx-auto">
            <p>
                I am a Product Guy, with global experience across new digital product innovation.  I’ve used knowledge and expertise in NFC, Global Platform and tokenisation to build systems  that power Apple Pay Google Pay.  I have managed a varied product set, from a suite of APIs and a web application for customer service and token lifecycle maintenance to an experimental machine learning based fraud detection system.  Experienced in managing vendors, and working with cross-functional teams working across many time zones to deliver results.
            </p>
            <p className="p-4 text-center text-blue-600">
                This page is a work in progress grab a PDf copy of my CV for now at the link below.
            </p>
          </div>
          <div className="w-full ">
        <div className="pl-6 pt-2">
          <div className="flex justify-center">
            <h2 className="text-gray-800 text-xl mb-4">Get a copy of my resume</h2>
          </div>
          <div className="flex justify-center">
            <ButtonLink  href="/pdf/2020-06-11_Nealle Page CV.pdf" label="download a copy"/>
          </div>
        </div>
        </div>
      </section>
    <Spacer />
    <Sectiontitle title_text="Career History" />
      <div className="container bg-gray-200 mx-auto w-full h-full min-h-screen pt-8">
            <div className="relative wrap overflow-hidden p-10">     
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

