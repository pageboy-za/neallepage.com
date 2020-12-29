import Link from 'next/link'

const links = [
    {label :'About', href: '/#about'},
    {label :'Skills', href: '/#skills'},
    {label :'Contact', href: '/#contact'},
    {label :'Resume', href: '/resume'},
    
  ]

  export default function nav() {
      return (
        <div className="pt-6 ml-4 px-4">
            <ul className="flex flex-row font-mono text-gray-700 dark:text-gray-50 space-x-2">
            {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="w-24 hover:bg-gray-800 hover:text-gray-200 dark:hover:bg-gray-200 rounded-lg hover:font-bold dark:hover:text-gray-800 hover:text-lg text-center">
               <Link href={href}><a>{label}</a></Link>
            </li>
          ))}
            </ul> 
        </div>
      )}