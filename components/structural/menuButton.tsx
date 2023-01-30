import Link from 'next/link';


type Props = {
  href: string
  children: string
}

const Button = ({href, children} ) => (
            <div className='bg-black rounded-md text-white flex justify-center items-center hover:font-bold h-8 w-20 mx-2'>
                <Link href={href}>                
                    {children}
                </Link>
            </div>
)

export default Button 