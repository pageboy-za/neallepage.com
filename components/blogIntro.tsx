import Link from "next/link"
import Menu from "./menu"

const BlogIntro = () => {
  return (
    <section className="flex flex-col ">
      <div className="w-full bg-gold-200 border-gray-400 rounded-b-lg max-w-screen-2xl py-2 mb-1">
        <div className='flex flex-col md:flex-col h-48 pr-6'>
          <div className="flex justify-end">
            <Menu showHome={true} />
          </div>
          <div className="flex justify-start">
            <Link href="/">
                <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight mr-4 pr-8 mb-8 text-copper-700">
                    Nealle Page
                </h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogIntro