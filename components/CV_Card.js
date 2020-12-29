export default function contact () {
const jobs = [
    {
        companyName : "Ocado",
        duration : "October 2018 - To Date",
        job_title : "Solutions Product Manager",
        desc : "A varied product role that was the face of the organisation to the group’s clients representing the vision of the Ocado Smart Platform, .",
        logo : "/ocado.svg"
    },
    {
        companyName : "Ocado",
        duration : "September 2016 - September 2018",
        job_title : "Product Owner - Payments and Fraud Systems",
        desc : "Ocado Technology is the development arm of Ocado Group, the worlds largest online only grocer.  Developing proprietary technology to change the way the world shops.  I am responsible for product ",
        logo : "/ocado.svg"
    },
    {
        companyName : "Capital One",
        duration : "Sept 16 - To Date",
        job_title : "Senior Manager - Payments, Customer Fulfilment",
        desc : "This fixed term role considered payments from two perspectives, first how customers paid with Capital One cards, looking at technology fundamentals like EMV for the present and as this begins.",
        logo : "CapOne.svg"
    }
]
    return (
        <div>
        <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1" />
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        {jobs.map(({ companyName, duration, job_title, desc, logo, index }) => (
                            <div>
                            <h1 className="mx-auto font-semibold text-lg text-white">{ logo }</h1>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">{ companyName }</h3>
                                <h4 className="mb3 text-gray-700 text-xl">{job_title} :  { duration }</h4>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 prose">{ desc }</p>
                            </div>
                            </div>
                        ))}
                </div>
        </div>
        </div>
    )}

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
  <div className="order-1 w-5/12" />
  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
  </div>
  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
    <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
