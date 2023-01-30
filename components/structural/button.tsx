import Link from 'next/link';


type Props = {
  href: string
  children: string
  event?: string
}

const Button = ({href, children, event} ) => (
            <div className='bg-gold-500 hover:bg-gradient-to-br from-copper-600 to-bg-gold-500 rounded-md p-5 m-5 max-w-sm text-white flex mx-auto justify-center items-center hover:border-spacing-2 hover:border-gold-50 shadow-sm hover:shadow-lg'>
                <Link  data-splitbee-event={event}  href={href}>                
                    {children}
                </Link>
            </div>
)

export default Button 