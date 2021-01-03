import ButtonLink from "../components/buttonLink"

const people = () => {
    return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    )
}

const card =() =>{
    return (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    )
}

const computer = () => {
    return (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    )
}

const skillsList = [
    { "skill" : "Product",
    "description" : "I have been working in product for a while, and have helped bring product thinking to several companies that I have worked with including in areas like operations, shifting the business from a project driven mindset to a proactive value driven one.",
    "SVG" : people()
    },
    { "skill" : "Payments",
    "description" : "I spent my formative years in banking and payments, becoming an EMV and NFC expert along the way. One of my proudest products in this space was some parts of Mastercard Digital Enablement System (MDES)™ that powers Mastercard © payments inside of Apple Pay and Google Pay.",
    "SVG" : card()
    },
    {"skill" : "E-commerce",
    "description" : "MMy time with Ocado group has taught me about more than the basics of the technology behind e-commerce, I've been learning the business of it too. All in the context of global partnerships with the world's leading grocers, like Coles (Australia) and Kroger (USA). ",
    "SVG" : computer()
    }
]


export default function skills() {
    return(
        <div>
        <div className="flex flex-col md:flex-row px-2">
            {skillsList.map((skill, index) => {
                return (              
                    <div key={index} className="mt-4 w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4">
                        <div className="flex justify-center">
                        <svg className="h-24 w-24 text-blue-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {skill.SVG}
                        </svg>
                        </div>
                        <h4 className="text-xl font-bold leading-tight mt-8 dark:text-gray-400">{skill.skill}</h4>
                        <p className="text-gray-700 dark:text-gray-200 mt-2">{skill.description} </p>
                    </div>
                )
            })}
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

        </div>
    )
}