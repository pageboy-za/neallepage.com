import Container from './structural/container'
import { EXAMPLE_PATH } from '../lib/constants'
import Menu from './menu'

const Footer = () => {
  return (
    <footer className="bg-darkBG border-t border-copper-500">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-4xl lg:text-[2.5rem] text-copper-500 font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Nealle Page
          </h3>
          <div className="flex justify-center items-center lg:pl-4 lg:w-1/2">
            <Menu showHome={true} />
          </div>        
          <div className='flex flex-row items-center justify-center'>          
            <p className="pl-16 font-semibold text-sm mt-4 mb-6 text-copper-500"> © 2022 Nealle Page</p>
          </div>  
        </div>
      </Container>
    </footer>
  )
}

export default Footer
