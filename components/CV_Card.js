import Image from "next/image";

export default function contact () {
const jobs = [
    {
        companyName : "Ocado Group",
        duration : "October 2018 - To Date",
        job_title : "Solutions Product Manager",
        desc : "A varied product role that was the face of the organisation to the group’s clients representing the vision of the Ocado Smart Platform, helping to steer the product roadmap and ensuring the voice of the client was represented in product development with our delivery teams in Technology.  Until our team grew at the end of 2019, this involved representing the entire platform, from e-commerce, mobile applications, and last mile systems to robotic picking equipment.",
        logo : "/Ocado.svg"
    },
    {
        companyName : "Ocado Group",
        duration : "September 2016 - September 2018",
        job_title : "Product Owner - Payments and Fraud Systems",
        desc : "Ocado Technology is the development arm of Ocado Group, the worlds largest online only grocer.  Developing proprietary technology to change the way the world shops.  I am responsible for product ",
        logo : "/Ocado.svg"
    },
    {
        companyName : "Capital One UK",
        duration : "Sept 16 - To Date",
        job_title : "Senior Manager - Payments, Customer Fulfilment",
        desc : "This fixed term role considered payments from two perspectives, first how customers paid with Capital One cards, looking at technology fundamentals like EMV for the present and as this begins.",
        logo : "/CapOne.svg"
    }
]
    return (
        <div className="w-full" style={{left: '12%'}} >
            <ul className="flex flex-col space-y-4 justify-end">
                {jobs.map(({ companyName, duration, job_title, desc, logo, index }) => (
                    <li>
                        <div className="order-1 bg-white dark:bg-gray-300 rounded-lg shadow-xl w-3/4 px-6 py-4">
                            <div className="flex items-center pr-4">
                                <Image src={logo} alt={companyName } width={60} height={60}/>
                                <h3 className="ml-4 mb-4 font-bold text-gray-800 text-xl">{ companyName }</h3>
                            </div>
                            <div>
                                <h4 className="mt-2 mb-3 text-gray-700 text-xl">{job_title}</h4>
                                <p className="text-sm shadow-sm">{ duration }</p>
                                <p className="p-2 text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 prose overflow-auto h-20">{ desc }</p>
                            </div>    
                        </div>
                    </li> 
                ))}
             </ul>
        </div>
    )}
