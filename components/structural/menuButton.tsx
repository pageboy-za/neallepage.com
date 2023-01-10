import Link from 'next/link';


type Props = {
  href: string
  children: string
}

const Button = ({href, children} ) => (
            <div className='bg-gold-500 hover:bg-gradient-to-br from-copper-600 to-bg-gold-500 rounded-md text-black flex justify-center items-center hover:font-bold shadow-sm hover:shadow-lg 
            h-8 w-20 mx-2'>
                <Link href={href}>                
                    {children}
                </Link>
            </div>
)

export default Button 