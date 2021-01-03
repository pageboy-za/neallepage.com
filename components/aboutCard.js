import Image from "next/image";
const aboutData = [
    {
     "title" : "Currently changing the way the world shops",
     "text": "At Ocado we are changing the way the world shops! Starting as an online grocer in 2000 we have grown to a global technology provider. Now developing the world's leading platform purpose built for grocery retail. Our role? To make sure that the Ocado Smart Platform is always way ahead. Delivering the best user experience and the best unit economics.",
     "image": "/Ocado_warehouse_bots.jpg",    
     "altText": "Grocery picking robots on a grid",
     "imgLocation": "left"
    },
    {
        "title" : "Agile Process",
        "text" : "Process is essential. But not for its own sake. Rather it's for providing delivery of value to all stakeholders at the right time. In some industries, like financial services, this means delivering value and making sure no one goes to jail for a regulatory breach.",
        "image" : "/canary-wharf-1145616_1920.jpg",
        "altText": "Carnary Wharf at night with the Citi Group building clearly visible",
        "imgLocation" : "right"
    }, 
    {
        "title" : "APIs, Digital and Payments",
        "text": "Digital is so much more than having an app. The real trick is using digital enhancement to deliver value by redefining processes and operations rather than just doing the old process on a phone.",
        "image": "/rami-al-zayat-w33-zg-dNL4-unsplash.jpg",
        "altText": "A smart phone with a black background and application icons clearly visible",
        "imgLocation": "left"
    }
]

export default function about() {
    return(
        <div className=" bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
        {aboutData.map((about, index) =>(
            <card id={index+1} key={index}>
             <div className="pt-6 flex flex-col md:flex-row">
                 <div className="w-full md:w-1/2 pl-4">
                    <h2 className="md:text-xl text-blue-600 font-semibold border-b-2 border-blue-400">{about.title}</h2>
                    <p className="pt-4 md:pt-6 dark:text-gray-200">
                        {about.text}
                    </p>
                 </div>
            <div className="w-full md:w-1/2 px-4 py-2"> 
                <Image className="rounded-lg" src={about.image} alt={about.altText} width={900} height={600} /> 
            </div>
            </div>
        </card>
        ))}
        </div>


    )
}
