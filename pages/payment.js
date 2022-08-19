import Head from 'next/head'
import Spacer from '../components/spacer';
import Footer from "../components/footer";

import { useRouter } from 'next/router'

export default function Pay() {
    const router = useRouter()
    const params = router.query
    let result = Object.entries(params)
    const results = []
    result.forEach(([key, value]) => {
        console.log(key +' , '+ value);
       results.push(<tr><td> {key}: </td><td>  {value} </td></tr>);
        })

    return (
    <div>
    <div>
    <Head>
        <title>Payments Response</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is the home page of Nealle Page, a product manager with experience in B2B product development in ecommerce and financial services."/>
    </Head>
    </div>
    <div id="top" className="container w-full m-0 bg-gray-200 dark:bg-gray-800 min-w-ful"   > 
        <section id="bar">
            <div className="min-w-full min-h-screen">
                <Spacer />
                <div className='p-6'></div>
                <div className='p-6 max-w-5xl mx-12 bg-white  dark:bg-gray-700 dark:text-gray-300 rounded-xl shadow-lg items-center space-x-4'>
                    <section id='cardHeader'> 
                        <div className='text-xl text-center underline'>Payment Details</div>
                    </section>
                    <section id='cardBody'>
                    <div className='items-center'>
                        <Spacer />
                    </div> 
                    <div id='params' className=''>
                    <table className='w-full'>
                        <thead>
                          <tr>
                            <th className='w-1/2'>Key</th>
                            <th className='w-1/2'>Value</th>
                          </tr>
                        </thead>
                        <tbody className='text-center'>
                          { results }
                        </tbody>
                    </table>
                    </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
    <Footer />
    </div>
    )
}