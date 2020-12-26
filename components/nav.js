import Link from 'next/link'

const links = [
    {label :'About', href: '#about'},
    {label :'Skills', href: '#skills'},
    {label :'Contact', href: '#contact'}
]
export default function nav() {
    return (
        <header>
            <div className="h-8 m-0 p-0 bg-gradient-to-r from-blue-700 to-blue-400"></div>
            <div className="pt-6 ml-4 px-4">
            <ul className="flex flex-row justify-end font-mono text-gray-700 dark:text-gray-50 space-x-2">
            {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="w-24 hover:bg-gray-200 rounded-lg hover:font-bold hover:text-gray-800 hover:text-lg text-center">
              <a href={href}>
                {label}
              </a>
            </li>
          ))}
            </ul> 
            </div>
        </header>
    )
  }
