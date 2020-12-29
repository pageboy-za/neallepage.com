import Link from 'next/link'

export default function buttonLink({label, href}) {
    return (
        <div className="flex justify-center md:align-left mt-4 px-4">
            <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-400 text-white shadow-lg">
               <Link href={href} >{label}</Link>
            </div>
        </div>
    )
}   