import Link from 'next/link'
import Menu from './menu'


export default function footer()  {
    return (
        <div className="py-10 bg-gradient-to-r from-blue-700 to-blue-400 " id="copyright">
          <Menu className="justify-left" />
          <p className="pl-16 font-semibold text-sm mt-4 mb-6 text-white"> © 2022 Nealle Page</p>
        </div>
    )

}


