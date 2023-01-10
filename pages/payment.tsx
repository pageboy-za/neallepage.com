import Container from '../components/structural/container'

import Layout from '../components/layout'
import Head from 'next/head'
import SectionSeparator from '../components/structural/section-separator'
import {useRouter} from 'next/router'

export default function Index(): JSX.Element {
    const router = useRouter()
    const params = router.query
    let result = Object.entries(params)
    const results = []
    result.forEach(([key, value]) => {
        console.log(key +' , '+ value);
       results.push(<tr className='border-b-2 border-copper-500 py-1'><td className='font-bold'> {key}: </td><td>  {value} </td></tr>);
        })

  return (
    <>
      <Layout>
        <Head>
          <title>TG API response</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Container>
        <section id='cardHeader'> 
                        <div className='text-xl text-center underline'>TG API response details</div>
                    </section>
                    <section id='cardBody'>
                    <div className='items-center'>
                    <SectionSeparator />
                    </div> 
                    <div id='params' className=''>
                    <table className='w-full bg-gold-100 rounded-lg table-auto '>
                        <thead>
                          <tr className='border-b-3 bg-gold-400 border-copper-500'>
                            <th className='w-1/2 '>Key</th>
                            <th className='w-1/2'>Value</th>
                          </tr>
                        </thead>
                        <tbody className='text-center'>
                          { results }
                        </tbody>
                    </table>
                    </div>
                    </section>

          <SectionSeparator />
        </Container>
      </Layout>
    </>
  )
}
