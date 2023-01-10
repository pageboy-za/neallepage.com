import RoundButton from "./structural/roundButton"
import Link from "next/link"


const Intro = () => {
  return (
    <section className="flex flex-col ">
      <div className="w-full bg-gold-200 rounded-lg max-w-screen-2xl py-2 mb-1 border-8 border-white shadow-sm">

          <div className="flex justify-start">
            <Link href="/">
                <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight mx-6 mb-8 text-copper-700">
                    Nealle Page
                </h1>
            </Link>
          </div>
        
        <div className='mt-8 px-4 flex flex-col'>
            <h3 className="text-center md:text-left text-xl text-semibold mt-5 md:pl-8 prose prose-headings">
            A technology product manager delivering products to B2B clients and consumers around the world.
            </h3>
            <h4 className='text-center md:text-left text-lg px-4 md:px-8 text-copper-600 font-bold prose'>
            Experienced in e-commerce, payments, fulfilment and logistics
            </h4>
            <hr className="px-4 h-1 md:w-3/4 bg-copper-500 rounded-lg w-full"/>
            <p className="px-4 pt-8 pb-2 first-letter:prose">
            I'm an experienced Product Manager with a track record of successful digital product innovation. My background includes building systems for Apple Pay, Google Pay, and a machine learning-based fraud detection system. I have expertise in managing various products, including APIs and web applications, and have worked with vendors and cross-functional teams across time zones. I also recently built the world's first end-to-end grocery platform.
            </p>
            <RoundButton href="/#about" />
        </div>
      </div>
    </section>
  )
}

export default Intro
