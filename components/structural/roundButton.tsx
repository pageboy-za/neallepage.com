import Image from 'next/image';
import Link from 'next/link';


type Props = {
  href: string
}

const RoundButton = ({href} ) => (
    <div className="justify-between mx-20 ">
            <Link href={href}>  
            <div className='bg-gold-500 hover:bg-gradient-to-br from-copper-600 to-bg-gold-500 rounded-full p-5 m-5 w-20 h-20 flex mx-auto justify-center items-center hover:border-spacing-2 hover:border-gold-50 shadow-md hover:shadow-lg'>                             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </Link>
    </div>
)

export default RoundButton 