import AboutCard from './aboutCard'
import AboutContent from "./about.json";
import { stringify } from 'postcss';

const aboutCont = AboutContent.json(stringify)


export default function about() {
    return(
        <div className="">
        {aboutCont.map((about, key) =>(
            <card id={key}>
             <div className="pt-6 flex flex-col md:flex-row">
                 <div className="w-full md:w-1/2 px-2">
                    <h2 className="text-lg md:text-xl text-blue-600 font-semibold border-b-2 border-blue-400 ">{about.title}</h2>
                    <p className="pt-4 md:pt-6">
                        {about.text}
                    </p>
                 </div>
            <div className="w-full md:w-1/2 justify-center px-2">   
                    <img className="mt-2 pt-6 rounded-lg" src={about.image} alt={about.altText} />
            </div>
            </div>
        </card>
        ))}
        </div>


    )
}
