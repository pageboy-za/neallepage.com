import Image from "next/image";
const aboutData = [
    {
     "title" : "Currently changing the way the world shops",
     "text": "While at Ocado I have been changing the way the world shops as a part of their Solutions business developing the worlds leading platform specfically for grocery retail. I was a key part of the product management team being the voice of the company's partners and the voice of the market ensuring that the platform was always ahead delivering the best user experience and the best economics.",
     "image": "/Ocado_warehouse_bots.jpg",    
     "altText": "Grocery picking robots on a grid",
     "imgLocation": "left"
    },
    {
        "title" : "Agile Process",
        "text" : "I have learned that process is essential but not for its own sake, rather for ensuring that the we deiver appropriate value to all stakeholders in the right time and in some environments, like financial services doing this while making sure no one goes to jail for a regulatory breach.",
        "image" : "/canary-wharf-1145616_1920.jpg",
        "altText": "Carnary Wharf at night with the Citi Group building clearly visible",
        "imgLocation" : "right"
    }, 
    {
        "title" : "APIs, Digital and Payments",
        "text": "Digital is so much more than just having an app. Using digital to unlock value by changing processes and operations rather than just doing the old process on the phone.",
        "image": "/rami-al-zayat-w33-zg-dNL4-unsplash.jpg",
        "altText": "A smart phone with a black background and application icons clearly visible",
        "imgLocation": "left"
    }
]

export default function about() {
    return(
        <div className=" bg-gray-200 dark:bg-gray-800 rounded-lg">
        {aboutData.map((about, index) =>(
            <card id={index+1}>
             <div className="pt-6 flex flex-col md:flex-row">
                 <div className="w-full md:w-1/2 pl-4">
                    <h2 className="md:text-xl text-blue-600 font-semibold border-b-2 border-blue-400">{about.title}</h2>
                    <p className="pt-4 md:pt-6 dark:text-gray-200">
                        {about.text}
                    </p>
                 </div>
            <div className="w-full md:w-1/2 px-4 py-2"> 
                <Image className="rounded-lg" src={about.image} alt={about.altText} width={1000} height={800} /> 
            </div>
            </div>
        </card>
        ))}
        </div>


    )
}
